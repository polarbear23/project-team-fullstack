import { useState, useEffect } from "react";
import { Rating } from "react-simple-star-rating";
const LeaderboardItem = (props) => {
  const [rating, setRating] = useState(); // initial rating value
  const [averageRating, setAverageRating] = useState(0);
  const [savedPokemon, setSavedPokemon] = useState({});
  const { pokemon } = props;

  // Catch Rating value

  useEffect(() => {
    if (rating) {
      postRating(rating);
    }
  }, [rating]);

  useEffect(() => {
    console.log("inside useEffect for averagepokemons");
    if (!savedPokemon.ratings) {
      setSavedPokemon(pokemon);
      setAverageRating(findAverageRating(pokemon.ratings));
    }
    if (savedPokemon.ratings) {
      console.log("saved pokemons ratings", savedPokemon.ratings);
      setAverageRating(findAverageRating(savedPokemon.ratings));
    }
  }, [savedPokemon]);

  const postRating = async (rating) => {
    const ratingToAdd = rating / 20;
    const res = await fetch("http://localhost:4000/pokemon/rating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkFETUlOIiwiaWF0IjoxNjQ2MjIyNTAxfQ.TQk7tYn4zjQVCFGRIe_LEYJA9L4KaHP6_yxLhLQaeUg", //localStorage.getItem("token"), //need a jwt token to verify if user is logged in to make the post request
      },
      body: JSON.stringify({
        profileId: 1, //need to get profile id from state
        rating: ratingToAdd,
        pokemonId: savedPokemon.id,
      }),
    });

    const data = await res.json();

    console.log("response back after rating", data);

    setSavedPokemon(data.data.pokemons[0].pokemon);
  };

  const findAverageRating = (ratings) => {
    console.log("insideAvrgRating", ratings);

    if (ratings.length > 0) {
      let total = ratings.reduce(
        (prevVal, curVal) => prevVal + curVal.rating.rating,
        0
      );
      console.log("total", total);
      return (total / ratings.length).toFixed(1);
    }
    return 0;
  };

  const handleRating = (rate) => {
    console.log("rate in handleRating", rate);
    setRating(rate);
  };

  return (
    <tr className="leaderboard-list-item">
      <td
        data-column="pokemon-image"
        className="pokemon-leaderboard-icon-image"
      >
        <img
          className="leaderboard-pokemon-icon"
          src={pokemon.largeImageUrl}
          alt=""
        />
      </td>
      <td
        data-column="pokemon-name"
        className="leaderboard-pokemon-name leaderboard-text"
      >
        {pokemon.name}
      </td>
      <td data-column="pokemon-type" className="leaderboard-pokemon-type">
        {pokemon.types.map((typeObj) => {
          return (
            <img
              className="type-icon"
              src={`/assets/pokemontypes/${typeObj.type.name.toLowerCase()}.svg`}
              alt=""
            />
          );
        })}
      </td>
      <td
        data-column="health"
        className="leaderboard-average-rating leaderboard-text"
      >
        {pokemon.baseHP}
      </td>
      <td
        data-column="attack"
        className="leaderboard-average-rating leaderboard-text"
      >
        {pokemon.baseAttack}
      </td>
      <td
        data-column="defense"
        className="leaderboard-average-rating leaderboard-text"
      >
        {pokemon.baseDefense}
      </td>

      <td
        data-column="special-attack"
        className="leaderboard-average-rating leaderboard-text"
      >
        {pokemon.specialAttack}
      </td>

      <td
        data-column="special-defense"
        className="leaderboard-average-rating leaderboard-text"
      >
        {pokemon.specialDefense}
      </td>
      <td
        data-column="speed"
        className="leaderboard-average-rating leaderboard-text"
      >
        {pokemon.speed}
      </td>
      <td
        data-column="average-rating"
        className="leaderboard-average-rating leaderboard-text"
      >
        {averageRating}
      </td>
      <td data-column="rating" className="leaderboard-rating leaderboard-text">
        <Rating
          onClick={handleRating}
          ratingValue={rating} /* Available Props */
        />
      </td>
    </tr>
  );
};

export default LeaderboardItem;
