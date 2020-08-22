import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Header from './components/header/Header';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import AuthPage from './pages/auth/AuthPage';
import firebase, { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { setUser } from './redux/user/userActions';
import './App.css';

class App extends React.Component<any> {
	unsubscribeFromAuth!:firebase.Unsubscribe;

	componentDidMount() {
		const { setUser } = this.props;

		this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
			if (userAuth) {
				const userReference = await createUserProfileDocument(userAuth);

				userReference?.onSnapshot(snapshot => {
					setUser({
						id: snapshot.id,
						...snapshot.data()
					});
				});
			} else {
				setUser(null);
			};
		});
	};

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	};

	render () {
		return (
			<Fragment>
				<Header />
				<Switch>
					<Route exact path='/' component={HomePage} />
					<Route path='/shop' component={ShopPage} />
					<Route path='/login' component={AuthPage} />
				</Switch>
			</Fragment>
		);
	};
};

const mapDispatchToProps = (dispatch:Dispatch) => {
	return {
		setUser: (user:any) => dispatch(setUser(user))
	};
};

export default connect(null, mapDispatchToProps)(App);