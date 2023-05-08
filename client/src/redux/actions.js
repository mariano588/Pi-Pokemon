import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const GET_DETAIL = "GET_DETAIL";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const SEARCH_NAME = "SEARCH_NAME"
export const RECARGAR = "RECARGAR"
export const ALPHA_ORDER = "ALPHA_ORDER"
export const ATTACK_ORDER = "ATTACK_ORDER"
export const FILTER_CREATED = "FILTER_CREATED"
export const FILTER_BY_TYPE = "FILTER_BY_TYPE"

export const getAllPokemons = () =>{
    return async function (dispatch) {
        const response = await axios.get("http://localhost:3001/pokemons")
        const pokemones = response.data
        dispatch({ type: GET_ALL_POKEMONS, payload: pokemones})
    }
}

export const getTypes = () =>{
    return async function (dispatch){
        const response = await axios.get("http://localhost:3001/types")
        dispatch({ type: GET_TYPES, payload:response.data})
    }
}

export const getDetail = (id) =>{
    return async function (dispatch){
        const response = await axios.get(`http://localhost:3001/pokemons/${id}`)
        dispatch({ type: GET_DETAIL, payload:response.data})
    }
}
export const clearDetail = () =>{
    return{
        type: CLEAR_DETAIL
    }
}
export const searchByName = (name) =>{
    return async function (dispatch){
        const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
        dispatch({type: SEARCH_NAME, payload: response.data})
    }
}
export const recargarPokes = () =>{
    return{type: RECARGAR}
}
export const addPokemon = (pokemon) =>{
    return async function (){
        const response = await axios.post("http://localhost:3001/pokemons", pokemon)
        return response
    } 
}
export const alphaOrder = (order) =>{
    return{type:ALPHA_ORDER, payload:order}
}
export const attackOrder = (order) =>{
    return{type: ATTACK_ORDER, payload:order}
}
export const filterCreated = (filtro) =>{
    return{type: FILTER_CREATED, payload:filtro}
}
export const filterByType = (tipo) =>{
    return{type: FILTER_BY_TYPE, payload: tipo}
}