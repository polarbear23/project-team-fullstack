import React, { useEffect, useState } from 'react'

const signUpInitialData = {
	username: "",
	email: "",
	password: "",
}

const Signup = () => {
	const [signUpData, setSignUpData] = useState(signUpInitialData);



	const handleChange = event => {
		const { name, value } = event.target;

		setSignUpData({...signUpData, [name]: value});
	}

	const handleSubmit = async (event) => {
		event.preventDefault();

		setSignUpData(signUpData);
	}

  	return (
		<div className="signup">
			<form className="signup-form">
                <h1>Register</h1>
				<div className="input-groups">
					<label htmlFor="username">Username:</label>
					<input 
						type="text" 
						id="username" 
						className="input"
						name="username"
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
						onChange={handleChange}
						required
					/>
				</div>
				<input type="checkbox" />
				<span className='terms'>I agree to the terms and privacy policy.</span>
                <button type='submit' className='register-btn'>Register</button>
			</form>
		</div>
	);
}

export default Signup