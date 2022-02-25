import React from "react";
import LeaderboardItem from "./components/LeaderboardItem";
const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <h1 className="leaderboard-title">Leaderboards</h1>
      <h2 className="top-5-leaders">Best Rated Pokemon</h2>

      <table className="leaderboard-list">
        <thead>
          <th></th>
          <th>Name</th>
          <th>Type</th>
          <th>Average Rating</th>
          <th>Rating</th>
        </thead>
        <tbody>
          <LeaderboardItem />
          <LeaderboardItem />
          <LeaderboardItem />
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
