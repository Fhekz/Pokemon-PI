import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPokemons } from "../../actions";
import Card from "../Card/Card";
import styles from "./Cards.module.css";

export default function Cards() {
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.allPokemons);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsPerPage] = useState(12);
  const indexOfLastPokemon = currentPage * pokemonsPerPage;
  const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;
  const currentPokemons = allPokemons.slice(
    indexOfFirstPokemon,
    indexOfLastPokemon
  );

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  if (!currentPokemons.length) {
    return (
      <div className={styles.loading}>
        <img src="pokeball.gif" alt="loading" />
        <h1>Loading... please wait</h1>
      </div>
    );
  } else if (currentPokemons) {
    return (
      <div className={styles.cards}>
        {currentPokemons.map((p, i) => {
          return (
            <div key={i}>
              <Link to={`/home/${p.id}`}>
                <Card name={p.name} image={p.image} types={p.types} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}
