import React from 'react';
import FormInput from '../../components/formInput/FormInput';
import CustomButton from '../../components/customButton/CustomButton';
import { auth, logInWithGoogle } from '../../firebase/firebaseUtils';
import './LogIn.scss';

class LogIn extends React.Component<object, any> {
	constructor() {
		super({});

		this.state = {
			email: '',
			password: ''
		};
	};

	handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		this.setState({[name]: value});
	};

	handleSubmit = async (event:React.FormEvent) => {
		event.preventDefault();
		const { email, password } = this.state;

		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({
				email: '',
				password: ''
			});
		} catch (error) {
			console.log('Error Logging In:', error);
		};
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
						required
					/>
					<FormInput
						name='password'
						label='password'
						type='password'
						value={this.state.password}
						handleChange={this.handleChange}
						required
					/>
					<div className='buttons'>
						<CustomButton type='submit'>Log In</CustomButton>
						<CustomButton type='button' onClick={logInWithGoogle} isGoogleLogIn>Log In with Google</CustomButton>
					</div>
				</form>
			</div>
		);
	};
};

export default LogIn;