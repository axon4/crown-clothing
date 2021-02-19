import UserActionConstants from './userActionConstants';

export const eMailLogIn = credentials => {
	return {
		type: UserActionConstants.EMAIL_LOG_IN_PENDING,
		payLoad: credentials
	};
};

export const GoogleLogIn = () => {
	return {type: UserActionConstants.GOOGLE_LOG_IN_PENDING};
};

export const logInSuccess = user => {
	return {
		type: UserActionConstants.LOG_IN_SUCCESS,
		payLoad: user
	};
};

export const logInFailure = error => {
	return {
		type: UserActionConstants.LOG_IN_FAILURE,
		payLoad: error
	};
};

export const checkUserSession = () => {
	return {type: UserActionConstants.CHECK_USER_SESSION};
};

export const logOut = () => {
	return {type: UserActionConstants.LOG_OUT_PENDING};
};

export const logOutSuccess = () => {
	return {type: UserActionConstants.LOG_OUT_SUCCESS};
};

export const logOutFailure = error => {
	return {
		type: UserActionConstants.LOG_OUT_PENDING,
		payLoad: error
	};
};

export const register = credentials => {
	// console.log('REGISTER-ACTION FIRED');

	return {
		type: UserActionConstants.REGISTER_PENDING,
		payLoad: credentials
	};
};

export const registerSuccess = ({ user, additionalData }) => {
	return {
		type: UserActionConstants.REGISTER_SUCCESS,
		payLoad: { user, additionalData }
	};
};

export const registerFailure = error => {
	return {
		type: UserActionConstants.REGISTER_FAILURE,
		payLoad: error
	};
};