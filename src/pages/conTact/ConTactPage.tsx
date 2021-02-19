import React from 'react';
import { ErrorMessage } from '../../components/errorBoundary/ErrorBoundary';

const ConTactPage = () => {
	// throw Error;

	return (
		<div style={{display: 'flex', flexDirection: 'column'}}>
			<p style={{marginBottom: '1rem', font: '1.3rem monospace', color: 'red', textAlign: 'center', textTransform: 'uppercase'}}>Error Below is what Appears if Page Can't Load for WhatEver Reason (eg Lost Connection) and Error-Boundary is Triggered</p>
			<ErrorMessage />
		</div>
	);
};

export default ConTactPage;