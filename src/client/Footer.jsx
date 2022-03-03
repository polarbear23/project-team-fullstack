import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import './styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer">
                <Link to="/" className="footer__logo">
                    <img
                        className="logo"
                        src="/assets/pokemon/pokeball.png"
                        alt="pokeball"
                    />
                    <span>Pokimo & King</span>
                </Link>
                <ul className="footer__lists">
                    <li className="footer__lists--item">
                        <Link to="/" className="disabled-link">
                            Help
                        </Link>
                    </li>
                    <li className="footer__lists--item">
                        <Link to="/" className="disabled-link">
                            Terms and rules
                        </Link>
                    </li>
                    <li className="footer__lists--item">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>

                <div className="footer__icons">
                    <span>
                        <FaFacebook />
                    </span>
                    <span>
                        <FaInstagram />
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
