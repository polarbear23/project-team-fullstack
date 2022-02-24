import React from "react";

const LeaderboardItem = () => {
  return (
    <li className="leaderboard-list-item">
      <img
        className="leaderboard-pokemon-icon"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        alt=""
      />
      <span className="leaderboard-pokemon-name">Name</span>
      <span className="leaderboard-rating">Rating</span>
      <span className="leaderboard-average-rating">Average Rating</span>
    </li>
  );
};

export default LeaderboardItem;
