import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
	padding: 10px 15px;
	cursor: pointer;
`;

export const HeaderNav = styled.nav`
	margin-bottom: 25px;
	width: 100%;
	height: 70px;
	display: flex;
	justify-content: space-between;
`;

export const LogoContainer = styled(Link)`
	padding: 25px;
	width: 70px;
	height: 100%;
`;

export const OptionsContainer = styled.div`
	width: 50%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
	${OptionContainerStyles};
`;

// export const OptionDiv = styled.div`
// 	${OptionContainerStyles};
// `;