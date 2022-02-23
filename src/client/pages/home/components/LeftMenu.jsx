import React from 'react'

const LeftMenu = () => {
  return (
    <aside>
        <nav>
            <ul>
                <li>Home</li>
                <li>Forum</li>
                <li>Leaderboard</li>
            </ul>
        </nav>
        <div class="dark-mode">
            <input id="checkbox" type="checkbox" class="checkbox"/>
            <label for="checkbox" class="mode-label">
                <div class="ball"></div>
                <i class="fas fa-moon"></i>
            </label>
        </div>
    </aside>
  )
}

export default LeftMenu