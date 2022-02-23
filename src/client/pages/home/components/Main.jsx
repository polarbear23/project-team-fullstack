import React from 'react'
import "../../../styles/app.css"

const Main = () => {
    
  return (
    <main className='homepage-main'>
        <section className='top-5-pokemon-section'>
            <h1>Top 5 Pokemon</h1>
            <ul className='top-pokemon-list'>
                <li>1<img src="" alt="" /></li>
                <li>2<img src="" alt="" /></li>
                <li>3<img src="" alt="" /></li>
                <li>4<img src="" alt="" /></li>
                <li>5<img src="" alt="" /></li>
            </ul>
        </section>
        <section className='rate-pokemon-section'>
            <h2>Rate your Own Pokemon</h2>
            <img src="" alt="" />
        </section>
        <section className='start-your-own-topic-section'>
            <h3>Start your own topic</h3>
            <img src="" alt="" />
        </section>
        <section className='categories-section'>
            <h3>Categories</h3>
            <ul className='categories-list'>
                <li className='categories-list-item'>
                    <img src="games.png" alt="" className='game-img'/>
                    <p>Gaming</p>
                </li>
                <li className='categories-list-item'>
                    Fan-Fiction</li>
                <li className='categories-list-item'>
                    <img src="cat.png" alt="" className='cat-img'/>
                    <p>Cosplay</p>
                </li>
                <li className='categories-list-item'>
                    <img src="manga.png" alt="" className='manga-img'/>
                    <p>Manga</p>
                </li>
                <li className='categories-list-item'>
                    <img src="tv.png" alt="" className='manga-img'/>
                    <p>TV/Film</p>
                </li>
            </ul>
        </section>
    </main>
  )
}

export default Main