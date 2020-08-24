import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../customButton/CustomButton';
import CartItem from '../cartItem/CartItem';
import './Cart.scss';

type CartItems = {
	cart:{cartItems:object}
};

const Cart = ({ cartItems }:{ cartItems:any }) => {
	return (
		<div className='cart-'>
			<div className='cart-items'>
				{cartItems.map((cartItem:any) => (
					<CartItem key={cartItem.id} item={cartItem} />
				))}
			</div>
			<CustomButton>CHECKOUT</CustomButton>
		</div>
	);
};

const mapStateToProps = ({ cart: { cartItems } }:CartItems) => {
	return {cartItems};
};

export default connect(mapStateToProps)(Cart);