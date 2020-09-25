import React, { useContext } from 'react';
import { CartContext } from '../../providers/cart/CartProvider';
import { ReactComponent as Icon } from '../../assets/cart.svg';
import './CartIcon.scss';

const CartIcon = () => {
	const { toggleHidden, cartItemsCount } = useContext(CartContext);

	return (
		<div className='cart-icon-container' onClick={toggleHidden} >
			<Icon className='cart-icon' />
			<span id='item-count'>{cartItemsCount}</span>
		</div>
	);
};

export default CartIcon;