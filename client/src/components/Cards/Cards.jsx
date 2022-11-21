import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPokemons } from "../../actions";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.filteredPokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );
  const totalPages = Math.ceil(allPokemons.length / pokemonsPerPage);

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  const previousPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(currentPage - 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const nextPage = () => {
    if (currentPage === totalPages) return;
    setCurrentPage(currentPage + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  if (currentPage > totalPages) previousPage();

  if (currentPokemons.length) {
    return (
      <main className={styles.main}>
        <div className={styles.cards}>
          {currentPokemons.map((p, i) => {
            return (
              <div key={i}>
                <Link to={`/pokemon/${p.id}`}>
                  <Card name={p.name} image={p.image} types={p.types} />
                </Link>
              </div>
            );
          })}
        </div>
        <div className={styles.paginated}>
          <div>
            <button onClick={previousPage}> Previous page </button>
          </div>
          <div>
            <p>
              {currentPage} / {totalPages}
            </p>
          </div>
          <div>
            <button onClick={nextPage}>Next page </button>
          </div>
        </div>
      </main>
    );
  } else {
    return (
      <div className={styles.loading}>
        <img src="../pokeball.gif" alt="loading" />
        <h1>Loading... please wait</h1>
      </div>
    );
  }
}
