import memoize from 'lodash.memoize';
import { RootState } from '../rootReducer';
import { createSelector } from 'reselect';

const selectShop = (state:RootState) => state.shop;

export const selectCollections = createSelector(
	[selectShop],
	shop => shop.collections as any
);

export type Collection = ReturnType<typeof selectCollections>;

export const selectCollectionsForPreview = createSelector(
	[selectCollections],
	collections => collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = memoize((collectionURLParam:any) => createSelector(
	[selectCollections],
	collections => collections ? collections[collectionURLParam] : null
));

export const selectIsCollectionsFetching = createSelector(
	[selectShop],
	shop => shop.isFetching
);

export const selectIsCollectionsFetched = createSelector(
	[selectShop],
	shop => !!shop.collections
);