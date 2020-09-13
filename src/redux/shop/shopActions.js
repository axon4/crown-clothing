import ShopActionConsts from './shopActionConsts';
// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebaseUtils';

export const fetchCollections = () => ({
	type: ShopActionConsts.FETCH_COLLECTIONS_PENDING
});

export const fetchCollectionsSuccess = collectionsMap => ({
	type: ShopActionConsts.FETCH_COLLECTIONS_SUCCESS,
	payload: collectionsMap
});

export const fetchCollectionsFailure = error => ({
	type: ShopActionConsts.FETCH_COLLECTIONS_FAILURE,
	payload: error
});

// Redux Thunk

// export const fetchCollectionsAsync = () => {
// 	return dispatch => {
// 		const collectionReference = firestore.collection('collections');

// 		dispatch(fetchCollections());

// 		collectionReference.get().then(snapshot => {
// 			const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
// 			dispatch(fetchCollectionsSuccess(collectionsMap))
// 		})
// 			.catch(error => dispatch(fetchCollectionsFailure(error)));
// 	};
// };