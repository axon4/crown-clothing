import ShopActionConstants from './shopActionConstants';

const INITIAL_STATE = {
	collections: null,
	isFetching: false,
	error: ''
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case ShopActionConstants.FETCH_COLLECTIONS_PENDING:
			return {
				...state,
				isFetching: true
			};

		case ShopActionConstants.FETCH_COLLECTIONS_SUCCESS:
			return {
				...state,
				isFetching: false,
				collections: action.payLoad
			};

		case ShopActionConstants.FETCH_COLLECTIONS_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payLoad
			};

		default:
			return state;
	};
};

export default shopReducer;