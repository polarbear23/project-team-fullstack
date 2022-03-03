import { Link } from 'react-router-dom';
import { FaMoon, FaComments, FaHome } from 'react-icons/fa';
import { MdLeaderboard } from 'react-icons/md';

import './styles/leftMenu.css';

const LeftMenu = (props) => {
    // const {darkMode, setDarkMode} = props;

    const changeToDark = () => {
        setDarkMode(true);
    };
    const changeToLight = () => {
        setDarkMode(false);
    };

    return (
        <aside>
            <nav className="aside-nav">
                <ul>
                    <li>
                        <FaHome />
                        <Link to="/" className="aside-nav-item">
                            Home
                        </Link>
                    </li>
                    <li>
                        <FaComments />
                        <Link to="/forum" className="aside-nav-item">
                            Forum
                        </Link>
                    </li>
                    <li>
                        <MdLeaderboard />
                        <Link to="/leaderboard" className="aside-nav-item">
                            Leaderboard
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="dark-mode">
                <input
                    id="checkbox"
                    type="checkbox"
                    className="dark-mode-input"
                />
                <label htmlFor="checkbox" className="mode-label">
                    <div className="ball" onClick={changeToDark}></div>
                    <FaMoon onClick={changeToLight} />
                </label>
            </div>
        </aside>
    );
};

export default LeftMenu;
