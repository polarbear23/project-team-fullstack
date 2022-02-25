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
      </td>
      <td
        data-column="average-rating"
        className="leaderboard-average-rating leaderboard-text"
      >
        Hp
      </td>
      <td
        data-column="average-rating"
        className="leaderboard-average-rating leaderboard-text"
      >
        Attack
      </td>
      <td
        data-column="average-rating"
        className="leaderboard-average-rating leaderboard-text"
      >
        Defense
      </td>

      <td
        data-column="average-rating"
        className="leaderboard-average-rating leaderboard-text"
      >
        Spec attk
      </td>

      <td
        data-column="average-rating"
        className="leaderboard-average-rating leaderboard-text"
      >
        specdef
      </td>
      <td
        data-column="average-rating"
        className="leaderboard-average-rating leaderboard-text"
      >
        spd
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
