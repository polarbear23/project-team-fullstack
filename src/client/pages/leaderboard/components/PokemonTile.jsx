import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
const PokemonTile = (props) => {
  const { position } = props;
  const [rating, setRating] = useState(0); // initial rating value

  // Catch Rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  return (
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
            <p>Avg Rating:</p>
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
              position === 1
                ? "/assets/medals/gold.svg"
                : position === 2
                ? "/assets/medals/silver.svg"
                : "/assets/medals/bronze.svg"
            }
            alt=""
          />
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
  );
};

export default PokemonTile;
