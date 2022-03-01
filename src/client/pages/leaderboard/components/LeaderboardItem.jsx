import React from "react";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";
const LeaderboardItem = (props) => {
  const [rating, setRating] = useState(0); // initial rating value
  const { pokemon } = props;

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };

  return (
    <tr className="leaderboard-list-item">
      <td
        data-column="pokemon-image"
        className="pokemon-leaderboard-icon-image"
      >
        <img
          className="leaderboard-pokemon-icon"
          src={pokemon.largeImageUrl}
          alt=""
        />
      </td>
      <td
        data-column="pokemon-name"
        className="leaderboard-pokemon-name leaderboard-text"
      >
        {pokemon.name}
      </td>
      <td data-column="pokemon-type" className="leaderboard-pokemon-type">
        {pokemon.types.map((typeObj) => {
          return (
            <img
              className="type-icon"
              src={`/assets/pokemontypes/${typeObj.type.name.toLowerCase()}.svg`}
              alt=""
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
        4.5
      </td>
      <td data-column="rating" className="leaderboard-rating leaderboard-text">
        <Rating
          onClick={handleRating}
          ratingValue={rating} /* Available Props */
        />
      </td>
    </tr>
  );
};

export default LeaderboardItem;
