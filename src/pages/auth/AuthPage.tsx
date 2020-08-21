import React from 'react';
import LogIn from '../../components/logIn/LogIn';
import Register from '../../components/register/Register';
import './AuthPage.scss';

const AuthPage = () => {
	return (
		<div className='auth-page'>
			<LogIn />
			<Register />
		</div>
	);
};

export default AuthPage;