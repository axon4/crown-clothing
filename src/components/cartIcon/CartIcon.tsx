import React, { useContext } from 'react';
import { CartConText } from '../../providers/cart/CartProvider';
import { ReactComponent as Icon } from '../../assets/cart.svg';
import './CartIcon.scss';

const CartIcon = () => {
	const { toggleHidden, cartItemsCount } = useContext(CartConText);

	return (
		<div className='cart-icon-container' onClick={toggleHidden}>
			<Icon className='cart-icon' />
			<span id='item-count'>{cartItemsCount}</span>
		</div>
	);
};

export default CartIcon;