import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import FormInPut from '../formInPut/FormInPut';
import CustomButton from '../customButton/CustomButton';
import { register } from '../../redux/user/userActions';
import './Register.scss';

type Registrations = {
	register: (registrationDetails: object) => any;
};

const Register = ({ register }: Registrations) => {
	const [ registrationDetails, setRegistrationDetails ] = useState({
		displayName: '',
		eMail: '',
		passWord: '',
		confirmPassWord: ''
	});

	const { displayName, eMail, passWord, confirmPassWord } = registrationDetails;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setRegistrationDetails({...registrationDetails, [name]: value});
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		if (passWord !== confirmPassWord) {
			alert('PassWords Don\'t Match');

			return;
		};

		register({ displayName, eMail, passWord });
	};

	return (
		<div className='register'>
			<h2 className='title'>Register</h2>
			<span>...with EMail and PassWord</span>
			<form className='registration-form' onSubmit={handleSubmit}>
				<FormInPut
					name='displayName'
					label='displayName'
					type='text'
					value={displayName}
					handleChange={handleChange}
					required
				/>
				<FormInPut
					name='eMail'
					label='eMail'
					type='email'
					value={eMail}
					handleChange={handleChange}
					required
				/>
				<FormInPut
					name='passWord'
					label='passWord'
					type='password'
					value={passWord}
					handleChange={handleChange}
					required
				/>
				<FormInPut
					name='confirmPassWord'
					label='confirmPassWord'
					type='password'
					value={confirmPassWord}
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

const mapDisPatchToProps = (disPatch: Dispatch) => ({
	register: (registrationDetails: any) => disPatch(register(registrationDetails))
});

export default connect(null, mapDisPatchToProps)(Register);