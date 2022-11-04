import React from "react";
import Cards from "../Cards/Cards";
import NavBar from "../NavBar/NavBar";
import FilterBar from "../FilterBar/FilterBar";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.home}>
      <div>
        <NavBar />
      </div>
      <div>
        <FilterBar />
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
}
