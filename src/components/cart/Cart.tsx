import React from 'react';
import { RootState } from '../../redux/rootReducer';
import { connect } from 'react-redux';
import CustomButton from '../customButton/CustomButton';
import CartItem from '../cartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cartSelectors'
import './Cart.scss';

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

const mapStateToProps = (state:RootState) => {
	return {cartItems: selectCartItems(state)};
};

export default connect(mapStateToProps)(Cart);