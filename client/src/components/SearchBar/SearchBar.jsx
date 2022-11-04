import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsByName, searchReset } from "../../actions";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    if (e.target.value) {
      dispatch(getPokemonsByName(e.target.value));
    } else {
      dispatch(searchReset());
    }
  };

  return (
    <div className={styles.searchbar}>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        placeholder="Search for a Pokémon"
      />
    </div>
  );
}
