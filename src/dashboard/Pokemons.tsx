import Card from "../components/card/Card";
import PokemonActionsAPI from "../api/Pokemon.api";
import { useEffect, useState } from "react";
import BasicTable from "../components/table/Table";
import { useDispatch, useSelector } from "react-redux";
import { GetPokemonActions } from "./actions";
import BasicModal from "../components/modal/modal";
import Spinner from "../components/spinner/Spinner";
import Alerts from "../components/alert/alert";

const Pokemons = () => {
    const [open, setOpen] = useState(false);
    const [pokemon, setPokemon] = useState({} as any);

    const dispatch = useDispatch();

    const { pokemons, getPokemonsStatus } = useSelector((store: any) => ({
        pokemons: store.pokemon.getPokemons,
        getPokemonsStatus: store.pokemon.getPokemonsStatus,
    }));

    const emptyPokemons = pokemons.length === 0 && getPokemonsStatus === GetPokemonActions.GETPOKEMON_SUCCESSFUL;

    const pokemonLoader = GetPokemonActions.GETPOKEMON_STARTED === getPokemonsStatus;

    const getPokemons = async () => {
        dispatch({
            type: GetPokemonActions.GETPOKEMON_STARTED
        });

        const {success, payload} = await PokemonActionsAPI.getPokemons();
        if (success) {
            dispatch({
                type: GetPokemonActions.GETPOKEMON_SUCCESSFUL,
                payload
            });
        } else {
            dispatch({
                type: GetPokemonActions.GETPOKEMON_FAILED,
                payload 
            });
        }
    }

    const pokemonDataTitles = ["ID", "Identifier", "Height", "Weight"];
    const pokemonDataKeys = ["id", "identifier", "height", "weight"];

    useEffect(() => {
        getPokemons();
    }, []);

    const handleViewPokemon = (data: any) => {
        setPokemon(data);
        setOpen(true);
    }

    return (
        <Card>
            <BasicModal open={open} onClose={() => setOpen(false)}>
                <h2>Pokemon Details:</h2>
                <p><strong>Identifier:</strong> { pokemon.identifier }</p>
                <p><strong>Species ID:</strong> { pokemon.species_id }</p>
                <p><strong>Height:</strong> { pokemon.height }</p>
                <p><strong>Weight:</strong> { pokemon.weight }</p>
                <p><strong>Base Experience:</strong> { pokemon.base_experience }</p>
                <p><strong>Order:</strong> { pokemon.order }</p>
            </BasicModal>

           <div style={{ display: "flex", alignContent: "center" }}>
                <span 
                    style={{ fontWeight: "bold", fontSize: 25 }}>
                        All Pokemons
                </span>
                
                {pokemonLoader && <Spinner color="inherit" size={25} />}
           </div>

           {
               !emptyPokemons && 
               <BasicTable 
                    tableHeads={pokemonDataTitles} 
                    dataKeys={pokemonDataKeys} 
                    data={pokemons} 
                    onView={handleViewPokemon}
                />
           }

           { emptyPokemons && <Alerts message="No pokemon found." severity="info" /> }
        </Card>
    );
}

export default Pokemons;
