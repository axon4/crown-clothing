import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../formInput/FormInput';
import CustomButton from '../customButton/CustomButton';
import './Register.scss';
import { register } from '../../redux/user/userActions';
import { Dispatch } from 'redux';

class Register extends React.Component<any, any> {
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

		const { register } = this.props;
		const { displayName, email, password, confirmPassword } = this.state;

		if (password !== confirmPassword) {
			alert('Passwords Don\'t Match!');

			return;
		};

		register({ displayName, email, password });
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

const mapDispatchToProps = (dispatch:Dispatch) => ({
	register: (userCredentials:any) => dispatch(register(userCredentials))
});

export default connect(null, mapDispatchToProps)(Register);