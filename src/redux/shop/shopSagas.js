import { takeLatest, all, call, put } from 'redux-saga/effects';
import ShopActionConsts from './shopActionConsts';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebaseUtils';
import { fetchCollectionsSuccess, fetchCollectionsFailure } from './shopActions';

export function* fetchCollectionsAsync() {
	try {
		const collectionReference = firestore.collection('collections');
		const snapshot = yield collectionReference.get();
		const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);

		yield put(fetchCollectionsSuccess(collectionsMap));
	} catch (error) {
		yield put(fetchCollectionsFailure(error));
	};
};

export function* fetchCollections() {
	yield takeLatest(
		ShopActionConsts.FETCH_COLLECTIONS_PENDING,
		fetchCollectionsAsync
	);
};

function* shopSagas() {
	yield all([call(fetchCollections)]);
};

export default shopSagas;