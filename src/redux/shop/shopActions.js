import ShopActionConsts from './shopActionConsts';

export const updateCollections = collectionsMap => ({
	type: ShopActionConsts.UPDATE_COLLECTIONS,
	payload: collectionsMap
});