import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { clearDetail, getDetail } from "../../redux/actions";
import Style from "./Detail.module.css";

const Detail = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetail(id));
    dispatch(clearDetail());
  }, [dispatch, id]);
  let detail = useSelector((state) => state.detail);
  let poke = detail[0];
  if (poke) {
    return (
      <div className={Style.container}>
        <div className={Style.h1}>
          <h1>ID: {poke.id}</h1>
          <h1>
            Nombre: {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
          </h1>
        </div>
        <div>
          <img src={poke.image} width="300px" height="300px" alt={poke.name} />
        </div>
        <div className={Style.h1}>
          <h1>Vida: {poke.hp} Hp</h1>
          <h1>Ataque: {poke.attack}</h1>
          <h1>Defensa: {poke.defense}</h1>
          <h1>Velocidad: {poke.speed}</h1>
          <h1>Altura: {poke.height}</h1>
          <h1>Peso: {poke.weight}</h1>
        </div>
        <ul className={Style.h1}>
          {" "}
          <h1>Tipos:</h1>
          {poke.Types?.map((type) => (
            <h1> {type.name}</h1>
          ))}
        </ul>
        <Link to="/home">
          <button className={Style.btn}>Volver</button>
        </Link>
      </div>
    );
  } else {
    return (
      <div>
        <img
          src="https://media.tenor.com/_3R8EL8_DQYAAAAi/pokeball-pokemon.gif"
          alt="loading"
        />
      </div>
    );
  }
};
export default Detail;
