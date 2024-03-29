import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/userReducer';
import cartReducer from './cart/cartReducer';
import directoryReducer from './directory/directoryReducer';
import shopReducer from './shop/shopReducer';

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer,
	directory: directoryReducer,
	shop: shopReducer
});

export type RootState = ReturnType<typeof rootReducer>;

const persistenceConfiguration = {
	key: 'root',
	storage,
	whitelist: ['cart']
};

export default persistReducer(persistenceConfiguration, rootReducer);