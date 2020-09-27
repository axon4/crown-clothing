import React from 'react';
import { ErrorMessage } from '../../components/errorBoundary/ErrorBoundary';

const ContactPage = () => {
	// throw Error;
	
	return (
		<div style={{display: 'flex', flexDirection: 'column'}}>
			<p style={{marginBottom: '1rem', font: '1.3rem monospace', color: 'red', textAlign: 'center', textTransform: 'uppercase'}}>The error below is what appears if the page can't load for whatever reason (eg lost connection) and the error boundary is triggered.</p>
			<ErrorMessage />
		</div>
	);
};

export default ContactPage;