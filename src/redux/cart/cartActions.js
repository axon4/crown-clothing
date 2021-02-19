import CartActionConstants from './cartActionConstants';

export const toggleCartHidden = () => {
	return {type: CartActionConstants.TOGGLE_CART_HIDDEN};
};

export const addItem = item => {
	return {
		type: CartActionConstants.ADD_ITEM,
		payLoad: item
	};
};

export const subTractItem = item => {
	return {
		type: CartActionConstants.SUBTRACT_ITEM,
		payLoad: item
	};
};

export const reMoveItemFromCart = item => {
	return {
		type: CartActionConstants.REMOVE_ITEM_FROM_CART,
		payLoad: item
	};
};

export const clearCart = () => {
	return {type: CartActionConstants.CLEAR_CART};
};