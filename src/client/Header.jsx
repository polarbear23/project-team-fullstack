import { Link, useNavigate } from 'react-router-dom';

import { LOCAL_STORAGE, PAGE_LINK } from './config';

import { capitaliseFirstLetter } from './utils/format';

const Header = (props) => {
    const { isLoggedIn, setIsLoggedIn, user, setUser } = props;

    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.removeItem(LOCAL_STORAGE.TOKEN);

        localStorage.removeItem(LOCAL_STORAGE.USER_ID);

        setIsLoggedIn(false);

        setUser(null);

        navigate(PAGE_LINK.HOME);
    };

    const formatUserName = (user) => {
        let username = user.username;

        username = username.toLowerCase();

        return capitaliseFirstLetter(username);
    };

    return (
        <header>
            <nav className="navbar-container">
                <Link to={PAGE_LINK.HOME} className="navbar__logo">
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
                                <Link to={PAGE_LINK.PROFILE}>
                                    Hi {formatUserName(user)}
                                </Link>
                            </li>
                            <li
                                className="navbar__lists--item"
                                onClick={handleClick}
                            >
                                <Link to={PAGE_LINK.HOME}>Logout</Link>
                            </li>
                        </>
                    )}
                    {!isLoggedIn && (
                        <>
                            <li className="navbar__lists--item">
                                <Link to={PAGE_LINK.LOGIN}>Login</Link>
                            </li>
                            <li className="navbar__lists--item">
                                <Link to={PAGE_LINK.CREATE_USER}>Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
