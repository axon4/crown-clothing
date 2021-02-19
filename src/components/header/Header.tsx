import React, { useContext } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Cart from '../cart/Cart';
import CartIcon from '../cartIcon/CartIcon';
import { CartConText } from '../../providers/cart/CartProvider';
import { RootState } from '../../redux/rootReducer';
import { User, selectUser } from '../../redux/user/userSelectors';
import { logOut } from '../../redux/user/userActions';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderNavigation, LogoContainer, OptionsContainer, OptionLink } from './HeaderStyles';

const Header = ({ user, logOut }: User) => {
	const { hidden } = useContext(CartConText);

	return (
		<HeaderNavigation>
			<LogoContainer to='/'>
				<Logo className='logo' />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>
					SHOP
				</OptionLink>
				<OptionLink to='/conTact'>
					CONTACT
				</OptionLink>
				{user
					? <OptionLink as='div' onClick={logOut}>LOG-OUT</OptionLink>
					: <OptionLink to='/logIn'>LOG-IN</OptionLink>}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <Cart />}
		</HeaderNavigation>
	);
};

const mapStateToProps = createStructuredSelector<RootState, User>({
	user: selectUser
});

const mapDisPatchToProps = (disPatch: Dispatch) => ({
	logOut: () => disPatch(logOut())
});

export default connect(mapStateToProps, mapDisPatchToProps)(Header);