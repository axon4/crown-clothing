import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebaseUtils';
import Cart from '../cart/Cart';
import CartDropdown from '../cart-dropdown/CartDropdown';
import './Header.scss';

type HeaderProps = {
	user:any,
	hidden:boolean
};

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
				{
					user
					? <div className='option' onClick={() => auth.signOut()}>LOG OUT</div>
					: <Link to='/login' className='option'>LOG IN</Link>
				}
				<Cart />
			</div>
			{
				hidden ? null : <CartDropdown />
			}
		</nav>
	);
};

type HeaderStateMap = {
	user:{user:any},
	cartDropdown: {hidden:boolean}
};

const mapStateToProps = ({ user: { user }, cartDropdown: { hidden } }:HeaderStateMap) => {
	return {
		user,
		hidden
	};
};

export default connect(mapStateToProps)(Header);