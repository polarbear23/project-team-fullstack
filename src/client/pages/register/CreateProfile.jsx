import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { FETCH_METHOD, LOCAL_STORAGE, INT_LINK, USER_URL } from '../../config';

const CreateProfile = (props) => {
    const { user, setUser } = props;

    const initialForm = { location: null, profilePicture: null, userId: null };

    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const token = localStorage.getItem(LOCAL_STORAGE.TOKEN)

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
        setForm({ ...form, userId: user.id });

        event.preventDefault();

        await SubmitForm();
    };

    const postForm = async () => {
        try {
            const response = await fetch(USER_URL.PROFILE, {
                method: FETCH_METHOD.POST,
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token,
                },
                body: JSON.stringify(form),
            });

            return (data = await response.json());
        } catch (error) {
            console.log(error);
        }
    };

    const handleCancel = async () => {
        setForm(initialForm);

        setForm({ ...form, userId: user.id });

        

        await SubmitForm();
    };

    const SubmitForm = async () => {
        const fetchedProfile = await postForm();

        if (fetchedProfile.error) {
            //setError(fetchedProfile.error);
            // console.log('error', error)

            return;
        }

        setUser(fetchedProfile.data);

        navigate(INT_LINK.HOME, { replace: true });
    };

    return (
        <div className="signup">
            <form className="signup-form">
                <h1>Create Profile</h1>
                <div className="input-groups">
                    <label htmlFor="profilePicture">Profile Picture:</label>
                    <input
                        type="text"
                        id="profilePicture"
                        className="input"
                        name="profilePicture"
                        value={form.profilePicture}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-groups">
                    <label htmlFor="location">Location:</label>
                    <input
                        type="text"
                        id="location"
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
                <button onClick={handleCancel}>
                    Skip
                </button>
            </form>
        </div>
    );
};

export default CreateProfile;