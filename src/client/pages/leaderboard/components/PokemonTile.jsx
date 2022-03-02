import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
const PokemonTile = (props) => {
  const { pokemon, index } = props;
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  return (
    <div className="pokemon-tile">
      <img
        className="top-3-pokemon-image"
        src={pokemon.largeImageUrl}
        alt={pokemon.name}
      />
      <div className="pokemon-text-container">
        <h3 className="pokemon-text-container-header">{pokemon.name}</h3>
        <div className="stats">
          <div className="stats-head">
            <span>Hp:</span>
            <span>Atk:</span>
            <span>Def:</span>
            <span>Spd:</span>
            <span>Avg Rating: </span>
          </div>
          <div className="stats-values">
            <span>{pokemon.baseHP}</span>
            <span>{pokemon.baseAttack}</span>
            <span> {pokemon.baseDefense}</span>
            <span>{pokemon.speed}</span>
            <span>4</span>
          </div>

          <Rating
            onClick={handleRating}
            ratingValue={rating} /* Available Props */
          />
        </div>
      </div>
      <div className="medal-type-container">
        <img
          className="medal"
          src={
            index === 0
              ? "/assets/medals/gold.svg"
              : index === 1
              ? "/assets/medals/silver.svg"
              : "/assets/medals/bronze.svg"
          }
          alt=""
        />
        <div className="type-container">
          {pokemon.types.map((type) => {
            return (
              <img
                className="tile-type"
                src={`/assets/pokemontypes/${type.type.name.toLowerCase()}.svg`}
                alt=""
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PokemonTile;
