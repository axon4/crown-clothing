import UserActionConsts from './userActionConsts';

export const emailLogIn = logInDetails => {
	return {
		type: UserActionConsts.EMAIL_LOG_IN_PENDING,
		payload: logInDetails
	};
};

export const googleLogIn = () => {
	return {type: UserActionConsts.GOOGLE_LOG_IN_PENDING};
};

export const logInSuccess = user => {
	return {
		type: UserActionConsts.LOG_IN_SUCCESS,
		payload: user
	};
};

export const logInFailure = error => {
	return {
		type: UserActionConsts.LOG_IN_FAILURE,
		payload: error
	};
};

export const checkUserSession = () => {
	return {type: UserActionConsts.CHECK_USER_SESSION};
};

export const logOut = () => {
	return {type: UserActionConsts.LOG_OUT_PENDING};
};

export const logOutSuccess = () => {
	return {type: UserActionConsts.LOG_OUT_SUCCESS};
};

export const logOutFailure = error => {
	return {
		type: UserActionConsts.LOG_OUT_PENDING,
		payload: error
	};
};

export const register = userCredentials => {
	console.log('REGISTER ACTION FIRED');
	return {
		type: UserActionConsts.REGISTER_PENDING,
		payload: userCredentials
	};
};

export const registerSuccess = ({user, additionalData}) => {
	return {
		type: UserActionConsts.REGISTER_SUCCESS,
		payload: {user, additionalData}
	};
};

export const registerFailure = error => {
	return {
		type: UserActionConsts.REGISTER_FAILURE,
		payload: error
	};
};