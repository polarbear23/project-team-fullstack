import { Link, useNavigate } from 'react-router-dom';

import { LOCAL_STORAGE, INT_LINK } from './config';

import { capitaliseFirstLetter } from './utils';

const Header = (props) => {
    const { isLoggedIn, setIsLoggedIn, user } = props;

    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.removeItem(LOCAL_STORAGE.TOKEN);

        setIsLoggedIn(false);

        setUser(null);

        navigate(INT_LINK.HOME);
    };

    const formatUserName = (user) => {
        let username = user.username;

        username = username.toLowerCase();

        return capitaliseFirstLetter(username);
    };

    return (
        <header>
            <nav className="navbar-container">
                <Link to={INT_LINK.HOME} className="navbar__logo">
                    <img
                        className="logo"
                        src="/assets/pokemon/pokeball.png"
                        alt="pokeball"
                    />
                    <span>Pokimo & King</span>
                </Link>

                <ul className="navbar__lists">
                    {isLoggedIn && user && (
                        <>
                            <li className="navbar__lists--item">
                                <Link to={INT_LINK.PROFILE}>
                                    Hi {formatUserName(user)}
                                </Link>
                            </li>
                            <li
                                className="navbar__lists--item"
                                onClick={handleClick}
                            >
                                <Link to={INT_LINK.HOME}>Logout</Link>
                            </li>
                        </>
                    )}
                    {(!isLoggedIn || !user) && (
                        <>
                            <li className="navbar__lists--item">
                                <Link to={INT_LINK.LOGIN}>Login</Link>
                            </li>
                            <li className="navbar__lists--item">
                                <Link to={INT_LINK.CREATE_USER}>Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
