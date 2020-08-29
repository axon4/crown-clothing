import { RootState } from '../rootReducer';
import { createSelector } from 'reselect';

const selectDirectory = (state:RootState) => state.directory;

export const selectDirectorySections = createSelector(
	[selectDirectory],
	directory => directory.sections
);

export type Section = ReturnType<typeof selectDirectorySections>;