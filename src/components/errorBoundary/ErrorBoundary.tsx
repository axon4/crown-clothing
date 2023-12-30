import React from 'react';
import { ErrorImageContainer, ErrorImageOverLay, ErrorImageText } from './ErrorBoundaryStyles';

export const ErrorMessage = () => {
	return (
		<ErrorImageOverLay>
			<ErrorImageContainer />
			<ErrorImageText>404: Not Found</ErrorImageText>
			<ErrorImageText>
				<a
					href='/'
					// eslint-disable-next-line
					target='_blank'
				>
					<span style={{fontFamily: 'monospace'}}>&gt;&nbsp;Crown Clothing</span>
				</a>
			</ErrorImageText>
		</ErrorImageOverLay>
	);
};

class ErrorBoundary extends React.PureComponent<any, {errorExists: boolean}> {
	constructor() {
		super({});

		this.state = {
			errorExists: false
		};
	};

	static getDerivedStateFromError(error: Error) {
		console.error('error (static-GDSFE):', error);

		return {errorExists: true};
	};

	componentDidCatch(error: Error, information: any) {
		console.error('error (CDC):', error);
		console.error('information:', information);
	};

	render() {
		return this.state.errorExists ? <ErrorMessage /> : this.props.children;
	};
};

export default ErrorBoundary;