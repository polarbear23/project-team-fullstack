import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const PokemonTile = (props) => {
    const { topRatedPokemon, calcAverageRating } = props;

    const [rating, setRating] = useState(0);

    const handleRating = (rate) => setRating(rate);

    const assignMedals = (index) => {
        switch (index) {
            case 0:
                return '/assets/medals/gold.svg';
            case 1:
                return '/assets/medals/silver.svg';
            case 2:
                return '/assets/medals/bronze.svg';
        }
    };

    return (
        <div className="pokemon-tile" key={pokemon.id}>
            <img
                className="top-3-pokemon-image"
                src={pokemon.largeImageUrl}
                alt={pokemon.name}
            />
            <div className="pokemon-text-container">
                <h3 className="pokemon-text-container-header">
                    {pokemon.name}
                </h3>
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
                        <span>{calcAverageRating(pokemon.ratings)}</span>
                    </div>

                    <Rating onClick={handleRating} ratingValue={rating} />
                </div>
            </div>
            <div className="medal-type-container">
                <img className="medal" src={assignMedals(index)} alt="" />
                <div className="type-container">
                    {pokemon.types.map((type, index) => {
                        return (
                            <img
                                className="tile-type"
                                src={`/assets/pokemontypes/${type.type.name.toLowerCase()}.svg`}
                                alt={`${type.type.name.toLowerCase()}`}
                                key={index}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default PokemonTile;
