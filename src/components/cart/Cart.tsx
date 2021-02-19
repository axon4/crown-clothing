import React, { useContext } from 'react';
import { withRouter } from 'react-router-dom';
import { CartConText } from '../../providers/cart/CartProvider';
import CustomButton from '../customButton/CustomButton';
import CartItem from '../cartItem/CartItem';
import { CartItems } from '../../redux/cart/cartSelectors'
import './Cart.scss';

const Cart = ({ history }: CartItems) => {
	const { cartItems, toggleHidden } = useContext(CartConText);

	return (
		<div className='cart'>
			<div className='cart-items'>
				{cartItems.length
					? cartItems.map((cartItem: any) => (
						<CartItem key={cartItem.ID} item={cartItem} />
					))
					: <span className='empty-cart-message'>Cart Empty</span>
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