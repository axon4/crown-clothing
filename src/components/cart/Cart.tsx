import React from 'react';
import CustomButton from '../customButton/CustomButton';
import './Cart.scss';

const Cart = () => {
	return (
		<div className='cart-'>
			<div className='cart-items' />
			<CustomButton>CHECKOUT</CustomButton>
		</div>
	);
};

export default Cart;