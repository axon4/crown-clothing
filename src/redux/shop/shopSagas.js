import { takeLatest, all, call, put } from 'redux-saga/effects';
import ShopActionConstants from './shopActionConstants';
import { fireStore, convertCollectionsSnapShotToMap } from '../../fireBase/fireBase';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shopActions';

export function* fetchCollectionsASynchronously() {
	try {
		const collectionReference = fireStore.collection('collections');
		const snapShot = yield collectionReference.get();
		const collectionsMap = yield call(convertCollectionsSnapShotToMap, snapShot);

		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error));
	};
};

export function* fetchCollections() {
	yield takeLatest(ShopActionConstants.FETCH_COLLECTIONS_PENDING, fetchCollectionsASynchronously);
};

function* shopSagas() {
	yield all([call(fetchCollections)]);
};

export default shopSagas;