import styled, { css } from 'styled-components';

const baseStyles = css`
	background-color: black;
	color: white;
	border: none;

	&:hover {
		background-color: white;
		color: black;
		border: 1px solid black;
	}
`;

const googleLogInStyles = css`
	background-color: #4285F4;
	color: white;

	&:hover {
		background-color: #357AE8;
		border: none;
	}
`;

const invertedStyles = css`
	background-color: white;
	color: black;
	border: 1px solid black;

	&:hover {
		background-color: black;
		color: white;
		border: none;
	}
`;

const getButtonStyles = props => {
	if (props.isGoogleLogIn) {
		return googleLogInStyles;
	};

	return props.inverted ? invertedStyles : baseStyles;
};

export const CustomButtonContainer = styled.button`
	min-width: 165px;
	width: auto;
	height: 50px;
	display: flex;
	justify-content: center;
	letter-spacing: 0.5px;
	line-height: 50px;
	padding: 0 35px 0 35px;
	font-size: 15px;
	text-transform: uppercase;
	font-family: 'Open Sans Condensed';
	font-weight: bolder;
	cursor: pointer;

	${getButtonStyles};
`;