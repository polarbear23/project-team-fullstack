import React from 'react'
import "../../../../styles/app.css"

const Main = () => {
  return (
    <main className='homepage-main'>
        <section className='top-5-pokemon-section'>
            <h1>Top 5 Pokemon</h1>
            <ul className='top-pokemon-list'>
                <li>
                    <img className='pokemon-rating-img' src="/assets/pokemon/001.png" alt="number 1 top rated" />
                </li>
                <li>
                    <img className='pokemon-rating-img' src="/assets/pokemon/004.png" alt="number 2 top rated" />
                </li>
                <li>
                    <img className='pokemon-rating-img' src="/assets/pokemon/007.png" alt="number 3 top rated" />
                </li>
                <li>
                    <img className='pokemon-rating-img' src="/assets/pokemon/025.png" alt="number 4 top rated" />
                </li>
                <li>
                    <img className='pokemon-rating-img' src="/assets/pokemon/129.png" alt="number 5 top rated" />
                </li>
            </ul>
        </section>
        <section className='rate-pokemon-section'>
            <div className='rate-your-pokemon-container'>
                <h2 className='rate-your-pokemon-title'>
                    Rate your Own Pokemon
                </h2>
                
            </div>
        </section>
        <section className='start-your-own-topic-section'>
            <div className="start-your-own-post">
                <h3 className='start-your-own-post-title'>
                    Start your own topic
                </h3>
                
            </div>
        </section>
        <section className='categories-section'>
            <h3>Categories</h3>
            <ul className='categories-list'>
                <li className='categories-list-item'>
                    <img src="/assets/games.png" alt="game icon" className='game-img'/>
                    <p>Gaming</p>
                </li>
                <li className='categories-list-item'>
                    Fan-Fiction</li>
                <li className='categories-list-item'>
                    <img src="/assets/cat.png" alt="cat icon" className='cat-img'/>
                    <p>Cosplay</p>
                </li>
                <li className='categories-list-item'>
                    <img src="/assets/manga.png" alt="manga icon" className='manga-img'/>
                    <p>Manga</p>
                </li>
                <li className='categories-list-item'>
                    <img src="/assets/tv.png" alt="tv icon" className='manga-img'/>
                    <p>TV/Film</p>
                </li>
            </ul>
        </section>
    </main>
  )
}

export default Main