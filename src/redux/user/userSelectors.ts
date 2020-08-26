import { RootState } from '../../redux/rootReducer';
import { createSelector } from 'reselect';

const selectCurrentUser = (state:RootState) => state.user;

export const selectUser = createSelector(
	[selectCurrentUser],
	user => user.user
);

export type User = ReturnType<typeof selectUser>;