import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import CartProvider from './providers/cart/CartProvider';
import Application from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<CartProvider>
			<BrowserRouter basename='/crown-clothing'>
				<PersistGate persistor={persistor}>
					<Application />
				</PersistGate>
			</BrowserRouter>
		</CartProvider>
	</Provider>
, document.getElementById('root'));

serviceWorker.register();