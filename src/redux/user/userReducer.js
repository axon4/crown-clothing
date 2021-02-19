import UserActionConstants from './userActionConstants';

const INITIAL_STATE = {
	user: null,
	error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionConstants.LOG_IN_SUCCESS:
			return {
				...state,
				user: action.payLoad,
				error: null
			};

		case UserActionConstants.LOG_OUT_SUCCESS:
			return {
				...state,
				user: null,
				error: null
			};

		case UserActionConstants.LOG_IN_FAILURE:
		case UserActionConstants.LOG_OUT_FAILURE:
		case UserActionConstants.REGISTER_FAILURE:
			return {
				...state,
				error: action.payLoad
			};
			
		default:
			return state;
	};
};

export default userReducer;