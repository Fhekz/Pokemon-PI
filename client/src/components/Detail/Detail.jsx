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
      <div>
        <img src="../pokeball.gif" alt="loading" />
        <h1>Loading... please wait</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <img src={`${pokemonByID[0].image}`} alt={pokemonByID[0].name} />
        </div>
        <div>
          <h4>Health</h4>
          <p>{pokemonByID[0].hp}</p>
        </div>
        <div>
          <h4>Speed</h4>
          <p>{pokemonByID[0].speed}</p>
        </div>
        <div>
          <h4>Attack</h4>
          <p>{pokemonByID[0].attack}</p>
        </div>
        <div>
          <h4>Defense</h4>
          <p>{pokemonByID[0].defense}</p>
        </div>
        <div>
          <h4>Height</h4>
          <p>{pokemonByID[0].height}</p>
        </div>
        <div>
          <h4>Weight</h4>
          <p>{pokemonByID[0].weight}</p>
        </div>
        <div>
          <p>{pokemonByID[0].name}</p>
          <div>
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
        <div>
          <Link to="/home">
            <p>Go Back</p>
          </Link>
        </div>
      </div>
    );
  }
}
