import React from "react";
import LeaderboardItem from "./components/LeaderboardItem";
const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <h2 className="top-3-leaders">Best Rated Pokemon</h2>
      <div className="top-3-container">
        <div className="pokemon-container">
          <div className="pokemon-tile">
            <img
              className="top-3-pokemon-image"
              src="/assets/pokemon/025.png"
              alt="pikachu"
            />
            <div className="pokemon-text-container">
              <h3 className="pokemon-text-container-header">Pikachu</h3>
              <div className="stats">
                <p>Hp:</p>
                <p>Atk:</p>
                <p>Def:</p>
                <p>Spd:</p>
                <p>Rating:</p>
              </div>
            </div>
            <div className="medal-type-container">
              <img className="medal" src="/assets/medals/gold.svg" alt="" />
              <div className="type-container">
                <img
                  className="tile-type"
                  src="/assets/pokemontypes/electric.svg"
                  alt=""
                />
              </div>
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
              <h3 className="pokemon-text-container-header">Squirtle</h3>
              <div className="stats">
                <p>Hp:</p>
                <p>Atk:</p>
                <p>Def:</p>
                <p>Spd:</p>
                <p>Rating:</p>
              </div>
            </div>
            <div className="medal-type-container">
              <img className="medal" src="/assets/medals/silver.svg" alt="" />
              <div className="type-container">
                <img
                  className="tile-type"
                  src="/assets/pokemontypes/water.svg"
                  alt=""
                />
              </div>
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
              <h3 className="pokemon-text-container-header">Charmander</h3>
              <div className="stats">
                <p>Hp:</p>
                <p>Atk:</p>
                <p>Def:</p>
                <p>Spd:</p>
                <p>Rating:</p>
              </div>
            </div>
            <div className="medal-type-container">
              <img
                className="medal"
                src="/assets/medals/bronze.svg"
                alt="bronze medal"
              />
              <div className="type-container">
                <img
                  className="tile-type"
                  src="/assets/pokemontypes/fire.svg"
                  alt=""
                />
                <img
                  className="tile-type"
                  src="/assets/pokemontypes/water.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="leaderboard-title">Leaderboard</h1>

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
