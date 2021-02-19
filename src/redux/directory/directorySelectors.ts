import { createSelector } from 'reselect';
import { RootState } from '../rootReducer';

const selectDirectory = (state: RootState) => state.directory;

export const selectDirectorySections = createSelector([selectDirectory], directory => directory.sections);

export type Section = ReturnType<typeof selectDirectorySections>;