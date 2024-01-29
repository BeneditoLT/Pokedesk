// Importa os tipos de ações do Redux para o reducer
import {
  LOAD_DATA_REQUEST,
  LOAD_DATA_SUCCESS,
  LOAD_DATA_FAILURE,
  LOAD_POKE_REQUEST,
  LOAD_POKE_SUCCESS,
  LOAD_POKE_FAILURE,
  LOAD_TYPE_LIST_REQUEST,
  LOAD_TYPE_LIST_SUCCESS,
  LOAD_TYPE_LIST_FAILURE,
} from "./poke.acitionsTypes";

// Define uma chave para identificar o reducer no estado global
export const POKE_KEY = 'pokeStore';

// Interface que representa o estado inicial do reducer
interface PokeState {
  data: string[]; // Altere o tipo conforme a estrutura real dos seus dados
  loading: boolean;
  errorMessage: string;
  pokeUrlData: any; // Altere o tipo conforme a estrutura real dos seus dados
  typeList: any[]; // Altere o tipo conforme a estrutura real dos seus dados
}

// Estado inicial do reducer
const initialState: PokeState = {
  data: [],
  loading: false,
  errorMessage: '',
  pokeUrlData: {},
  typeList: [],
};

// Tipos de ações disponíveis para o reducer
type PokeAction =
  | { type: typeof LOAD_DATA_REQUEST }
  | { type: typeof LOAD_DATA_SUCCESS; payload: string } // Altere o tipo conforme necessário
  | { type: typeof LOAD_DATA_FAILURE; payload: string }
  | { type: typeof LOAD_POKE_REQUEST }
  | { type: typeof LOAD_POKE_SUCCESS; payload: string } // Altere o tipo conforme necessário
  | { type: typeof LOAD_POKE_FAILURE; payload: string }
  | { type: typeof LOAD_TYPE_LIST_REQUEST }
  | { type: typeof LOAD_TYPE_LIST_SUCCESS; payload: string } // Altere o tipo conforme necessário
  | { type: typeof LOAD_TYPE_LIST_FAILURE; payload: string };

// Reducer que manipula o estado global com base nas ações recebidas
export const pokeReducer = (state: PokeState = initialState, action: PokeAction): PokeState => {
  const { type, payload } = action;

  switch (type) {
    // Casos em que a requisição está em andamento
    case LOAD_DATA_REQUEST:
    case LOAD_POKE_REQUEST:
    case LOAD_TYPE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    // Caso em que a requisição de dados é bem-sucedida
    case LOAD_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: payload,
      };

    // Caso em que a requisição de detalhes de Pokémon é bem-sucedida
    case LOAD_POKE_SUCCESS:
      return {
        ...state,
        loading: false,
        pokeUrlData: payload,
      };

    // Caso em que a requisição de lista de tipos é bem-sucedida
    case LOAD_TYPE_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        typeList: payload,
      };

    // Casos em que a requisição falha
    case LOAD_DATA_FAILURE:
    case LOAD_POKE_FAILURE:
    case LOAD_TYPE_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: payload,
      };

    // Caso padrão, retorna o estado atual
    default:
      return state;
  }
};
