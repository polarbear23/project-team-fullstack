import { useState, useEffect } from 'react';
import { Rating } from 'react-simple-star-rating';

const LeaderboardItem = (props) => {
    const { calcAverageRating, pokemonListItem, postRating, profileId } = props;

    const [rating, setRating] = useState(0);
    const [averageRating, setAverageRating] = useState(0);

    useEffect(() => {
        if (!rating) {
            return;
        }

        const ratingToPost = rating / 20;

        const newRating = {
            profileId: profileId,
            rating: ratingToPost,
            pokemonId: pokemonListItem.id,
        };

        postRating(newRating);
    }, [rating]);

    useEffect(() => {
        setAverageRating(calcAverageRating(pokemonListItem.ratings));
    }, [pokemonListItem]);

    const handleRating = (rate) => setRating(rate);

    return (
        <tr className="leaderboard-list-item" key={pokemonListItem.id}>
            <td
                data-column="pokemon-image"
                className="pokemon-leaderboard-icon-image"
            >
                <img
                    className="leaderboard-pokemon-icon"
                    src={pokemonListItem.largeImageUrl}
                    alt={`${pokemonListItem.name}`}
                />
            </td>
            <td
                data-column="pokemon-name"
                className="leaderboard-pokemon-name leaderboard-text"
            >
                {pokemonListItem.name}
            </td>
            <td data-column="pokemon-type" className="leaderboard-pokemon-type">
                {pokemonListItem.types.map((typeObj, index) => {
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
                {pokemonListItem.baseHP}
            </td>
            <td
                data-column="attack"
                className="leaderboard-average-rating leaderboard-text"
            >
                {pokemonListItem.baseAttack}
            </td>
            <td
                data-column="defense"
                className="leaderboard-average-rating leaderboard-text"
            >
                {pokemonListItem.baseDefense}
            </td>

            <td
                data-column="special-attack"
                className="leaderboard-average-rating leaderboard-text"
            >
                {pokemonListItem.specialAttack}
            </td>

            <td
                data-column="special-defense"
                className="leaderboard-average-rating leaderboard-text"
            >
                {pokemonListItem.specialDefense}
            </td>
            <td
                data-column="speed"
                className="leaderboard-average-rating leaderboard-text"
            >
                {pokemonListItem.speed}
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
