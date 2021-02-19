import memoize from 'lodash.memoize';
import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

const selectShop = (state: RootState) => state.shop;

export const selectCollections = createSelector([selectShop], shop => shop.collections as any);

export type Collection = ReturnType<typeof selectCollections>;

export const selectCollectionsForPreView = createSelector(
	[selectCollections],
	collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = memoize((collectionURLParameter: any) => createSelector(
	[selectCollections],
	collections => collections ? collections[collectionURLParameter] : null
));

export const selectAreCollectionsFetching = createSelector([selectShop], shop => shop.isFetching);

export const selectHaveCollectionsFetched = createSelector([selectShop], shop => !!shop.collections);