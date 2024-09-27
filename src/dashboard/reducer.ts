import { GetPokemonActions } from "./actions";

const initialState = {
    getPokemons: [],
    getPokemonsStatus: GetPokemonActions.GETPOKEMON_DEFAULT,
    getPokemonError: ""
};

const pokemonReducer = (state = {...initialState}, action: any) => {
    switch(action.type) {
        case GetPokemonActions.GETPOKEMON_STARTED: {
            state = {...state, getPokemonsStatus: GetPokemonActions.GETPOKEMON_STARTED, getPokemonError: ""}

            return state; 
        }

        case GetPokemonActions.GETPOKEMON_SUCCESSFUL: {
            state = {...state, getPokemonsStatus: GetPokemonActions.GETPOKEMON_SUCCESSFUL, getPokemons: action.payload, getPokemonError: ""}

            return state; 
        }

        case GetPokemonActions.GETPOKEMON_FAILED: {
            state = {...state, getPokemonsStatus: GetPokemonActions.GETPOKEMON_FAILED, getPokemonError: action.payload}

            return state; 
        }

        default: 
            return state;
    }
}

export default pokemonReducer;