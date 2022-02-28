import React, { useEffect, useState } from "react";
import LeaderboardItem from "./components/LeaderboardItem";
import PokemonTile from "./components/PokemonTile";

const Leaderboard = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/pokemon/")
      .then((res) => res.json())
      .then((res) => {
        setPokemons(res.data);
      });
  }, []);

  return (
    <div className="leaderboard">
      <h2 className="top-3-leaders">Best Rated Pokemon</h2>
      <div className="top-3-container">
        <PokemonTile position={1} />
        <PokemonTile position={2} />
        <PokemonTile position={3} />
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
          {pokemons.map((pokemon) => {
            return <LeaderboardItem pokemon={pokemon} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
