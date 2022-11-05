import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";

export default function NavBar() {
  return (
    <div className={styles.background_header}>
      <header className={styles.header}>
        <div>
          <Link to="/">
            <img
              src="../logo-pokemon.png"
              alt="logo_pokemon.png"
              width="200px"
            />
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <div>
          <Link to="/createpokemon">
            <button>Create a Pokémon</button>
          </Link>
        </div>
      </header>
    </div>
  );
}
