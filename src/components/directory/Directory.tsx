import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import MenuItem, { IMenuItem } from '../menuItem/MenuItem';
import { RootState } from '../../redux/rootReducer';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';
import './Directory.scss';

interface IMenuItems extends IMenuItem {
	ID: number;
};

const Directory = ({ sections }: any) => {
	return (
		<div className='directory-menu'>
			{sections.map(({ ID, ...otherSectionProps }: IMenuItems) => (
				<MenuItem key={ID} {...otherSectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector<RootState, any>({
	sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);