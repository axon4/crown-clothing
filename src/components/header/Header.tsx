import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import { User } from '../../redux/user/userSelectors';
import { Hidden } from '../../redux/cart/cartSelectors';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebaseUtils';
import CartIcon from '../cartIcon/CartIcon';
import Cart from '../cart/Cart';
import { createStructuredSelector } from 'reselect';
import { selectUser } from '../../redux/user/userSelectors';
import { selectCartHidden } from '../../redux/cart/cartSelectors';
import './Header.scss';

type HeaderProps = User | Hidden;

const Header = ({ user, hidden }:HeaderProps) => {
	return (
		<nav>
			<Link to='/' className='logo-container'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link to='/shop' className='option'>
					SHOP
				</Link>
				<Link to='/contact' className='option'>
					CONTACT
				</Link>
				{user
					? <div className='option' onClick={() => auth.signOut()}>LOG OUT</div>
					: <Link to='/login' className='option'>LOG IN</Link>}
				<CartIcon />
			</div>
			{hidden ? null : <Cart />}
		</nav>
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