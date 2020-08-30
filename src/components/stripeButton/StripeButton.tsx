import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

const StripeButton = ({ price }:{ price:number }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51HLlkuETZt84p6IuHoN4xiGdpbsVQFvgxlo1xqhd98uk9QEzCJMRiLye6sxRYG3ieFnHlBCuYmKTwLxfxC7eWbRS00zIAhvDjA';

	const onToken = (token:Token) => {
		console.log(token);
		alert(`Payment Succesful! (Stripe Token in Console)`);
	};

	return (
		<StripeCheckout
			name='Ecommerce Store'
			label='Pay'
			panelLabel='Pay Now:&nbsp;'
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is: £${price}`}
			billingAddress
			shippingAddress
			currency='GBP'
			amount={priceForStripe}
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeButton;