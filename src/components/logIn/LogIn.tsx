import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import FormInput from '../../components/formInput/FormInput';
import CustomButton from '../../components/customButton/CustomButton';
import { emailLogIn, googleLogIn } from '../../redux/user/userActions';
import './LogIn.scss';

type LogIns = {
	emailLogIn:(email:string, password:string) => any,
	googleLogIn:() => any
};

const LogIn = ({ emailLogIn, googleLogIn }:LogIns) => {
	const [logInDetails, setLogInDetails] = useState({
		email: '', password: ''
	});
	const { email, password } = logInDetails;

	const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		
		setLogInDetails({...logInDetails, [name]: value});
	};

	const handleSubmit = async (event:React.FormEvent) => {
		event.preventDefault();

		emailLogIn(email, password);
	};

	return (
		<div className='log-in'>
			<h2>Log In</h2>
			<span>...with Google/Email and Password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name='email'
					label='email'
					type='email'
					value={email}
					handleChange={handleChange}
					required
				/>
				<FormInput
					name='password'
					label='password'
					type='password'
					value={password}
					handleChange={handleChange}
					required
				/>
				<div className='buttons'>
					<CustomButton type='submit'>Log In</CustomButton>
					<CustomButton type='button' onClick={googleLogIn} isGoogleLogIn>Log In with Google</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch:Dispatch) => ({
	emailLogIn: (email:string, password:string) => dispatch(emailLogIn({email, password})),
	googleLogIn: () => dispatch(googleLogIn())
});

export default connect(null, mapDispatchToProps)(LogIn);