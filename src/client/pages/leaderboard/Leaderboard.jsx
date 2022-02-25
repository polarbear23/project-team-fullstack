import React from "react";
import LeaderboardItem from "./components/LeaderboardItem";
const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <h1 className="leaderboard-title">Leaderboards</h1>
      <h2 className="top-3-leaders">Best Rated Pokemon</h2>
      <div className="top-3-container">
        <div className="pokemon-container">
          <div className="pokemon-tile">
            <img
              className="top-3-pokemon-image"
              src="/assets/pokemon/025.png"
              alt=""
            />
            <div className="pokemon-text-container">
              <h3>Squirtle</h3>
            </div>
          </div>
        </div>
        <div className="pokemon-container">
          <div className="pokemon-tile">
            <img
              className="top-3-pokemon-image"
              src="/assets/pokemon/007.png"
              alt=""
            />
            <div className="pokemon-text-container">
              <h3>Squirtle</h3>
            </div>
          </div>
        </div>
        <div className="pokemon-container">
          <div className="pokemon-tile">
            <img
              className="top-3-pokemon-image"
              src="/assets/pokemon/004.png"
              alt=""
            />
            <div className="pokemon-text-container">
              <h3>Squirtle</h3>
            </div>
          </div>
        </div>
      </div>
      <table className="leaderboard-list">
        <thead>
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
        </thead>
        <tbody>
          <LeaderboardItem />
          <LeaderboardItem />
          <LeaderboardItem />
          <LeaderboardItem />
          <LeaderboardItem />
          <LeaderboardItem />
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
