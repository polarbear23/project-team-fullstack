import { useEffect, useState } from 'react';

import { USER_URL } from '../../config';

import { doFetch } from '../../utils';

const CreateUser = () => {
    const signUpInitialData = {
        username: '',
        email: '',
        password: '',
        termsAndConditions: false,
    };

    const [signUpData, setSignUpData] = useState(signUpInitialData);

    const registerUser = async () => {
        const registeredUser = await doFetch(
            USER_URL.REGISTER,
            signUpData,
            'POST'
        );

        return registeredUser;
    };

    const handleChange = (event) => {
        let { name, value, type, checked } = event.target;
        console.log(event.target);

        type === 'checkbox' && value === checked;

        setSignUpData({ ...signUpData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        setSignUpData(signUpData);

        if (signUpData.termsAndConditions) {
            const registeredUser = await registerUser();

            if (registeredUser) {
				const registeredUserId = registeredUser.data.id;
				const userGeneratedToken = registeredUser.token; 
	
				localStorage.setItem("userToken", userGeneratedToken);
				localStorage.setItem("userId", registeredUserId);

                //redirect to profile!!
            }
        }
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