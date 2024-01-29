import { AxiosResponse } from 'axios';
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
import Axios from 'axios';
import { Dispatch } from 'redux';

interface LoadDataSuccessPayload {
  data: string; // Replace with the actual type of your response data
}

interface LoadPokeSuccessPayload {
  pokeData: string; // Replace with the actual type of your response data
}

interface LoadTypeSuccessPayload {
  typeData: string; // Replace with the actual type of your response data
}

export const loadData = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: LOAD_DATA_REQUEST });
      const dataURL = 'https://pokeapi.co/api/v2/pokemon?limit=1000&offset=0';
      const response: AxiosResponse<LoadDataSuccessPayload> = await Axios.get(dataURL);
      dispatch({ type: LOAD_DATA_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: LOAD_DATA_FAILURE, payload: error });
    }
  };
};

export const loadPokeName = (pokemonName: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: LOAD_POKE_REQUEST });
      const dataURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
      const response: AxiosResponse<LoadPokeSuccessPayload> = await Axios.get(dataURL);
      dispatch({ type: LOAD_POKE_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: LOAD_POKE_FAILURE, payload: error });
    }
  };
};

export const loadTypeList = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({ type: LOAD_TYPE_LIST_REQUEST });
      const typeListURL = 'https://pokeapi.co/api/v2/type/';
      const response: AxiosResponse<string> = await Axios.get(typeListURL);
      dispatch({ type: LOAD_TYPE_LIST_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: LOAD_TYPE_LIST_FAILURE, payload: error });
    }
  };
};



export const loadTypeData = async (type: string, search?: string) => {
  try {
    let typeURL = `https://pokeapi.co/api/v2/type/${type}`;

    // Append search parameter if provided
    if (search) {
      typeURL += `?search=${search}`;
    }

    const response: AxiosResponse<LoadTypeSuccessPayload> = await Axios.get(typeURL);

    // Retorna a lista de nomes de Pokémon
    const pokemonNames = response.data?.pokemon.map(pokemon => pokemon.pokemon.name) || [];
   // console.log(`Pokémon names of Principal type ${type}:`, pokemonNames);  //principal
    return pokemonNames;
  } catch (error) {
    console.error("Error in loadTypeData:", error);
    // Em caso de erro, você pode decidir como lidar com isso
    return [];
  }
};