import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { ReactComponent as Icon } from '../../assets/cart.svg';
import { toggleCartDropdownHidden } from '../../redux/cartDropdown/cartDropdownActions';
import './Cart.scss';

type CartProp = {
	toggleCartDropdownHidden:() => object
};

const Cart = ({ toggleCartDropdownHidden }:CartProp) => {
	return (
		<div className='cart' onClick={toggleCartDropdownHidden} >
			<Icon className='cart-icon' />
			<span id='item-count'>0</span>
		</div>
	);
};

const mapDispatchToProps = (dispatch:Dispatch) => {
	return {
		toggleCartDropdownHidden: () => dispatch(toggleCartDropdownHidden())
	};
};

export default connect(null, mapDispatchToProps)(Cart);