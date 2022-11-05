import React from "react";
import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <div className={styles.landing}>
      <header className={styles.header}>
        <div>
          <img src="../logo-pokemon.png" alt="logo_pokemon.png" width="200px" />
        </div>
        <div className={styles.logos}>
          <div>
            <a href="https://www.linkedin.com/in/fmaldeco/">
              <img
                src="../logo-linkedin.png"
                alt="logo_linkedin.png"
                width="40px"
              />
            </a>
          </div>
          <div>
            <a href="https://github.com/Fhekz">
              <img
                src="../logo-github.png"
                alt="logo_github.png"
                width="40px"
              />
            </a>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.text}>
          <h1>Pokemon App</h1>
          <p>
            All the Pokémon data you'll ever need in one place, easily
            accessible through a modern webpage.
          </p>
          <Link to="/home">
            <button>Gotta Catch 'Em All</button>
          </Link>
        </div>
        <div>
          <img
            src="../pikachu.png"
            className={styles.pikachu}
            alt="pikachu.png"
          />
        </div>
      </main>
    </div>
  );
}
