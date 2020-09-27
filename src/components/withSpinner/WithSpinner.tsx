import React from 'react';
import Spinner from '../spinner/Spinner';

const WithSpinner = (WrappedComponent:any) => ({ isLoading, ...props }:{ isLoading:boolean }) => {
	return isLoading ? <Spinner /> : <WrappedComponent {...props} />;
};

export default WithSpinner;