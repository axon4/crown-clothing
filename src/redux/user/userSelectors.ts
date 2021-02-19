import { createSelector } from 'reselect';
import { RootState } from '../../redux/rootReducer';

const selectCurrentUser = (state: RootState) => state.user;

export const selectUser = createSelector([selectCurrentUser], user => user.user);

export type User = ReturnType<typeof selectUser>;