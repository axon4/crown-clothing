import { cartActionConsts } from './cartActionConsts';
import { addItemToCart } from './cartUtils';

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case cartActionConsts.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
		case cartActionConsts.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};
		default:
			return state;
	};
};

export default cartReducer;