import { combineReducers} from "redux";
import authReducer from "../auth/reducer";
import pokemonReducer from "../dashboard/reducer";

const rootReducer = combineReducers({ 
    auth: authReducer,
    pokemon: pokemonReducer
 });

 export default rootReducer;