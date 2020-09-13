import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { Dispatch } from 'redux';
import { User } from '../../redux/user/userSelectors';
import { Hidden } from '../../redux/cart/cartSelectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cartIcon/CartIcon';
import Cart from '../cart/Cart';
import { createStructuredSelector } from 'reselect';
import { selectUser } from '../../redux/user/userSelectors';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { logOut } from '../../redux/user/userActions';
import { HeaderNav, LogoContainer, OptionsContainer, OptionLink } from './HeaderStyles';

type HeaderProps = User | Hidden;

const Header = ({ user, hidden, logOut }:HeaderProps) => {
	return (
		<HeaderNav>
			<LogoContainer to='/'>
				<Logo className='logo' />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>
					SHOP
				</OptionLink>
				<OptionLink to='/contact'>
					CONTACT
				</OptionLink>
				{user
					? <OptionLink as='div' onClick={logOut}>LOG OUT</OptionLink>
					: <OptionLink to='/login'>LOG IN</OptionLink>}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <Cart />}
		</HeaderNav>
	);
};

const mapStateToProps = createStructuredSelector<RootState, HeaderProps>({
	user: selectUser,
	hidden: selectCartHidden
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
	logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);