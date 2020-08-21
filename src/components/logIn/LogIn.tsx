import React, { ChangeEvent } from 'react';
import FormInput from '../../components/formInput/FormInput';
import CustomButton from '../../components/customButton/CustomButton';
import { logInWithGoogle } from '../../firebase/firebaseUtils';
import './LogIn.scss';

class LogIn extends React.Component<object, any> {
	constructor(props:object) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};
	};

	handleChange = (event:ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		this.setState({[name]: value});
	};

	handleSubmit = (event:React.FormEvent) => {
		event.preventDefault();
		this.setState({email: '', password: ''});
	};

	render () {
		return (
			<div className='log-in'>
				<h2>Log In</h2>
				<span>Log in with email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name='email'
						label='email'
						type='email'
						value={this.state.email}
						handleChange={this.handleChange}
						required />
					<FormInput
						name='password'
						label='password'
						type='password'
						value={this.state.password}
						handleChange={this.handleChange}
						required />
					<div className='buttons'>
						<CustomButton type='submit'>Log In</CustomButton>
						<CustomButton onClick={logInWithGoogle} isGoogleLogIn>Log In with Google</CustomButton>
					</div>
				</form>
			</div>
		);
	};
};

export default LogIn;