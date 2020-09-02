import React from 'react';
import firebase from '../../firebase/firebaseUtils';
import './CustomButton.scss';
import { CustomButtonContainer } from './CustomButtonStyles';

type CustomButtonProps = {
	type?:'submit' | 'button';
	children:React.ReactNode;
	isGoogleLogIn?:boolean;
	inverted?:boolean;
	onClick?:() => Promise<firebase.auth.UserCredential> | void;
};

// const CustomButton = ({ children, isGoogleLogIn, inverted, ...otherProps }:CustomButtonProps) => {
// 	return (
// 		<button className={
// 				`${isGoogleLogIn ? 'google-log-in' : ''}
// 				${inverted ? 'inverted' : ''}
// 				custom-button`
// 				}
// 			{...otherProps}>
// 			{children}
// 		</button>
// 	);
// };

const CustomButton = ({ children, ...props }:CustomButtonProps) => {
	return (
		<CustomButtonContainer {...props}>
			{children}
		</CustomButtonContainer>
	);
};

export default CustomButton;