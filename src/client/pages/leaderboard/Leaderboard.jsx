import React from "react";
import LeaderboardItem from "./components/LeaderboardItem";
const Leaderboard = () => {
  return (
    <div>
      <h1 className="leaderboard-title">Leaderboards</h1>
      <ul className="leaderboard-list">
        <LeaderboardItem />
      </ul>
    </div>
  );
};

export default Leaderboard;
