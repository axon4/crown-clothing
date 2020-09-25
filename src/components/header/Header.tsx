import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { Dispatch } from 'redux';
import { CartContext } from '../../providers/cart/CartProvider';
import { User } from '../../redux/user/userSelectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cartIcon/CartIcon';
import Cart from '../cart/Cart';
import { createStructuredSelector } from 'reselect';
import { selectUser } from '../../redux/user/userSelectors';
import { logOut } from '../../redux/user/userActions';
import { HeaderNav, LogoContainer, OptionsContainer, OptionLink } from './HeaderStyles';

const Header = ({ user, logOut }:User) => {
	const { hidden } = useContext(CartContext);

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

const mapStateToProps = createStructuredSelector<RootState, User>({
	user: selectUser,
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
	logOut: () => dispatch(logOut())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);