import React from 'react'
import { Link } from "react-router-dom"

const LeftMenu = () => {
  return (
    <aside>
        <nav className='aside-nav'>
            <ul>
                <li>
                    <Link to="/" className="aside-nav-item">Home</Link>
                </li>
                <li>
                    <Link to="/" className="aside-nav-item">Forum</Link>
                </li>
                <li>
                    <Link to="/" className="aside-nav-item">Leaderboard</Link>
                </li>
            </ul>
        </nav>
        <div className="dark-mode">
            <input 
                id="" 
                type="checkbox" 
                className="checkbox"
            />
            <label htmlFor="checkbox" className="mode-label">
                <div className="ball"></div>
                <i className="fas fa-moon"></i>
            </label>
        </div>
    </aside>
  )
}

export default LeftMenu