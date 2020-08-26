import React from 'react';
import { RootState } from '../../redux/rootReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CustomButton from '../customButton/CustomButton';
import CartItem from '../cartItem/CartItem';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, CartItems } from '../../redux/cart/cartSelectors'
import './Cart.scss';
import { toggleCartHidden } from '../../redux/cart/cartActions';

const Cart = ({ cartItems, history, dispatch }:CartItems) => {
	return (
		<div className='cart'>
			<div className='cart-items'>
				{ cartItems.length
					? cartItems.map((cartItem:any) => (
						<CartItem key={cartItem.id} item={cartItem} />
					))
					: <span className='empty-cart-message'>Your Cart is Empty</span>
				}
			</div>
			<CustomButton onClick={() => {
					history.push('/checkout');
					dispatch(toggleCartHidden());
				}}>
				CHECKOUT
			</CustomButton>
		</div>
	);
};

const mapStateToProps = createStructuredSelector<RootState, CartItems>({
	cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(Cart));