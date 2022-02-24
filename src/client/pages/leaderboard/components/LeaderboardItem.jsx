import React from "react";

const LeaderboardItem = () => {
  return (
    <tr className="leaderboard-list-item">
      <td
        data-column="pokemon-image"
        className="pokemon-leaderboard-icon-image"
      >
        <img
          className="leaderboard-pokemon-icon"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt=""
        />
      </td>
      <td
        data-column="pokemon-name"
        className="leaderboard-pokemon-name leaderboard-text"
      >
        Bulbasaur
      </td>
      <td
        data-column="pokemon-type"
        className="leaderboard-pokemon-name leaderboard-text"
      >
        Type
      </td>

      <td
        data-column="average-rating"
        className="leaderboard-average-rating leaderboard-text"
      >
        Average Rating
      </td>
      <td data-column="rating" className="leaderboard-rating leaderboard-text">
        Rating
      </td>
    </tr>
  );
};

export default LeaderboardItem;
