import ShopActionConstants from './shopActionConstants';
// import { fireStore, convertCollectionsSnapShotToMap } from '../../fireBase/fireBase';

export const fetchCollections = () => ({type: ShopActionConstants.FETCH_COLLECTIONS_PENDING});

export const fetchCollectionsSuccess = collectionsMap => ({
	type: ShopActionConstants.FETCH_COLLECTIONS_SUCCESS,
	payLoad: collectionsMap
});

export const fetchCollectionsFailure = error => ({
	type: ShopActionConstants.FETCH_COLLECTIONS_FAILURE,
	payLoad: error
});

// // Redux Thunk
// export const fetchCollectionsASynchronously = () => {
// 	return disPatch => {
// 		const collectionReference = fireStore.collection('collections');

// 		disPatch(fetchCollections());

// 		collectionReference.get().then(snapShot => {
// 			const collectionsMap = convertCollectionsSnapshotToMap(snapShot);

// 			disPatch(fetchCollectionsSuccess(collectionsMap))
// 		})
// 			.catch(error => disPatch(fetchCollectionsFailure(error)));
// 	};
// };