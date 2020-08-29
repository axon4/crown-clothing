import React from 'react';
import { RootState } from '../../redux/rootReducer';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux/directory/directorySelectors';
import MenuItem, { IMenuItem } from '../menuItem/MenuItem';
import './Directory.scss';

interface IMenuItems extends IMenuItem {
	id:number
};

const Directory = ({ sections }:any) => {
	return (
		<div className='directory-menu'>
			{sections.map(({ id, ...otherSectionProps }:IMenuItems) => (
				<MenuItem key={id} {...otherSectionProps} />
			))}
		</div>
	);
};

const mapStateToProps = createStructuredSelector<RootState, any>({
	sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);