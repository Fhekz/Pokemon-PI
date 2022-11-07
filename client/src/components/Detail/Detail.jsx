import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonById, clearPokemonById } from "../../actions";
import styles from "./Detail.module.css";

export default function Detail() {
  const allTypes = {
    normal: "normal",
    fighting: "fighting",
    flying: "flying",
    poison: "poison",
    ground: "ground",
    rock: "rock",
    bug: "bug",
    ghost: "ghost",
    steel: "steel",
    fire: "fire",
    water: "water",
    grass: "grass",
    electric: "electric",
    psychic: "psychic",
    ice: "ice",
    dragon: "dragon",
    dark: "dark",
    fairy: "fairy",
  };
  const dispatch = useDispatch();
  const pokemonByID = useSelector((state) => state.pokemonById);

  let { id } = useParams();

  useEffect(() => {
    dispatch(getPokemonById(id));
    dispatch(clearPokemonById());
  }, []);

  if (pokemonByID.length === 0) {
    return (
      <>
        <div className={styles.loading}>
          <img src="../pokeball.gif" alt="loading" />
          <h1>Loading... please wait</h1>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className={styles.main}>
          <div className={styles.card}>
            <div className={styles.top}>
              <div>
                <p>
                  {pokemonByID[0].name.charAt(0).toUpperCase() +
                    pokemonByID[0].name.slice(1)}
                </p>
              </div>
              <div>
                <p>#{pokemonByID[0].id}</p>
              </div>
            </div>
            <div className={styles.middle}>
              <div>
                <img
                  src={`${pokemonByID[0].image}`}
                  alt={pokemonByID[0].name}
                />
              </div>
              <div className={styles.middle_stats}>
                <div className={styles.stats1}>
                  <div>
                    <h4>Health</h4>
                    <p>{pokemonByID[0].hp}</p>
                  </div>
                  <div>
                    <h4>Attack</h4>
                    <p>{pokemonByID[0].attack}</p>
                  </div>
                  <div>
                    <h4>Defense</h4>
                    <p>{pokemonByID[0].defense}</p>
                  </div>
                </div>
                <div className={styles.stats2}>
                  <div>
                    <h4>Speed</h4>
                    <p>{pokemonByID[0].speed}</p>
                  </div>
                  <div>
                    <h4>Height</h4>
                    <p>{pokemonByID[0].height}</p>
                  </div>
                  <div>
                    <h4>Weight</h4>
                    <p>{pokemonByID[0].weight}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              {pokemonByID[0].types &&
                pokemonByID[0].types.map((t, i) => {
                  if (t === allTypes[t]) {
                    return (
                      <img
                        src={`../${t}.png`}
                        alt={`type_${t}.png`}
                        width="60px"
                        height="25px"
                        key={i}
                      />
                    );
                  }
                })}
            </div>
          </div>
          <div className={styles.btn}>
            <Link to="/home">
              <button>Go Back</button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}
