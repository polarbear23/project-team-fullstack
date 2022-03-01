import React from 'react'

const Signup = () => {
  return (
		<div className='signup'>
			<form className='signup-form'>
                <h1>Register</h1>
				<div className="input-groups">
					<label htmlFor="username">Username:</label>
					<input type="text" id='username' className='input'/>
				</div>
				<div className="input-groups">
					<label htmlFor="email">Email:</label>
					<input type="text" id='email' className='input'/>
				</div>
				<div className="input-groups">
					<label htmlFor="password">Password:</label>
					<input type="text" id='password' className='input'/>
				</div>
				<div className="input-groups">
					<label htmlFor="dob_month" className='dob_month'>Date of birth:</label>
					<select name="dob_month" className="dob" aria-label="Month">
						<option value="0" selected="selected">
							&nbsp;
						</option>
						<option value="1">January</option>
						<option value="2">February</option>
						<option value="3">March</option>
						<option value="4">April</option>
						<option value="5">May</option>
						<option value="6">June</option>
						<option value="7">July</option>
						<option value="8">August</option>
						<option value="9">September</option>
						<option value="10">October</option>
						<option value="11">November</option>
						<option value="12">December</option>
					</select>
                    <input type="text" className="dob" name="dob_day" pattern="\d*" size="4" maxlength="2" placeholder="Day"></input>
                    <input type="text" className="dob" name="dob_year" pattern="\d*" size="6" maxlength="4" placeholder="Year"></input>
				</div>
				<input type="checkbox" />
				<span className='terms'>I agree to the terms and privacy policy.</span>
                <button type='submit' className='register-btn'>Register</button>
			</form>
		</div>
	);
}

export default Signup