import React, { Fragment, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/home/HomePage';
// import AuthenticationPage from './pages/authentication/AuthenticationPage';
// import ShopPage from './pages/shop/ShopPage';
// import CheckOutPage from './pages/checkOut/CheckOutPage';
import ConTactPage from './pages/conTact/ConTactPage';
import ErrorBoundary from './components/errorBoundary/ErrorBoundary';
import Header from './components/header/Header';
import Spinner from './components/spinner/Spinner';
import { RootState } from './redux/rootReducer';
import { selectUser, User } from './redux/user/userSelectors';
import { checkUserSession } from './redux/user/userActions';
import fireBase from './fireBase/fireBase';
// // push data to FireStore
// import { addCollectionAndDocuments } from './fireBase/fireBase';
// import { selectCollectionsForPreView } from './redux/shop/shopSelectors';
import './App.css';

const AuthenticationPage = lazy(() => import('./pages/authentication/AuthenticationPage'));
const ShopPage = lazy(() => import('./pages/shop/ShopPage'));
const CheckOutPage = lazy(() => import('./pages/checkOut/CheckOutPage'));

class Application extends React.Component<any> {
	unSubscribeFromAuthentication!: fireBase.Unsubscribe;

	componentDidMount() {
		const { checkUserSession } = this.props;

		checkUserSession();

		// // Push Shop-Data to FireStore

		// const { collectionsArray } = this.props;

		// type FireStorePush = {
		// 	title: string,
		// 	items: Array<object>
		// };

		// addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }: FireStorePush) => ({ title, items })));
	};

	// componentWillUnmount() {
	// 	this.unSubscribeFromAuthentication();
	// };

	render() {
		return (
			<Fragment>
				<Header />
				<Switch>
					<ErrorBoundary>
						<Route exact path='/' component={HomePage} />
						{/* GitHub-Pages--reDirect */}
						{/* <Route exact path='/eCommerce-store' render={() => <Redirect to='/' />} /> */}
						<Route path='/conTact' component={ConTactPage} />
						<Suspense fallback={<Spinner />}>
							<Route path='/shop' component={ShopPage} />
							<Route exact path='/logIn' render={() => this.props.user ? <Redirect to='/' /> : <AuthenticationPage />} />
							<Route exact path='/checkOut' component={CheckOutPage} />
						</Suspense>
					</ErrorBoundary>
				</Switch>
			</Fragment>
		);
	};
};

const mapStateToProps = createStructuredSelector<RootState, User>({ // change 'User' type to 'any' if pushing shop-data to FireStore
	user: selectUser
	// collectionsArray: selectCollectionsForPreview // property for pushing shop-data to FireStore
});

const mapDisPatchToProps = (disPatch: Dispatch) => ({
	checkUserSession: () => disPatch(checkUserSession())
});

export default connect(mapStateToProps, mapDisPatchToProps)(Application);