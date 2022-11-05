const initialState = {
  allPokemons: [],
  filteredPokemons: [],
  pokemonById: [],
  pokemonsTypes: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_POKEMONS":
      return {
        ...state,
        allPokemons: action.payload,
        filteredPokemons: action.payload,
      };
    case "GET_POKEMON_BY_NAME":
      const searchPokemon = state.allPokemons.filter((p) => {
        return p.name.toLowerCase().includes(action.payload.toLowerCase());
      });
      if (searchPokemon) {
        return {
          ...state,
          filteredPokemons: searchPokemon,
        };
      } else {
        return state;
      }
    case "SEARCH_RESET":
      return {
        ...state,
        filteredPokemons: state.allPokemons,
      };
    case "FILTER_BY_TYPE":
      const allPokemons = state.allPokemons;
      const typeFiltered =
        action.payload === "type"
          ? allPokemons
          : allPokemons.filter((e) => e.types.includes(action.payload));
      return {
        ...state,
        filteredPokemons: typeFiltered,
      };
    case "SORT":
      let orderedCharacters = [...state.filteredPokemons];
      orderedCharacters = orderedCharacters.sort((a, b) => {
        if (a.name < b.name) {
          return action.payload === "ascending" ? -1 : 1;
        }
        if (a.name > b.name) {
          return action.payload === "ascending" ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        filteredPokemons:
          action.payload === "filter" ? state.allPokemons : orderedCharacters,
      };
    case "FILTER_CREATED":
      const createdFilter =
        action.payload === "created"
          ? state.allPokemons.filter((e) => e.id.length > 2)
          : state.allPokemons.filter((e) => e.id <= 40);
      return {
        ...state,
        filteredPokemons:
          action.payload === "all" ? state.allPokemons : createdFilter,
      };
    case "FILTER_BY_ATTACK":
      let attackFilter = [...state.filteredPokemons];
      attackFilter = attackFilter.sort((a, b) => {
        if (a.attack < b.attack) {
          return action.payload === "greater strenght" ? 1 : -1;
        }
        if (a.attack > b.attack) {
          return action.payload === "greater strenght" ? -1 : 1;
        }
        return 0;
      });
      return {
        ...state,
        filteredPokemons:
          action.payload === "strenght" ? state.allPokemons : attackFilter,
      };
    case "CLEAR_STATE":
      return {
        ...state,
        filteredPokemons: state.allPokemons,
        addedPokemon: false,
      };
    case "GET_POKEMON_BY_ID":
      return {
        ...state,
        pokemonById: action.payload,
      };
    case "CLEAR_POKEMON_BY_ID":
      return {
        ...state,
        pokemonById: [],
      };
    case "CREATE_POKEMON":
      return {
        ...state,
      };
    case "GET_POKEMON_TYPE":
      return {
        ...state,
        pokemonsTypes: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
