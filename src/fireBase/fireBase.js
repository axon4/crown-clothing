import fireBase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const configuration = {
	apiKey: 'AIzaSyA3mVrEuw1K5UE0kXOBCXUR7ya5F7wmvDY',
	appId: '1:536225786272:web:4c34fcb09ed8894a931cc5',
	projectId: 'ecommerce-store-a2054',
	authDomain: 'ecommerce-store-a2054.firebaseapp.com',
	databaseURL: 'https://ecommerce-store-a2054.firebaseio.com',
	storageBucket: 'ecommerce-store-a2054.appspot.com',
	messagingSenderId: '536225786272'
};

fireBase.initializeApp(configuration);

export const authentication = fireBase.auth();

export const fireStore = fireBase.firestore();

export const createUserProfileDocument = async (user, additionalData) => {
	if (!user) return;

	const userReference = fireStore.collection('users').doc(`${user.uid}`);
	const snapShot = await userReference.get();

	if (!snapShot.exists) {
		const joined = new Date();
		const { email } = user;

		try {
			await userReference.set({
				joined,
				// displayName,
				eMail: email,
				...additionalData
			});
		} catch (error) {
			console.log('Error Creating User:', error);
		};
	};

	return userReference;
};

export const addCollectionAndDocuments = async (collectionID, objectsToAdd) => {
	const collectionReference = fireStore.collection(collectionID);
	const batch = fireStore.batch();

	objectsToAdd.forEach(object => {
		const newDocumentReference = collectionReference.doc();

		batch.set(newDocumentReference, object);
	});

	return await batch.commit();
};

export const convertCollectionsSnapShotToMap = collections => {
	const transformedCollection = collections.docs.map(document => {
		const { title, items } = document.data();

		return {
			ID: document.id,
			routeName: encodeURI(title.toLowerCase()),
			title,
			items
		};
	});

	return transformedCollection.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;

		return accumulator;
	}, {});
};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unSubscribe = authentication.onAuthStateChanged(user => {
			unSubscribe();
			resolve(user);
		}, reject);
	});
};

export const GoogleProvider = new fireBase.auth.GoogleAuthProvider();

GoogleProvider.setCustomParameters({prompt: 'select_account'});

export const logInWithGoogle = () => authentication.signInWithPopup(GoogleProvider);

export default fireBase;