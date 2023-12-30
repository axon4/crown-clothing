import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

const StripeButton = ({ price }: {price: number}) => {
	const publishAbleKey = 'pk_test_51HLlkuETZt84p6IuHoN4xiGdpbsVQFvgxlo1xqhd98uk9QEzCJMRiLye6sxRYG3ieFnHlBCuYmKTwLxfxC7eWbRS00zIAhvDjA';
	const priceForStripe = price * 100;

	const onToken = (token: Token) => {
		console.log('token:', token);
		alert('Payment Successful (Stripe-Token in ConSole)!');
	};

	return (
		<StripeCheckout
			name='Crown Clothing'
			label='Pay'
			panelLabel='Pay:&nbsp;'
			image='../../assets/crown.svg'
			description={`Total: £${price}`}
			billingAddress
			shippingAddress
			currency='GBP'
			amount={priceForStripe}
			token={onToken}
			stripeKey={publishAbleKey}
		/>
	);
};

export default StripeButton;