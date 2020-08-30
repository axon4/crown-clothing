import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { User } from '../../redux/user/userSelectors';
import { Hidden } from '../../redux/cart/cartSelectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebaseUtils';
import CartIcon from '../cartIcon/CartIcon';
import Cart from '../cart/Cart';
import { createStructuredSelector } from 'reselect';
import { selectUser } from '../../redux/user/userSelectors';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import { HeaderNav, LogoContainer, OptionsContainer, OptionLink } from './HeaderStyles';

type HeaderProps = User | Hidden;

const Header = ({ user, hidden }:HeaderProps) => {
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
					? <OptionLink as='div' onClick={() => auth.signOut()}>LOG OUT</OptionLink>
					: <OptionLink to='/login'>LOG IN</OptionLink>}
				<CartIcon />
			</OptionsContainer>
			{hidden ? null : <Cart />}
		</HeaderNav>
	);
};

// type HeaderStateMap = {
// 	user:{user:any},
// 	cart:{hidden:boolean}
// };

const mapStateToProps = createStructuredSelector<RootState, HeaderProps>({
	user: selectUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);