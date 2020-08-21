import React, { Fragment } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import AuthPage from './pages/auth/AuthPage';
import firebase, { auth, createUserProfileDocument } from './firebase/firebaseUtils';

class App extends React.Component<object, any> {
	constructor() {
		super({});

		this.state = {
			user: null
		};
	};

	unsubscribeFromAuth!:firebase.Unsubscribe;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userReference = await createUserProfileDocument(userAuth);

				userReference?.onSnapshot(snapshot => {
					this.setState({
						user: {
							id: snapshot.id,
							...snapshot.data()
						}
					}, () => console.log(this.state));
				});
			} else {
				this.setState({user: null});
			};
		});
	};

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	};

	render () {
		return (
			<Fragment>
				<Header user={this.state.user} />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/login' component={AuthPage} />
				</Switch>
			</Fragment>
		);
	};
};

export default App;