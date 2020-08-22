import { cartDropdownActionConsts } from './cartDropdownActionConsts';

const INITIAL_STATE = {
	hidden: true
};

const cartDropdownReducer = (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case cartDropdownActionConsts.TOGGLE_CART_DROPDOWN_HIDDEN:
			return {
				...state,
				hidden: !state.hidden
			};
		
		default:
			return state;
	};
};

export default cartDropdownReducer;