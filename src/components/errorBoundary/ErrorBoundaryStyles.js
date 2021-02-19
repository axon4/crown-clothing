import styled from 'styled-components';
import errorImage from '../../assets/broken-mug.png';

export const ErrorImageOverLay = styled.div`
	height: 60vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const ErrorImageContainer = styled.div`
	display: inline-block;
	background-image: url(${errorImage});
	background-size: cover;
	background-position: center;
	width: 40vh;
	height: 40vh;
`;

export const ErrorImageText = styled.h2`
	font-size: 28px;
	color: #2F8E89;
`;