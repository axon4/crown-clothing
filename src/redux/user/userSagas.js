import { takeLatest, all, call, put, } from 'redux-saga/effects';
import UserActionConsts from './userActionConsts';
import { auth, googleProvider, createUserProfileDocument, getCurrentUser } from '../../firebase/firebaseUtils';
import {
	logInSuccess,
	logInFailure,
	logOutSuccess,
	logOutFailure,
	registerSuccess,
	registerFailure
} from './userActions';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
	try {
		const userReference = yield call(createUserProfileDocument, userAuth, additionalData);
		const snapshot = yield userReference.get();
	
		yield put(logInSuccess({id: snapshot.id, ...snapshot.data()}));
	} catch (error) {
		yield put(logInFailure(error));
	};
};

export function* logInWithEmail({ payload: { email, password } }) {
	try {
		const { user } = yield auth.signInWithEmailAndPassword(email, password);
		
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(logInFailure(error));
	};
};

export function* onEmailLogIn() {
	yield takeLatest(UserActionConsts.EMAIL_LOG_IN_PENDING, logInWithEmail);
};

export function* logInWithGoogle() {
	try {
		const { user } = yield auth.signInWithPopup(googleProvider);
		
		yield getSnapshotFromUserAuth(user);
	} catch (error) {
		yield put(logInFailure(error));
	};
};

export function* onGoogleLogIn() {
	yield takeLatest(UserActionConsts.GOOGLE_LOG_IN_PENDING, logInWithGoogle);
};

export function* isUserAuthenticated() {
	try {
		const userAuth = yield getCurrentUser();

		if (!userAuth) {return};

		yield getSnapshotFromUserAuth(userAuth);
	} catch (error) {
		yield put(logInFailure(error));
	};
};

export function* onCheckUserSession() {
	yield takeLatest(UserActionConsts.CHECK_USER_SESSION, isUserAuthenticated);
};

export function* logOut() {
	try {
		yield auth.signOut();
		yield put(logOutSuccess());
	} catch (error) {
		yield put(logOutFailure(error));
	};
};

export function* onLogOut() {
	yield takeLatest(UserActionConsts.LOG_OUT_PENDING, logOut);
};

export function* register({ payload: { email, password, displayName } }) {
	try {
		const { user } = yield auth.createUserWithEmailAndPassword(email, password);

		yield put(registerSuccess({ user, additionalData: { displayName } }));
	} catch (error) {
		yield put(registerFailure(error));
	};
};

export function* onRegister() {
	yield takeLatest(UserActionConsts.REGISTER_PENDING, register);
};

export function* logInAfterRegistration({ payload: { user, additionalData } }) {
	yield getSnapshotFromUserAuth(user, additionalData);
};

export function* onRegisterSuccess() {
	yield takeLatest(UserActionConsts.REGISTER_SUCCESS, logInAfterRegistration);
};

function* userSagas() {
	yield all([
		call(onEmailLogIn),
		call(onGoogleLogIn),
		call(onCheckUserSession),
		call(onLogOut),
		call(onRegister),
		call(onRegisterSuccess)
	]);
};

export default userSagas;