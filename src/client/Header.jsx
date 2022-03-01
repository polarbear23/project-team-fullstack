import { Link, useNavigate } from 'react-router-dom';

const Header = (props) => {
    const { isLoggedIn, setIsLoggedIn, user } = props;

    const navigate = useNavigate();

    const handleClick = () => {
        localStorage.removeItem('token');

        setIsLoggedIn(false);

        setUser(null);

        navigate(URL.HOME);
    };

    return (
        <header>
            <nav className="navbar-container">
                <Link to="/" className="navbar__logo">
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
                                <Link to="/profile">Hi, {user.username}!</Link>
                            </li>
                            <li
                                className="navbar__lists--item"
                                onClick={handleClick}
                            >
                                <Link to="/">Logout</Link>
                            </li>
                        </>
                    )}
                    {!isLoggedIn && (
                        <>
                            <li className="navbar__lists--item">
                                <Link to="/login">Login</Link>
                            </li>
                            <li className="navbar__lists--item">
                                <Link to="/register/user">Register</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
