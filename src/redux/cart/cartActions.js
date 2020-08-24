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