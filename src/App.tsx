import React, { Fragment, lazy, Suspense } from 'react';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import { connect } from 'react-redux';
import { RootState } from './redux/rootReducer';
import { Dispatch } from 'redux';
import Header from './components/header/Header';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
// import ShopPage from './pages/shop/ShopPage';
import ContactPage from './pages/contact/ContactPage';
// import AuthPage from './pages/auth/AuthPage';
// import CheckoutPage from './pages/checkout/CheckoutPage';
import Spinner from './components/spinner/Spinner';
import firebase from './firebase/firebaseUtils';
import { selectUser } from './redux/user/userSelectors';
import { createStructuredSelector } from 'reselect';
import { User } from './redux/user/userSelectors';
import { checkUserSession } from './redux/user/userActions';
// Pushing Data to Firestore
// import { addCollectionAndDocuments } from './firebase/firebaseUtils';
// import { selectCollectionsForPreview } from './redux/shop/shopSelectors';
import './App.css';

const ShopPage = lazy(() => import('./pages/shop/ShopPage'));
const AuthPage = lazy(() => import('./pages/auth/AuthPage'));
const CheckoutPage = lazy(() => import('./pages/checkout/CheckoutPage'));

class App extends React.Component<any> {
	unsubscribeFromAuth!:firebase.Unsubscribe;

	componentDidMount() {
		const { checkUserSession } = this.props;

		checkUserSession();

		// // Push Shop Data to Firestore
		
		// const { collectionsArray } = this.props;

		// type FirestorePush = {
		// 	title:string,
		// 	items:Array<object>
		// };

		// addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }:FirestorePush) => ({ title, items })));
	};

	// componentWillUnmount() {
	// 	this.unsubscribeFromAuth();
	// };

	render () {
		return (
			<Fragment>
				<Header />
				<Switch>
					<ErrorBoundary>
						<Route exact path='/' component={HomePage} />
						{/* GitHub Pages Redirect */}
						<Route exact path='/ecommerce-store' render={() => <Redirect to='/' />} />
						<Route path='/contact' component={ContactPage} />
						<Suspense fallback={<Spinner />}>
							<Route path='/shop' component={ShopPage} />
							<Route exact path='/login' render={() => {
								return this.props.user ? <Redirect to='/' /> : <AuthPage />
							}} />
							<Route exact path='/checkout' component={CheckoutPage} />
						</Suspense>
					</ErrorBoundary>
				</Switch>
			</Fragment>
		);
	};
};

const mapStateToProps = createStructuredSelector<RootState, User>({ // Change 'User' type to 'any' if pushing shop data to Firestore
	user: selectUser
	// Prop for pushing shop data to Firestore
	// collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch:Dispatch) => ({
	checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);