import React from 'react';
import firebase from '../../firebase/firebaseUtils';
import './CustomButton.scss';

type CustomButtonProps = {
	type?:'submit' | 'button';
	children:React.ReactNode;
	isGoogleLogIn?:boolean;
	onClick?:() => Promise<firebase.auth.UserCredential>;
};

const CustomButton = ({ children, isGoogleLogIn, ...otherProps }:CustomButtonProps) => {
	return (
		<button className={`${isGoogleLogIn ? 'google-log-in' : ''} custom-button`} {...otherProps}>
			{children}
		</button>
	);
};

export default CustomButton;