import React from "react";
import styles from "./Card.module.css";

export default function Card({ name, image, types }) {
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
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </h3>
      <img src={image} alt="img.jpg" width="150px" height="150px" />
      <div className={styles.types}>
        {types.map((t, i) => {
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
  );
}
