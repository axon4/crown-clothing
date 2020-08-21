import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: "AIzaSyA3mVrEuw1K5UE0kXOBCXUR7ya5F7wmvDY",
	authDomain: "ecommerce-store-a2054.firebaseapp.com",
	databaseURL: "https://ecommerce-store-a2054.firebaseio.com",
	projectId: "ecommerce-store-a2054",
	storageBucket: "ecommerce-store-a2054.appspot.com",
	messagingSenderId: "536225786272",
	appId: "1:536225786272:web:4c34fcb09ed8894a931cc5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {return};

	const userReference = firestore.collection('users').doc(`${userAuth.uid}`);
	const snapshot = await userReference.get();

	if (!snapshot.exists) {
		const joined = new Date();
		const { displayName, email } = userAuth;

		try {
			await userReference.set({
				joined,
				displayName,
				email,
				...additionalData
			});
		} catch (error) {
			console.log('Error Creating User', error);
		};
	};

	return userReference;
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const logInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;