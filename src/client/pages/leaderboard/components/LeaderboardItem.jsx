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
          src="assets/pokemon/001.png"
          alt=""
        />
      </td>
      <td
        data-column="pokemon-name"
        className="leaderboard-pokemon-name leaderboard-text"
      >
        Bulbasaur
      </td>
      <td data-column="pokemon-type" className="leaderboard-pokemon-type">
        <img
          className="type-icon"
          src="/assets/pokemontypes/grass.svg"
          alt=""
        />
        <img
          className="type-icon"
          src="/assets/pokemontypes/poison.svg"
          alt=""
        />
      </td>
      <td
        data-column="health"
        className="leaderboard-average-rating leaderboard-text"
      >
        45
      </td>
      <td
        data-column="attack"
        className="leaderboard-average-rating leaderboard-text"
      >
        49
      </td>
      <td
        data-column="defense"
        className="leaderboard-average-rating leaderboard-text"
      >
        49
      </td>

      <td
        data-column="special-attack"
        className="leaderboard-average-rating leaderboard-text"
      >
        65
      </td>

      <td
        data-column="special-defense"
        className="leaderboard-average-rating leaderboard-text"
      >
        65
      </td>
      <td
        data-column="speed"
        className="leaderboard-average-rating leaderboard-text"
      >
        45
      </td>
      <td
        data-column="average-rating"
        className="leaderboard-average-rating leaderboard-text"
      >
        4.5
      </td>
      <td data-column="rating" className="leaderboard-rating leaderboard-text">
        Rating
      </td>
    </tr>
  );
};

export default LeaderboardItem;
