import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import FormInPut from '../formInPut/FormInPut';
import CustomButton from '../../components/customButton/CustomButton';
import { eMailLogIn, GoogleLogIn } from '../../redux/user/userActions';
import './LogIn.scss';

type LogIns = {
	eMailLogIn: (eMail: string, passWord: string) => any,
	GoogleLogIn: () => any
};

const LogIn = ({ eMailLogIn, GoogleLogIn }: LogIns) => {
	const [ logInDetails, setLogInDetails ] = useState({eMail: '', passWord: ''});

	const { eMail, passWord } = logInDetails;

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setLogInDetails({...logInDetails, [name]: value});
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();

		eMailLogIn(eMail, passWord);
	};

	return (
		<div className='log-in'>
			<h2>Log-In</h2>
			<span>...with Google / EMail/PassWord</span>
			<form onSubmit={handleSubmit}>
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
				<div className='buttons'>
					<CustomButton type='submit'>Log-In</CustomButton>
					<CustomButton type='button' onClick={GoogleLogIn} isGoogleLogIn>Log-In with Google</CustomButton>
				</div>
			</form>
		</div>
	);
};

const mapDisPatchToProps = (disPatch: Dispatch) => ({
	eMailLogIn: (eMail: string, passWord: string) => disPatch(eMailLogIn({ eMail, passWord })),
	GoogleLogIn: () => disPatch(GoogleLogIn())
});

export default connect(null, mapDisPatchToProps)(LogIn);