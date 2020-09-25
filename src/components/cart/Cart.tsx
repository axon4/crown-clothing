import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { CartContext } from '../../providers/cart/CartProvider';
import CustomButton from '../customButton/CustomButton';
import CartItem from '../cartItem/CartItem';
import { CartItems } from '../../redux/cart/cartSelectors'
import './Cart.scss';

const Cart = ({ history }:CartItems) => {
	const { cartItems, toggleHidden } = useContext(CartContext);

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
					toggleHidden();
				}}>
				CHECKOUT
			</CustomButton>
		</div>
	);
};

export default withRouter(Cart);