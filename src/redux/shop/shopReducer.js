import ShopActionConsts from './shopActionConsts';

const INITIAL_STATE = {
	collections: null,
	isFetching: false,
	error: ''
};

const shopReducer = (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case ShopActionConsts.FETCH_COLLECTIONS_PENDING:
			return {
				...state,
				isFetching: true
			};
		case ShopActionConsts.FETCH_COLLECTIONS_SUCCESS:
			return {
				...state,
				isFetching: false,
				collections: action.payload
			};
		case ShopActionConsts.FETCH_COLLECTIONS_FAILURE:
			return {
				...state,
				isFetching: false,
				error: action.payload
			}
		default:
			return state;
	};
};

export default shopReducer;