import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ReactComponent as Icon } from '../../assets/cart.svg';
import { toggleCartHidden } from '../../redux/cart/cartActions';
import './CartIcon.scss';

type CartIconProp = {
	toggleCartHidden:() => object
};

const CartIcon = ({ toggleCartHidden }:CartIconProp) => {
	return (
		<div className='cart-icon-container' onClick={toggleCartHidden} >
			<Icon className='cart-icon' />
			<span id='item-count'>0</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch:Dispatch) => {
	return {
		toggleCartHidden: () => dispatch(toggleCartHidden())
	};
};

export default connect(null, mapDispatchToProps)(CartIcon);