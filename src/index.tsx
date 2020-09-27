import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store, persistor} from './redux/store';
import CartProvider from './providers/cart/CartProvider';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
	<Provider store={store}>
		<CartProvider>
			<BrowserRouter>
				<PersistGate persistor={persistor}>
					<App />
				</PersistGate>
			</BrowserRouter>
		</CartProvider>
	</Provider>
, document.getElementById('root'));

serviceWorker.register();