import { useState, useEffect } from 'react';

const CreateProfile = (props) => {
    const { token } = props;

    const initialForm = { location: '', picture: '' };

    const [form, setForm] = useState(initialForm);
    const [message, setMessage] = useState('');

    console.log('state', {
        form,
        message,
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        await postForm();

        setForm(initialForm);
    };

    const postForm = async () => {
        try {
            const response = await fetch('http://localhost:4000/user/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: token,
                },
                body: JSON.stringify(form),
            });
            const data = await response.json();
            setMessage('Profile Updated');
        } catch (error) {
            console.log(error);
        }
    };

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
                {}
            </form>
        </div>
    );
};

export default CreateProfile;
