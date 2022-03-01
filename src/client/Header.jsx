import { Link } from 'react-router-dom';

const Header = (props) => {
    const { isLoggedIn, setIsLoggedIn, user } = props;

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
                    <li>
                        <Link to="/profile">Hi, {user.username}!</Link>
                    </li>
                    <li onclick={handleClick}>
                        <Link to="/">Logout</Link>
                    </li>
                    <li className="navbar__lists--item">
                        <Link to="/login">Login</Link>
                    </li>
                    <li className="navbar__lists--item">
                        <Link to="/register/user">Register</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
