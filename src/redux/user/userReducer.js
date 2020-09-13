import UserActionConsts from './userActionConsts';

const INITIAL_STATE = {
	user: null,
	error: null
};

const userReducer = (state=INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionConsts.LOG_IN_SUCCESS:
			return {
				...state,
				user: action.payload,
				error: null
			};
		case UserActionConsts.LOG_OUT_SUCCESS:
			return {
				...state,
				user: null,
				error: null
			};
		case UserActionConsts.LOG_IN_FAILURE:
		case UserActionConsts.LOG_OUT_FAILURE:
		case UserActionConsts.REGISTER_FAILURE:
			return {
				...state,
				error: action.payload
			};
		default:
			return state;
	};
};

export default userReducer;