// this optional code is used to register a service-worker; 'register()' is not called by deFault. This lets the application load faster on subsequent visits in production, and gives it offLine capabilities. HowEver, it also means that developers (and users) will only see deployed upDates on subsequent visits to a page, after all the existing tabs open on the page have been closed, since previously-cached--reSources are upDated in the backGround. To learn more about the benefits of this model and instructions on how to opt-in, read: https://bit.ly/CRA-PWA

const isLocalHost = Boolean(
	window.location.hostname === 'localhost' ||
	// [::1] is the IPv6--localHost-address
	window.location.hostname === '[::1]' ||
	// 127.0.0.0/8 are considered localHost for IPv4
	window.location.hostname.match(
		/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
	)
);

type Configuration = {
	onSuccess?: (registration: ServiceWorkerRegistration) => void;
	onUpDate?: (registration: ServiceWorkerRegistration) => void;
};

export function register(configuration?: Configuration) {
	if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
		// URL-constructor is availAble in all browsers that support SW
		const publicURL = new URL(process.env.PUBLIC_URL, window.location.href);

		// service-worker won't work if 'PUBLIC_URL' is on a different origin from what our page is served on. This might happen if a CDN is used to serve assets; see: https://github.com/facebook/create-react-app/issues/2374
		if (publicURL.origin !== window.location.origin) return;

		window.addEventListener('load', () => {
			const SWURL = `${process.env.PUBLIC_URL}/service-worker.js`;

			if (isLocalHost) {
				// this is running on localHost; let's check if a service-worker still exists or not
				checkValidServiceWorker(SWURL, configuration);

				// add some additional logging to localHost, pointing developers to the service-worker/PWA-documentation
				navigator.serviceWorker.ready.then(() => {
					console.log('this web-application is being served cache-first by a service-worker. To learn more, visit: https://bit.ly/CRA-PWA');
				});
			} else {
				// is not localHost; just register service-worker
				registerValidSW(SWURL, configuration);
			};
		});
	};
};

function registerValidSW(SWURL: string, configuration?: Configuration) {
	navigator.serviceWorker
		.register(SWURL)
		.then(registration => {
			registration.onupdatefound = () => {
				const installingWorker = registration.installing;

				if (installingWorker == null) return;

				installingWorker.onstatechange = () => {
					if (installingWorker.state === 'installed') {
						if (navigator.serviceWorker.controller) {
							// at this point, the upDated, pre-cached conTent has been fetched, but the previous service-worker will still serve the older conTent until all client-tabs are closed
							console.log('new conTent is availAble and will be used when all tabs for this page are closed. See: https://bit.ly/CRA-PWA');

							// execute callBack
							if (configuration && configuration.onUpDate) {
								configuration.onUpDate(registration);
							};
						} else {
							// at this point, everyThing has been pre-cached. It's the perfect time to disPlay a 'conTent is cached for offLine use'-message
							console.log('conTent is cached for offLine use');

							// execute callBack
							if (configuration && configuration.onSuccess) {
								configuration.onSuccess(registration);
							};
						};
					};
				};
			};
		})
		.catch(error => {
			console.error('error during service-worker--registration:', error);
		});
};

function checkValidServiceWorker(SWURL: string, configuration?: Configuration) {
	// check if the service-worker can be found. If it can't, reLoad the page
	fetch(SWURL, {
		headers: {'Service-Worker': 'script'}
	})
		.then(response => {
			// enSure service-worker exists and that we really are getting a JS file
			const contentType = response.headers.get('Content-Type');

			if (response.status === 404 || (contentType != null && contentType.indexOf('javascript') === -1)) {
				// no service-worker found; probably a different application - reLoad the page
				navigator.serviceWorker.ready.then(registration => {
					registration.unregister().then(() => {
						window.location.reload();
					});
				});
			} else {
				// service-worker found - proceed as normal
				registerValidSW(SWURL, configuration);
			};
		})
		.catch(() => {
			console.log('no interNet-connection found; application is running in offLine mode');
		});
};

export function unRegister() {
	if ('serviceWorker' in navigator) {
		navigator.serviceWorker.ready
			.then(registration => {
				registration.unregister();
			})
			.catch(error => {
				console.error(error.message);
			});
	};
};