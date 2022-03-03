import { useEffect, useState } from 'react';

import LeaderboardItem from './components/LeaderboardItem';
import PokemonTile from './components/PokemonTile';

import { FETCH_METHOD, LOCAL_STORAGE, USER_URL } from '../../config';

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

        const pokemonRatings = ratings.map((rating) => rating.rating.rating);

        const initialValue = 0;

        let sumOfRatings = pokemonRatings.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            initialValue
        );

        const averageRating = (sumOfRatings / ratings.length).toFixed(1);

        return averageRating;
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

    const postRating = async (newRating) => {
        await fetch(`${USER_URL.POKEMON_RATING}`, {
            method: `${FETCH_METHOD.POST}` ,
            headers: {
                'Content-Type': 'application/json',
                Authorization: localStorage.getItem(LOCAL_STORAGE.TOKEN),
            },
            body: JSON.stringify(newRating),
        });

        setFetchPokemon(!fetchPokemon);
    };

    return (
        <div className="leaderboard">
            {topRatedPokemon && (
                <>
                    <h2 className="top-3-leaders">Top Rated Pokemon</h2>
                    <div className="top-3-container">
                        {topRatedPokemon.map((pokemonListItem, index) => {
                            return (
                                <PokemonTile
                                    calcAverageRating={calcAverageRating}
                                    key={pokemonListItem.id}
                                    index={index}
                                    pokemonListItem={pokemonListItem}
                                    postRating={postRating}
                                    profileId={profileId}
                                />
                            );
                        })}
                    </div>
                </>
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
                                    calcAverageRating={calcAverageRating}
                                    key={pokemonListItem.id}
                                    pokemonListItem={pokemonListItem}
                                    postRating={postRating}
                                    profileId={profileId}
                                />
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;
