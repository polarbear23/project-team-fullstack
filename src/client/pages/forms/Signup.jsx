import React from 'react'

const Signup = () => {
  return (
		<div>
			<h1>Register</h1>
			<form action="">
				<div className="input-groups">
					<label htmlFor="">Username:</label>
					<input type="text" />
				</div>
				<div className="input-groups">
					<label htmlFor="">Email:</label>
					<input type="text" />
				</div>
				<div className="input-groups">
					<label htmlFor="">Password:</label>
					<input type="text" />
				</div>
				<div className="input-groups">
					<label htmlFor="">Username:</label>
					<input type="text" />
				</div>
				<div className="input-groups">
					<label htmlFor="">Date of birth:</label>
					<select name="dob_month" class="input" aria-label="Month">
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
				</div>
				<input type="text" />
				<p>I agree to the terms and privacy policy.</p>
			</form>
		</div>
	);
}

export default Signup