import { useEffect, useState } from 'react';

import LeaderboardItem from './components/LeaderboardItem';
import PokemonTile from './components/PokemonTile';

import { USER_URL } from '../../config';

const Leaderboard = (props) => {
    const { user } = props;

    const [pokemons, setPokemons] = useState([]);
    const [topRatedPokemon, setTopRatedPokemon] = useState([]);
    const [PokemonList, setPokemonList] = useState([]);
    const [fetchPokemon, setFetchPokemon] = useState(false);

    useEffect(() => {
        const getPokemon = async () => {
            const response = await fetch(`${USER_URL.POKEMON}`);

            const data = await response.json();

            const fetchedPokemon = data.data;

            const sortedPokemon = sortPokemon(fetchedPokemon);

            setPokemons(sortedPokemon);
        };

        getPokemon();
    }, [fetchPokemon]);

    useEffect(() => {
        if (!pokemons) {
            return;
        }

        const numberOfPokemon = 3;

        setTopRatedPokemon(pokemons.slice(0, numberOfPokemon));

        setPokemonList(pokemons.slice(numberOfPokemon));
    }, [pokemons]);

    let profileId;
    
    if (user) {
        profileId = user.profile.id;
    }

    const calcAverageRating = (ratings) => {
        if (!ratings.length) return 0;

        const pokemonRatingsArr = ratings.map((rating) => rating.rating.rating);

        const initialValue = 0;

        let sumOfRatings = pokemonRatingsArr.reduce(
            (previousValue, currentValue) => previousValue + currentValue, initialValue
        );

        const avarageRating = (sumOfRatings / ratings.length).toFixed(1);

        return avarageRating;
    };

    const sortPokemon = (pokemon) => {
        return pokemon.sort((firstPokemon, secondPokemon) => {
            const firstPokemonAvgRating = calcAverageRating(firstPokemon.ratings);
            const secondPokemonAvgRating = calcAverageRating(secondPokemon.ratings);

            if (firstPokemonAvgRating < secondPokemonAvgRating) {
                return 1;
            }

            if (firstPokemonAvgRating > secondPokemonAvgRating) {
                return -1;
            }

            return 0;
        });
    };

    return (
        <div className="leaderboard">
            {topRatedPokemon && (
                <PokemonTile
                    topRatedPokemon={topRatedPokemon}
                    calcAverageRating={calcAverageRating}
                />
            )}

            <h1 className="leaderboard-title">Leaderboard</h1>

            <table className="leaderboard-list">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Type</th>
                        <th>HP</th>
                        <th>Attack</th>
                        <th>Defense</th>
                        <th>Special Atk</th>
                        <th>Special Def</th>
                        <th>Speed</th>
                        <th>Average Rating</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {PokemonList &&
                        PokemonList.map((pokemonListItem) => {
                            return (
                                <LeaderboardItem
                                    profileId={profileId}
                                    pokemonListItem={pokemonListItem}
                                    fetchPokemon={fetchPokemon}
                                    setFetchPokemon={setFetchPokemon}
                                    calcAverageRating={calcAverageRating}
                                    key={pokemonListItem.id}
                                />
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
