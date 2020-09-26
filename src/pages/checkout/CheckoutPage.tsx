import React, { useContext } from 'react';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import StripeButton from '../../components/stripeButton/StripeButton';
import { CartContext } from '../../providers/cart/CartProvider';
import './CheckoutPage.scss';

const CheckoutPage = () => {
	const { cartItems, cartTotal } = useContext(CartContext);
	
	return (
		<div className='checkout-page'>
			<div className='checkout-header'>
				<div className='header-block'>
					<span>Item</span>
				</div>
				<div className='header-block'>
					<span>Name</span>
				</div>
				<div className='header-block'>
					<span>Quantity</span>
				</div>
				<div className='header-block'>
					<span>Price</span>
				</div>
				<div className='header-block'>
					<span>Remove</span>
				</div>
			</div>
			{cartItems.map((cartItem:any) => <CheckoutItem key={cartItem.id} item={cartItem} />)}
			<div className='total'>TOTAL: £{cartTotal}</div>
			<div className='test-warning'>
				PLEASE USE THE FOLLOWING TEST CARD FOR PAYMENTS:
				<br />
				4242 4242 4242 4242 | Expiry: 02/42 | CVC: 424
			</div>
			<StripeButton price={cartTotal} />
		</div>
	);
};

export default CheckoutPage;