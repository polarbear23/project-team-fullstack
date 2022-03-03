import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FETCH_METHOD, LOCAL_STORAGE, INT_LINK, USER_URL } from '../../config';

import '../../styles/header.css';

import { fetchFromServer } from '../../utils/fetch';

const Login = (props) => {
    const { setUser, setIsLoggedIn } = props;

    const intialForm = {
        username: '',
        password: '',
    };

    const [form, setForm] = useState(intialForm);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        setError(null);
    }, [form]);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const fetchedUser = await fetchFromServer(USER_URL.LOGIN, form, FETCH_METHOD.POST);

        if (fetchedUser.error) {
            setError(fetchedUser.error);

            return;
        }

        localStorage.setItem(LOCAL_STORAGE.TOKEN, fetchedUser.token);

        localStorage.setItem(LOCAL_STORAGE.USER_ID, fetchedUser.data.id);

        setIsLoggedIn(true);

        navigate(INT_LINK.HOME, { replace: true });
    };

    const handleRedirectToRegister = () => {
        navigate(INT_LINK.CREATE_USER);
    };

    return (
        <div className="signIn">
            <div className="signin-container">
                <form className="signin-form">
                    <h1>Login</h1>
                    <div className="input-groups">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            className="input"
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="input-groups">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="text"
                            id="password"
                            className="input"
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="signin-btn"
                        onClick={handleSubmit}
                    >
                        Sign In
                    </button>
                </form>
                {error && <p className="error">{error}</p>}
                <div className="new-register">
                    <p className="signin-text">No account? Create one Here!</p>
                    <button
                        type="submit"
                        className="new-register-btn"
                        onClick={handleRedirectToRegister}
                    >
                        New Account
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;
