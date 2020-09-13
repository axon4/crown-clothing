import CartActionConsts from './cartActionConsts';
import { addItemToCart, subtractItemFromCart } from './cartUtils';

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionConsts.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
		case CartActionConsts.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payload)
			};
		case CartActionConsts.SUBTRACT_ITEM:
			return {
				...state,
				cartItems: subtractItemFromCart(state.cartItems, action.payload)
			};
		case CartActionConsts.REMOVE_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(cartItem => {
					return cartItem.id !== action.payload.id;
				})
			};
		case CartActionConsts.CLEAR_CART:
			return {
				...state,
				cartItems: []
			};
		default:
			return state;
	};
};

export default cartReducer;