import { useEffect, useState } from 'react';

import { INT_LINK, USER_URL } from '../../config';

import { doFetch } from '../../utils';

const CreateUser = props => {
    const { setUser, setIsLoggedIn } = props;

    const formInitialData = {
        username: '',
        email: '',
        password: '',
        termsAndConditions: false,
    };

    const [form, setFormData] = useState(formInitialData);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        setError(null);
    }, [form]);

    console.log('state', {
        form,
        error,
    });

    const registerUser = async () => {
        const registeredUser = await doFetch(
            USER_URL.REGISTER,
            form,
            'POST'
        );

        return registeredUser;
    };

    const handleChange = (event) => {
        let { name, value, type, checked } = event.target;
        console.log(event.target);

        type === 'checkbox' && value === checked;

        setFormData({ ...form, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const registeredUser = await registerUser();

        if (registeredUser.error) {
            setError(data.error);

            return;
        }

        setUser(registeredUser);
        setIsLoggedIn(true);

        navigate(INT_LINK.CREATE_PROFILE);
    };

    return (
        <div className="signup">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Register</h1>
                <div className="input-groups">
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        className="input"
                        name="username"
                        value={signUpData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="input-groups">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        className="input"
                        name="email"
                        value={signUpData.email}
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
                        value={signUpData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <input
                    type="checkbox"
                    name="termsAndConditions"
                    value={signUpData.termsAndConditions}
                    onChange={handleChange}
                    required
                />
                <span className="terms">
                    I agree to the terms and privacy policy.
                </span>
                <button type="submit" className="register-btn">
                    Register
                </button>
            </form>
        </div>
    );
};

export default CreateUser;