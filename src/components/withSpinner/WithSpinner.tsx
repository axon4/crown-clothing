import React from 'react';
import { SpinnerContainer, SpinnerOverlay } from './WithSpinnerStyles';

const WithSpinner = (WrappedComponent:any) => ({ isLoading, ...props }:{ isLoading:boolean }) => {
	return isLoading ? (
		<SpinnerOverlay>
			<SpinnerContainer />
		</SpinnerOverlay>
	) : (
		<WrappedComponent {...props} />
	);
};

export default WithSpinner;