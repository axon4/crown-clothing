import React, { Fragment } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import AuthenticationPage from './pages/authentication/AuthenticationPage';

function App() {
	return (
		<Fragment>
			<Header />
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/shop' component={ShopPage} />
				<Route path='/login' component={AuthenticationPage} />
			</Switch>
		</Fragment>
	);
};

export default App;