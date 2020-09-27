import React from 'react';
import { ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from './ErrorBoundaryStyles';

export const ErrorMessage = () => {
	return (
		<ErrorImageOverlay>
			<ErrorImageContainer />
			<ErrorImageText>404: Sorry, This Page is Broken...</ErrorImageText>
			<ErrorImageText>
				<a
					href='https://axon4.com'
					// eslint-disable-next-line
					target='_blank'
					>
						<span style={{fontFamily: 'monospace'}}>&gt;&nbsp;axon4.com</span>
				</a>
			</ErrorImageText>
		</ErrorImageOverlay>
	);
};

class ErrorBoundary extends React.PureComponent<any, {errorExists:boolean}> {
	constructor() {
		super({});

		this.state = {
			errorExists: false
		};
	};

	static getDerivedStateFromError(error:Error) {
		console.log('Error (static GDSFE):', error);

		return {errorExists: true};
	};

	componentDidCatch(error:Error, info:any) {
		console.log('Error (CDC):', error);
		console.log('Info:', info);
	};

	render() {
		return this.state.errorExists ? <ErrorMessage /> : this.props.children;
	};
};

export default ErrorBoundary;