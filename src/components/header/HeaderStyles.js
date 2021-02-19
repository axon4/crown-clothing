import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
	padding: 10px 15px;
	cursor: pointer;
`;

export const HeaderNavigation = styled.nav`
	margin-bottom: 25px;
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: space-between;

	@media screen and (max-width: 800px) {
		margin-bottom: 20px;
		padding: 10px;
		height: 60px;
	}
`;

export const LogoContainer = styled(Link)`
	padding: 25px;
	width: 70px;
	height: 100%;

	@media screen and (max-width: 800px) {
		padding: 0px;
		width: 50px;
	}
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;

	@media screen and (max-width: 800px) {
		width: 80%;
	}
`;

export const OptionLink = styled(Link)`
	${OptionContainerStyles};
`;

// export const OptionDiv = styled.div`
// 	${OptionContainerStyles};
// `;