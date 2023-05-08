import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import style from "./CardContainer.module.css";

const CardContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const indexOfLastPost = currentPage * pokemonsPerPage;
  const indexOfFirstPost = indexOfLastPost - pokemonsPerPage;
  const allpokemons = useSelector((state) => state.pokemons);
  const totalPages = Math.ceil(allpokemons.length / pokemonsPerPage);
  const pokemons = allpokemons.slice(indexOfFirstPost, indexOfLastPost);

  const firstPage = () => {
    setCurrentPage(1);
  };
  const prevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
  };
  const lastPage = () => {
    setCurrentPage(totalPages);
  };
  const nextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
  };
  const paginado = (number) => {
    setCurrentPage(number);
  };
  useEffect(() => {
    setCurrentPage(1);
  }, [allpokemons]);
  return (
    <>
      <div className={style.container}>
        {pokemons?.map((pokemon) => {
          return (
            <Card
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.image}
              Types={pokemon.Types}
            />
          );
        })}
      </div>
      <div></div>
      <div className={style.paginado}>
        <button className={style.btn} onClick={firstPage}>
          {"<<"}
        </button>
        <button className={style.btn} onClick={prevPage}>
          Anterior
        </button>
        <Paginado
          totalPages={totalPages}
          currentPage={currentPage}
          paginado={paginado}
        />
        <button className={style.btn} onClick={nextPage}>
          Siguiente
        </button>
        <button className={style.btn} onClick={lastPage}>
          {">>"}
        </button>
      </div>
    </>
  );
};
export default CardContainer;
