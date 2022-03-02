import { useEffect, useState } from "react";
import LeaderboardItem from "./components/LeaderboardItem";
import PokemonTile from "./components/PokemonTile";

const Leaderboard = () => {
  const [pokemons, setPokemons] = useState([]);
  const [updateLeaderboard, setUpdateLeaderboard] = useState([]);
  const [topThreePokemon, setTopThreePokemon] = useState([]);

  const sortPokemon = (pokemonsa) => {
    return pokemonsa.sort((firstEl, secondEl) => {
      const firstPokemonRating = findAverageRating(firstEl.ratings);
      console.log("firstPokemonRating", firstPokemonRating);
      const secondPokemonRating = findAverageRating(secondEl.ratings);
      console.log("secondPokemonRating", secondPokemonRating);

      if (firstPokemonRating < secondPokemonRating) {
        return -1;
      }
      if (firstPokemonRating > secondPokemonRating) {
        return 1;
      }
      return 0;
    });
  };

  const getPokemon = async () => {
    const res = await fetch("http://localhost:4000/pokemon/");
    const pokemon = await res.json();
    console.log("pokemon", pokemon.data);
    const sortedPokemon = sortPokemon(pokemon.data);
    console.log("sortedPokemon", sortedPokemon);
    setPokemons(sortedPokemon);
  };

  const findAverageRating = (ratings) => {
    //console.log("insideAvrgRating", ratings);

    if (ratings.length > 0) {
      let total = ratings.reduce(
        (prevVal, curVal) => prevVal + curVal.rating.rating,
        0
      );
      //console.log("total", total);
      return (total / ratings.length).toFixed(1);
    }
    return 0;
  };

  useEffect(() => {
    getPokemon();
  }, [updateLeaderboard]);

  useEffect(() => {
    setTopThreePokemon([]);
  }, [pokemons]);

  return (
    <div className="leaderboard">
      <h2 className="top-3-leaders">Best Rated Pokemon</h2>
      <div className="top-3-container">
        {topThreePokemon &&
          topThreePokemon.map((pokemon, index) => {
            <PokemonTile
              pokemon={pokemon}
              index={index}
              findAverageRating={findAverageRating}
            />;
          })}
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
          {pokemons &&
            pokemons.map((pokemon) => {
              return (
                <LeaderboardItem
                  pokemon={pokemon}
                  findAverageRating={findAverageRating}
                  setUpdateLeaderboard={setUpdateLeaderboard}
                  updateLeaderboard={updateLeaderboard}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
