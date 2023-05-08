import {
  ALPHA_ORDER,
  ATTACK_ORDER,
  CLEAR_DETAIL,
  FILTER_BY_TYPE,
  FILTER_CREATED,
  GET_ALL_POKEMONS,
  GET_DETAIL,
  GET_TYPES,
  RECARGAR,
  SEARCH_NAME,
} from "./actions";

const initialState = {
  allPokemons: [],
  pokemonsType: [],
  pokemons: [],
  detail: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_POKEMONS:
      return {
        ...state,
        pokemons: action.payload,
        allPokemons: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        pokemonsType: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        detail: [],
      };
    case SEARCH_NAME:
      return {
        ...state,
        pokemons: action.payload,
      };
    case RECARGAR:
      return {
        ...state,
        pokemons: state.allPokemons,
      };
    case ALPHA_ORDER:
      let orderPokemons = [...state.pokemons];
      orderPokemons = orderPokemons.sort((a, b) => {
        if (a.name < b.name) {
          return action.payload === "ASCENDENTE" ? -1 : 1;
        }
        if (a.name > b.name) {
          return action.payload === "ASCENDENTE" ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        pokemons: action.payload === "a-z" ? state.pokemons : orderPokemons,
      };
    case ATTACK_ORDER:
      let pokemonsOrder = [...state.pokemons];
      pokemonsOrder = pokemonsOrder.sort((a, b) => {
        if (a.attack < b.attack) {
          return action.payload === "MENOR FUERZA" ? -1 : 1;
        }
        if (a.attack > b.attack) {
          return action.payload === "MENOR FUERZA" ? 1 : -1;
        }
        return 0;
      });
      return {
        ...state,
        pokemons: action.payload === "attack" ? state.pokemons : pokemonsOrder,
      };
    case FILTER_CREATED:
      let createdFilter =
        action.payload === "creados"
          ? state.allPokemons.filter((p) => p.created === true)
          : state.allPokemons.filter((p) => p.created === false);
      return {
        ...state,
        pokemons:
          action.payload === "todos" ? state.allPokemons : createdFilter,
      };
    case FILTER_BY_TYPE:
      return {
        ...state,
        pokemons:
          action.payload === "todos"
            ? state.allPokemons
            : state.allPokemons.filter((p) => {
                return p.Types.some((type) => type.name === action.payload);
              }),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
