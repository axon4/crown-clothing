import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../redux/rootReducer';
import CheckoutItem from '../../components/checkoutItem/CheckoutItem';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, CartItems } from '../../redux/cart/cartSelectors';
import { selectCartTotal, CartTotal } from '../../redux/cart/cartSelectors';
import './CheckoutPage.scss';

const CheckoutPage = ({ cartItems, total }:CartItems | CartTotal) => {
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
			<div className='total'>
				<span>TOTAL: £{total}</span>
			</div>
		</div>
	);
};

const mapStateToProps = createStructuredSelector<RootState, CartItems>({
	cartItems: selectCartItems,
	total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);