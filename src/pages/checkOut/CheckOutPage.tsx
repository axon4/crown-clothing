import React, { useContext } from 'react';
import { CartConText } from '../../providers/cart/CartProvider';
import CheckOutItem from '../../components/checkOutItem/CheckOutItem';
import StripeButton from '../../components/stripeButton/StripeButton';
import './CheckOutPage.scss';

const CheckOutPage = () => {
	const { cartItems, cartTotal } = useContext(CartConText);

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
					<span>ReMove</span>
				</div>
			</div>
			{cartItems.map((cartItem: any) => <CheckOutItem key={cartItem.ID} item={cartItem} />)}
			<div className='total'>TOTAL: £{cartTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}</div>
			<div className='test-warning'>
				USE THE FOLLOWING TEST-CARD FOR PAYMENTS:
				<br />
				4242 4242 4242 4242 | Expiry: 02/42 | CVC: 424
			</div>
			<StripeButton price={cartTotal} />
		</div>
	);
};

export default CheckOutPage;