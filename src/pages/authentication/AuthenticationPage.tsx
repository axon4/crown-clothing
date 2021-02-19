import React from 'react';
import LogIn from '../../components/logIn/LogIn';
import Register from '../../components/register/Register';
import './AuthenticationPage.scss';

const AuthenticationPage = () => {
	return (
		<div className='authentication-page'>
			<LogIn />
			<Register />
		</div>
	);
};

export default AuthenticationPage;