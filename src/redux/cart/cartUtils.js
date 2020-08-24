export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id);

	if (existingCartItem) {
		return cartItems.map(cartItem => {
			return cartItem.id === cartItemToAdd.id
				? {...cartItem, quantity: cartItem.quantity + 1} : cartItem;
		});
	};

	// eslint-disable-next-line
	return new Array(...cartItems, {...cartItemToAdd, quantity: 1});
};