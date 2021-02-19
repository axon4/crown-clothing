import CartActionConstants from './cartActionConstants';
import { addItemToCart, subTractItemFromCart } from '../../providers/cart/cartUtilities';

const INITIAL_STATE = {
	hidden: true,
	cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case CartActionConstants.TOGGLE_CART_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};

		case CartActionConstants.ADD_ITEM:
			return {
				...state,
				cartItems: addItemToCart(state.cartItems, action.payLoad)
			};

		case CartActionConstants.SUBTRACT_ITEM:
			return {
				...state,
				cartItems: subTractItemFromCart(state.cartItems, action.payLoad)
			};

		case CartActionConstants.REMOVE_ITEM_FROM_CART:
			return {
				...state,
				cartItems: state.cartItems.filter(cartItem => cartItem.ID !== action.payLoad.ID)
			};

		case CartActionConstants.CLEAR_CART:
			return {
				...state,
				cartItems: []
			};

		default:
			return state;
	};
};

export default cartReducer;