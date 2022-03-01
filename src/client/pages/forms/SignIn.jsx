

const SignIn = () => {
  return (
		<div className="signIn">
            <div className="signin-container">
                <form className='signin-form'>
                    <h1>Sign In</h1>
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
                <div className="new-register">
                    <p className='signin-text'>No account? No worries.</p>
                    <button type='submit' className='new-register-btn'>New Account</button>
                </div>
            </div>
		</div>
	);
}

export default SignIn