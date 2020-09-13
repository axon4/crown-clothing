import { takeLatest, all, call, put } from 'redux-saga/effects';
import UserActionConsts from '../user/userActionConsts';
import { clearCart } from './cartActions';

export function* clearCartOnLogOut() {
	yield put(clearCart());
};

export function* onLogOutSuccess() {
	yield takeLatest(UserActionConsts.LOG_OUT_SUCCESS, clearCartOnLogOut);
};

function* cartSagas() {
	yield all([call(onLogOutSuccess)]);
};

export default cartSagas;