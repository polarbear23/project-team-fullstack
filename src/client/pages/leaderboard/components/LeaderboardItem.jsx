import { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';

import { LOCAL_STORAGE, USER_URL } from '../../../config';

const LeaderboardItem = (props) => {
    const { pokemon, fetchPokemon, setFetchPokemon, calcAverageRating, profileId } = props;

    const [rating, setRating] = useState(0);
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        if (!rating) {
            return;
        }

        const postRating = async (ratingToPost) => {
            await fetch(`${USER_URL.POKEMON_RATING}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: localStorage.getItem(LOCAL_STORAGE.TOKEN),
                },
                body: JSON.stringify({
                    profileId: profileId,
                    rating: ratingToPost,
                    pokemonId: pokemon.id,
                }),
            });

            setFetchPokemon(!fetchPokemon);
        };

        const ratingToPost = rating /20;
        
        postRating(ratingToPost);
    }, [rating]);

    useEffect(() => {
        setAverageRating(calcAverageRating(pokemon.ratings));
    }, [pokemon]);

    const handleRating = (rate) => setRating(rate);

    return (
        <tr className="leaderboard-list-item" key={pokemon.id}>
            <td
                data-column="pokemon-image"
                className="pokemon-leaderboard-icon-image"
            >
                <img
                    className="leaderboard-pokemon-icon"
                    src={pokemon.largeImageUrl}
                    alt={`${pokemon.name}`}
                />
            </td>
            <td
                data-column="pokemon-name"
                className="leaderboard-pokemon-name leaderboard-text"
            >
                {pokemon.name}
            </td>
            <td data-column="pokemon-type" className="leaderboard-pokemon-type">
                {pokemon.types.map((typeObj, index) => {
                    return (
                        <img
                            className="type-icon"
                            src={`/assets/pokemontypes/${typeObj.type.name.toLowerCase()}.svg`}
                            alt={`${typeObj.type.name.toLowerCase()}`}
                            key={index}
                        />
                    );
                })}
            </td>
            <td
                data-column="health"
                className="leaderboard-average-rating leaderboard-text"
            >
                {pokemon.baseHP}
            </td>
            <td
                data-column="attack"
                className="leaderboard-average-rating leaderboard-text"
            >
                {pokemon.baseAttack}
            </td>
            <td
                data-column="defense"
                className="leaderboard-average-rating leaderboard-text"
            >
                {pokemon.baseDefense}
            </td>

            <td
                data-column="special-attack"
                className="leaderboard-average-rating leaderboard-text"
            >
                {pokemon.specialAttack}
            </td>

            <td
                data-column="special-defense"
                className="leaderboard-average-rating leaderboard-text"
            >
                {pokemon.specialDefense}
            </td>
            <td
                data-column="speed"
                className="leaderboard-average-rating leaderboard-text"
            >
                {pokemon.speed}
            </td>
            <td
                data-column="average-rating"
                className="leaderboard-average-rating leaderboard-text"
            >
                {averageRating}
            </td>
            <td
                data-column="rating"
                className="leaderboard-rating leaderboard-text"
            >
                <Rating onClick={handleRating} ratingValue={rating} />
            </td>
        </tr>
    );
};

export default LeaderboardItem;
