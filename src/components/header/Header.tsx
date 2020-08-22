import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebaseUtils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './Header.scss';

const Header = ({ user }:{ user:any }) => {
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
			</div>
		</nav>
	);
};

const mapStateToProps = (state:any) => {
	console.log('State', state);
	return {
		user: state.user.user
	};
};

export default connect(mapStateToProps)(Header);