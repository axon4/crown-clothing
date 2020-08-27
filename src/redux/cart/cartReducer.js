import { cartActionConsts } from './cartActionConsts';
import { addItemToCart, subtractItemFromCart } from './cartUtils';

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
		case cartActionConsts.SUBTRACT_ITEM:
			return {
				...state,
				cartItems: subtractItemFromCart(state.cartItems, action.payload)
			};
		case cartActionConsts.REMOVE_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(cartItem => {
					return cartItem.id !== action.payload.id;
				})
			};
		default:
			return state;
	};
};

export default cartReducer;