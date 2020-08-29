import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { RootState } from './redux/rootReducer';
import { Dispatch } from 'redux';
import Header from './components/header/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import ShopPage from './pages/shop/ShopPage';
import AuthPage from './pages/auth/AuthPage';
import CheckoutPage from './pages/checkout/CheckoutPage';
import firebase, { auth, createUserProfileDocument } from './firebase/firebaseUtils';
import { selectUser } from './redux/user/userSelectors';
import { createStructuredSelector } from 'reselect';
import { User } from './redux/user/userSelectors';
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
					{/* GitHub Pages Redirect */}
					<Route exact path='/ecommerce-store' render={() => <Redirect to='/' />} />
					<Route path='/shop' component={ShopPage} />
					<Route exact path='/login' render={() => {
						return this.props.user ? <Redirect to='/' /> : <AuthPage />
					}} />
					<Route exact path='/checkout' component={CheckoutPage} />
				</Switch>
			</Fragment>
		);
	};
};

const mapStateToProps = createStructuredSelector<RootState, User>({
	user: selectUser
});

const mapDispatchToProps = (dispatch:Dispatch) => {
	return {
		setUser: (user:any) => dispatch(setUser(user))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);