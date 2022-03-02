import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FETCH_METHOD, LOCAL_STORAGE, INT_LINK, USER_URL } from '../../config';

const CreateProfile = (props) => {
    const { user, setUser } = props;

    const initialForm = { location: '', picture: '', userId: null };

    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        setError(null);
    }, [form]);

    console.log('state', {
        form,
        error,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (event) => {
        setForm({...form, userId: user.id})

        event.preventDefault();

        const fetchedProfile = await postForm();

        if (fetchedProfile.error) {
            setError(fetchedProfile.error);

            return;
        }

        setUser(fetchedProfile.data);

        navigate(INT_LINK.HOME);
    };

    const postForm = async () => {
        try {
            const response = await fetch(USER_URL.PROFILE, {
                method: FETCH_METHOD.POST,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': LOCAL_STORAGE.TOKEN,
                },
                body: JSON.stringify(form),
            });

            return data = await response.json();

        } catch (error) {
            console.log(error);
        }
    };

    const handleRedirect = () => {
        navigate(INT_LINK.HOME);
    }

    return (
        <div className="signup">
            <form className="signup-form">
                <h1>Create Profile</h1>
                <div className="input-groups">
                    <label htmlFor="username">Profile Picture:</label>
                    <input
                        type="text"
                        id="username"
                        className="input"
                        name="picture"
                        value={form.picture}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-groups">
                    <label htmlFor="email">Location:</label>
                    <input
                        type="text"
                        id="email"
                        className="input"
                        name="location"
                        value={form.location}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="register-btn"
                    onClick={handleSubmit}
                >
                    Create Profile
                </button>
                <button
                    className="register-btn"
                    onClick={handleRedirect}
                >
                    Skip
                </button>
            </form>
        </div>
    );
};

export default CreateProfile;
