import { takeLatest, all, call, put, } from 'redux-saga/effects';
import UserActionConstants from './userActionConstants';
import { authentication, GoogleProvider, createUserProfileDocument, getCurrentUser } from '../../fireBase/fireBase';
import {
	logInSuccess,
	logInFailure,
	logOutSuccess,
	logOutFailure,
	registerSuccess,
	registerFailure
} from './userActions';

export function* getSnapShotFromUserAuthentication(user, additionalData) {
	try {
		const userReference = yield call(createUserProfileDocument, user, additionalData);
		const snapShot = yield userReference.get();

		yield put(logInSuccess({ID: snapShot.id, ...snapShot.data()}));
	} catch (error) {
		yield put(logInFailure(error));
	};
};

export function* logInWithEMail({ payLoad: { eMail, passWord } }) {
	try {
		const { user } = yield authentication.signInWithEmailAndPassword(eMail, passWord);

		yield getSnapShotFromUserAuthentication(user);
	} catch (error) {
		yield put(logInFailure(error));
	};
};

export function* onEMailLogIn() {
	yield takeLatest(UserActionConstants.EMAIL_LOG_IN_PENDING, logInWithEMail);
};

export function* logInWithGoogle() {
	try {
		const { user } = yield authentication.signInWithPopup(GoogleProvider);

		yield getSnapShotFromUserAuthentication(user);
	} catch (error) {
		yield put(logInFailure(error));
	};
};

export function* onGoogleLogIn() {
	yield takeLatest(UserActionConstants.GOOGLE_LOG_IN_PENDING, logInWithGoogle);
};

export function* isUserAuthenticated() {
	try {
		const user = yield getCurrentUser();

		if (!user) return;

		yield getSnapShotFromUserAuthentication(user);
	} catch (error) {
		yield put(logInFailure(error));
	};
};

export function* onCheckUserSession() {
	yield takeLatest(UserActionConstants.CHECK_USER_SESSION, isUserAuthenticated);
};

export function* logOut() {
	try {
		yield authentication.signOut();
		yield put(logOutSuccess());
	} catch (error) {
		yield put(logOutFailure(error));
	};
};

export function* onLogOut() {
	yield takeLatest(UserActionConstants.LOG_OUT_PENDING, logOut);
};

export function* register({ payLoad: { eMail, passWord, displayName } }) {
	try {
		const { user } = yield authentication.createUserWithEmailAndPassword(eMail, passWord);

		yield put(registerSuccess({ user, additionalData: { displayName } }));
	} catch (error) {
		yield put(registerFailure(error));
	};
};

export function* onRegister() {
	yield takeLatest(UserActionConstants.REGISTER_PENDING, register);
};

export function* logInAfterRegistration({ payLoad: { user, additionalData } }) {
	yield getSnapShotFromUserAuthentication(user, additionalData);
};

export function* onRegisterSuccess() {
	yield takeLatest(UserActionConstants.REGISTER_SUCCESS, logInAfterRegistration);
};

function* userSagas() {
	yield all([
		call(onEMailLogIn),
		call(onGoogleLogIn),
		call(onCheckUserSession),
		call(onLogOut),
		call(onRegister),
		call(onRegisterSuccess)
	]);
};

export default userSagas;