export const addItemToCart = (cartItems, cartItemToAdd) => {
	const existingCartItem = cartItems.find(cartItem => cartItem.ID === cartItemToAdd.ID);

	if (existingCartItem) {
		return cartItems.map(cartItem => cartItem.ID === cartItemToAdd.ID ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem);
	};

	// eslint-disable-next-line
	return new Array(...cartItems, {...cartItemToAdd, quantity: 1});
};

export const subTractItemFromCart = (cartItems, cartItemToSubTract) => {
	const existingCartItem = cartItems.find(cartItem => cartItem.ID === cartItemToSubTract.ID);

	if (existingCartItem.quantity === 1) {
		return cartItems.filter(cartItem => cartItem.ID !== cartItemToSubTract.ID);
	};

	return cartItems.map(cartItem => cartItem.ID === cartItemToSubTract.ID ? {...cartItem, quantity: cartItem.quantity - 1} : cartItem);
};

export const reMoveItemFromCart = (cartItems, cartItemToReMove) => cartItems.filter(cartItem => cartItem.ID !== cartItemToReMove.ID);

export const getCartItemsCount = cartItems => cartItems.reduce((cumulativeQuantity, cartItems) => cumulativeQuantity + cartItems.quantity, 0);

export const getCartTotal = cartItems => cartItems.reduce((cumulativeQuantity, cartItem) => cumulativeQuantity + (cartItem.quantity * cartItem.price), 0);