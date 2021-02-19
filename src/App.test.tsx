import React from 'react';
import { shallow } from 'enzyme';
import Application from './App';

it('render', () => {
	expect(shallow(<Application />)).toMatchSnapshot();
});