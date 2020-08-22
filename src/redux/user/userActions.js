import { userActionConsts } from './userActionConsts';

export const setUser = user => {
	return {
		type: userActionConsts.SET_USER,
		payload: user
	};
};