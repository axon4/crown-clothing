import React from 'react';
import './CustomButton.scss';

type CustomButtonProps = {
	children:React.ReactNode;
	type:'submit';
};

const CustomButton = ({ children, ...otherProps }:CustomButtonProps) => {
	return (
		<button className='custom-button' {...otherProps}>
			{children}
		</button>
	);
};

export default CustomButton;