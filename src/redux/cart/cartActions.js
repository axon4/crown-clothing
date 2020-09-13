import CartActionConsts from './cartActionConsts';

export const toggleCartHidden = () => {
	return {type: CartActionConsts.TOGGLE_CART_HIDDEN};
};

export const addItem = item => {
	return {
		type: CartActionConsts.ADD_ITEM,
		payload: item
	};
};

export const subtractItem = item => {
	return {
		type: CartActionConsts.SUBTRACT_ITEM,
		payload: item
	};
};

export const removeItemFromCart = item => {
	return {
		type: CartActionConsts.REMOVE_ITEM_FROM_CART,
		payload: item
	};
};

export const clearCart = () => {
	return {type: CartActionConsts.CLEAR_CART};
};