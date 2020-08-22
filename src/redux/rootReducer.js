import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import cartDropdownReducer from './cartDropdown/cartDropdownReducer';

export default combineReducers({
	user: userReducer,
	cartDropdown: cartDropdownReducer
});