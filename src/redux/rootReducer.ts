import { combineReducers } from 'redux';

import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;