import { useState } from 'react';
import { Rating } from 'react-simple-star-rating';

const PokemonTile = (props) => {
    const { topRatedPokemon } = props;

    console.log('states', {  
        topRatedPokemon,
    });

    const [rating, setRating] = useState(0);

    const handleRating = (rate) => setRating(rate);

    return (
        <>
            <h2 className="top-3-leaders">Top Rated Pokemon</h2>
            <ul className="top-3-container">
                {topRatedPokemon.map((pokemon, index) => {
                    <li className="pokemon-tile" key={pokemon.id}>
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
                                        ? '/assets/medals/gold.svg'
                                        : index === 1
                                        ? '/assets/medals/silver.svg'
                                        : '/assets/medals/bronze.svg'
                                }
                                alt=""
                            />
                            <div className="type-container">
                                {pokemon.types.map((type) => {
                                    return (
                                        <img
                                            className="tile-type"
                                            src={`/assets/pokemontypes/${type.type.name.toLowerCase()}.svg`}
                                            alt={`${type.type.name.toLowerCase()}`}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </li>;
                })}
            </ul>
            <h3>end of table</h3>
        </>
    );
};

export default PokemonTile;
