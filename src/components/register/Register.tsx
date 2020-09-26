import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';
import { register } from '../../redux/user/userActions';
import './Register.scss';

type Registrations = {
	register:(registrationDetails:object) => any
};

const Register = ({ register }:Registrations) => {
	const [registrationDetails, setRegistrationDetails] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: ''
	});
	const { displayName, email, password, confirmPassword } = registrationDetails;

	const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		
		setRegistrationDetails({...registrationDetails, [name]: value});
	};

	const handleSubmit = async (event:React.FormEvent) => {
		event.preventDefault();


		if (password !== confirmPassword) {
			alert('Passwords Don\'t Match!');

			return;
		};

		register({ displayName, email, password });
	};

	return (
		<div className='register'>
			<h2 className='title'>Register</h2>
			<span>...with Email and Password</span>
			<form className='registration-form' onSubmit={handleSubmit}>
				<FormInput
					name='displayName'
					label='Name'
					type='text'
					value={displayName}
					handleChange={handleChange}
					required
				/>
				<FormInput
					name='email'
					label='Email'
					type='email'
					value={email}
					handleChange={handleChange}
					required
				/>
				<FormInput
					name='password'
					label='Password'
					type='password'
					value={password}
					handleChange={handleChange}
					required
				/>
				<FormInput
					name='confirmPassword'
					label='Confirm Password'
					type='password'
					value={confirmPassword}
					handleChange={handleChange}
					required
				/>
				<div className='buttons'>
				<CustomButton type='submit'>REGISTER</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = (dispatch:Dispatch) => ({
	register: (userCredentials:any) => dispatch(register(userCredentials))
});

export default connect(null, mapDispatchToProps)(Register);