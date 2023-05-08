import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { addPokemon, getAllPokemons, getTypes } from "../../redux/actions";
import Style from "./Form.module.css";
const Form = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    hp: 0,
    attack: 0,
    defense: 0,
    speed: 0,
    height: 0,
    weight: 0,
    type1: "",
    type2: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    image: "",
    type: "",
    attributes: "",
  });
  const nombres = useSelector((state) =>
    state.allPokemons.map((pokemon) => pokemon.name)
  );
  const types = useSelector((state) => state.pokemonsType);
  const typesOrdenados = types.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  const validate = (input) => {
    let errors = {};
    if (!input.name) {
      errors.name = "Nombre es requerido";
    } else if (input.name.length > 10) {
      errors.name = "Debe ser menor a 10 caracteres";
    } else if (!/^[A-Za-z]+$/.test(input.name)) {
      errors.name = "No se permiten caracteres especiales";
    } else if (nombres.includes(input.name)) {
      errors.name = "Ya existe un pokemon con ese nombre";
    }
    if (
      input.image &&
      !/(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg|.svg)(\?[^\s[",><]*)?/.test(
        input.image
      )
    ) {
      errors.image = "Formato no valido";
    }
    if (!input.type1 || input.type1 === "Type1") {
      errors.type = "Se requiere al menos un type";
    }
    if (
      !input.hp ||
      !input.attack ||
      !input.defense ||
      !input.height ||
      !input.weight
    ) {
      errors.attributes = "atributos inconpletos";
    }
    return errors;
  };

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getAllPokemons());
  }, [dispatch]);
  function handleChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validate({
        ...input,
        [event.target.name]: event.target.value,
      })
    );
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addPokemon(input));
    alert("Pokemon creado correctamente");
    setInput({
      name: "",
      hp: 0,
      attack: 0,
      defense: 0,
      speed: 0,
      height: 0,
      weight: 0,
      type1: "",
      type2: "",
    });
    history.push("/home");
  };
  return (
    <div className={Style.container}>
      <form className={Style.form} onSubmit={handleSubmit}>
        <div className={Style.divs}>
          <label className={Style.label}>Nombre: </label>
          <input
            type="text"
            placeholder="Nombre de tu pokemon"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          {errors.name && <span className={Style.span}>{errors.name}</span>}
        </div>
        <div className={Style.divs}>
          <label className={Style.label}>Imagen: </label>
          <input
            type="text"
            placeholder="URL de tu imagen"
            name="image"
            value={input.image}
            onChange={handleChange}
          />
          {errors.image && <span className={Style.span}> {errors.image}</span>}
        </div>
        <div>
          <label className={Style.label}>Vida: </label>
          <input
            type="range"
            min="1"
            max="200"
            name="hp"
            value={input.hp}
            onChange={handleChange}
          />
          <span>{input.hp}</span>
        </div>
        <div>
          <label className={Style.label}>Ataque: </label>
          <input
            type="range"
            min="1"
            max="150"
            name="attack"
            value={input.attack}
            onChange={handleChange}
          />
          <span>{input.attack}</span>
        </div>
        <div>
          <label className={Style.label}>Defensa: </label>
          <input
            type="range"
            min="1"
            max="150"
            name="defense"
            value={input.defense}
            onChange={handleChange}
          />
          <span>{input.defense}</span>
        </div>
        <div>
          <label className={Style.label}>Velocidad: </label>
          <input
            type="range"
            min="1"
            max="100"
            name="speed"
            value={input.speed}
            onChange={handleChange}
          />
          <span>{input.speed}</span>
        </div>
        <div>
          <label className={Style.label}>Altura: </label>
          <input
            type="range"
            min="1"
            max="90"
            name="height"
            value={input.height}
            onChange={handleChange}
          />
          <span>{input.height}</span>
        </div>
        <div>
          <label className={Style.label}>Peso: </label>
          <input
            type="range"
            min="1"
            max="2000"
            name="weight"
            value={input.weight}
            onChange={handleChange}
          />
          <span>{input.weight}</span>
        </div>
        {errors.attributes && (
          <span className={Style.span}>{errors.attributes}</span>
        )}
        <div>
          <select
            className={Style.select}
            name="type1"
            value={input.type1}
            onChange={handleChange}
          >
            <option value="Type 1">Type1:</option>
            {typesOrdenados &&
              typesOrdenados.map((type) => {
                return <option value={type.id}>{type.name}</option>;
              })}
          </select>
          <select
            className={Style.select}
            name="type2"
            value={input.type2}
            onChange={handleChange}
          >
            <option value="Type 2">Type2:</option>
            {typesOrdenados &&
              typesOrdenados.map((type) => {
                return <option value={type.id}>{type.name}</option>;
              })}
          </select>
          {errors.type && <span className={Style.span}>{errors.type}</span>}
        </div>

        <div className={Style.botones}>
          <Link to="/home">
            <button className={Style.btn}>Atras</button>{" "}
          </Link>
          <button
            className={Style.btn}
            type="submit"
            disabled={errors.name || errors.image || errors.type || !input.name}
          >
            Crear
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
