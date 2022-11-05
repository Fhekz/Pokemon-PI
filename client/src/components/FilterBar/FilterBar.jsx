import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterPokemonsByType,
  filterCreated,
  filterByAttack,
  Sort,
  clearState,
} from "../../actions";
import styles from "./FilterBar.module.css";
export default function FilterBar() {
  const [showFilterBar, setShowFilterBar] = useState(false);
  const [selectType, setSelectType] = useState("");
  const [selectCreator, setSelectCreator] = useState("");
  const [selectOrder, setSelectOrder] = useState("");
  const [selectAttack, setSelectAttack] = useState("");
  const dispatch = useDispatch();
  function handleFilterByType(e) {
    setSelectType(e.target.value);
    dispatch(filterPokemonsByType(e.target.value));
  }

  function handleFilterCreated(e) {
    setSelectCreator(e.target.value);
    dispatch(filterCreated(e.target.value));
  }

  function handleFilterByAttack(e) {
    setSelectAttack(e.target.value);
    dispatch(filterByAttack(e.target.value));
  }

  function onSelectsChange(e) {
    setSelectOrder(e.target.value);
    dispatch(Sort(e.target.value));
  }
  const clearAllFilters = () => {
    setSelectType("");
    setSelectCreator("");
    setSelectAttack("");
    setSelectOrder("");
    dispatch(clearState());
  };
  if (!showFilterBar) {
    return (
      <div className={styles.show}>
        <button onClick={() => setShowFilterBar(true)}>Show filters</button>
      </div>
    );
  } else {
    return (
      <div className={styles.filters}>
        <div>
          <p>Order by</p>
          <select
            name="select"
            onChange={onSelectsChange}
            value={selectOrder}
            className="a-z"
          >
            <option hidden>A-Z</option>
            <option value="ascending">Ascending</option>
            <option value="descending">Descending</option>
          </select>
          <select
            name="selects"
            onChange={handleFilterByAttack}
            value={selectAttack}
            className="attack"
          >
            <option hidden>Strenght</option>
            <option value="greater strenght">Greater strenght</option>
            <option value="lower strenght">Lower strenght</option>
          </select>
        </div>
        <div>
          <p>Filter by</p>
          <select onChange={handleFilterByType} value={selectType}>
            <option hidden>Type</option>
            <option value="normal">Normal</option>
            <option value="fighting">Fighting</option>
            <option value="flying">Flying</option>
            <option value="poison">Poison</option>
            <option value="ground">Ground</option>
            <option value="rock">Rock</option>
            <option value="bug">Bug</option>
            <option value="ghost">Ghost</option>
            <option value="steel">Steel</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
            <option value="psychic">Psychic</option>
            <option value="ice">Ice</option>
            <option value="dragon">Dragon</option>
            <option value="dark">Dark</option>
            <option value="fairy">Fairy</option>
          </select>
          <select onChange={handleFilterCreated} value={selectCreator}>
            <option hidden>All</option>
            <option value="created">Created</option>
            <option value="existing">Existing</option>
          </select>
        </div>
        <div className={styles.hidden}>
          <div>
            <button onClick={clearAllFilters}>Clear filters</button>
          </div>
          <div>
            <button onClick={() => setShowFilterBar(false)}>
              Hide filters
            </button>
          </div>
        </div>
      </div>
    );
  }
}
