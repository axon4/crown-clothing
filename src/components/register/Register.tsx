import React from 'react';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';
import { auth, createUserProfileDocument } from '../../firebase/firebaseUtils';
import './Register.scss';

class Register extends React.Component<object, any> {
	constructor() {
		super({});

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	};

	handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		this.setState({[name]: value});
	};

	handleSubmit = async (event:React.FormEvent) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert('Passwords Don\'t Match!');

			return;
		};

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password);

			await createUserProfileDocument(user, {displayName});
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.log('Error Registering User:', error);
		};
	};

	render() {
		const { displayName, email, password, confirmPassword } = this.state;

		return (
			<div className='register'>
				<h2 className='title'>Register</h2>
				<span>Register with Email and Password</span>
				<form className='registration-form' onSubmit={this.handleSubmit}>
					<FormInput
						name='displayName'
						label='Name'
						type='text'
						value={displayName}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name='email'
						label='Email'
						type='email'
						value={email}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name='password'
						label='Password'
						type='password'
						value={password}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						name='confirmPassword'
						label='Confirm Password'
						type='password'
						value={confirmPassword}
						handleChange={this.handleChange}
						required
					/>
					<CustomButton type='submit'>REGISTER</CustomButton>
				</form>
			</div>
		);
	};
};

export default Register;