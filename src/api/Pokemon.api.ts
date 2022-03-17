import axios from "axios";
import { PokemonsResponseObject } from "../types/entities";
import { RequestResponse } from "../types/request.response";

const getPokemons = async () : Promise<RequestResponse<PokemonsResponseObject>> => {    
    try {
        const response = await axios.get('/pokemons/');
        return { success: true, payload: response.data }
    } catch {
        return { success: false, payload: "Could not get pokemons." }
    }
}

const PokemonActionsAPI = {
    getPokemons
}

export default PokemonActionsAPI;

