import React from 'react';
import fireBase from '../../fireBase/fireBase';
import { CustomButtonContainer } from './CustomButtonStyles';
import './CustomButton.scss';

type CustomButtonProps = {
	type?: 'submit' | 'button';
	children: React.ReactNode;
	isGoogleLogIn?: boolean;
	inverted?: boolean;
	onClick?: () => Promise<fireBase.auth.UserCredential> | void;
};

// const CustomButton = ({ children, isGoogleLogIn, inverted, ...otherProps }:CustomButtonProps) => {
// 	return (
// 		<button className={
// 				`${isGoogleLogIn ? 'google-log-in' : ''}
// 				${inverted ? 'inverted' : ''}
// 				custom-button`
// 			}
// 			{...otherProps}>
// 			{children}
// 		</button>
// 	);
// };

const CustomButton = ({ children, ...props }: CustomButtonProps) => {
	return (
		<CustomButtonContainer {...props}>
			{children}
		</CustomButtonContainer>
	);
};

export default CustomButton;