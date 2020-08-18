import React from 'react';
import LogIn from '../../components/logIn/LogIn';
import './AuthenticationPage.scss';

const AuthenticationPage = () => {
	return (
		<div className='authentication'>
			<LogIn />
		</div>
	);
};

export default AuthenticationPage;