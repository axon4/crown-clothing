import { cartActionConsts } from './cartActionConsts';

export const toggleCartHidden = () => {
	return {type: cartActionConsts.TOGGLE_CART_HIDDEN};
};

export const addItem = item => {
	return {
		type: cartActionConsts.ADD_ITEM,
		payload: item
	};
};

export const subtractItem = item => {
	return {
		type: cartActionConsts.SUBTRACT_ITEM,
		payload: item
	};
};

export const removeItemFromCart = item => {
	return {
		type: cartActionConsts.REMOVE_ITEM_FROM_CART,
		payload: item
	};
};