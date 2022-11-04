import axios from "axios";

export function getAllPokemons() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3001/pokemons");
    return dispatch({
      type: "GET_ALL_POKEMONS",
      payload: json.data,
    });
  };
}

export function getPokemonsByName(payload) {
  return {
    type: "GET_POKEMON_BY_NAME",
    payload: payload,
  };
}

export function searchReset() {
  return {
    type: "SEARCH_RESET",
  };
}

export function filterPokemonsByType(payload) {
  return {
    type: "FILTER_BY_TYPE",
    payload,
  };
}

export function Sort(order) {
  return {
    type: "SORT",
    payload: order,
  };
}

export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

export function filterByAttack(payload) {
  return {
    type: "FILTER_BY_ATTACK",
    payload,
  };
}
export function clearState() {
  return {
    type: "CLEAR_STATE",
  };
}

export function getPokemonById(id) {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
    dispatch({ type: "GET_POKEMON_BY_ID", payload: response.data });
  };
}

export function clearPokemonById() {
  return {
    type: "CLEAR_POKEMON_BY_ID",
  };
}
