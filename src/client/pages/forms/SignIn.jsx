import React from 'react'

const SignIn = () => {
  return (
		<div className="signIn">
			<form className='signin-form'>
				<h1>SignIn</h1>
				<div className="input-groups">
					<label htmlFor="username">Username:</label>
					<input type="text" id="username" className="input" />
				</div>
				<div className="input-groups">
					<label htmlFor="password">Password:</label>
					<input type="text" id="password" className="input" />
				</div>
                <button type='submit' className='signin-btn'>Sign In</button>
			</form>
            <p>No account? No worries.</p>
            <button type='submit' className='register-btn'>New Account</button>
		</div>
	);
}

export default SignIn