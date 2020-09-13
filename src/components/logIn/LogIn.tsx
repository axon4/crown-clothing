import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import FormInput from '../../components/formInput/FormInput';
import CustomButton from '../../components/customButton/CustomButton';
import { emailLogIn, googleLogIn } from '../../redux/user/userActions';
import './LogIn.scss';

class LogIn extends React.Component<any, any> {
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
		const { emailLogIn } = this.props;

		emailLogIn(email, password);
	};

	render() {
		const { googleLogIn } = this.props;

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
						<CustomButton type='button' onClick={googleLogIn} isGoogleLogIn>Log In with Google</CustomButton>
					</div>
				</form>
			</div>
		);
	};
};

const mapDispatchToProps = (dispatch:Dispatch) => ({
	emailLogIn: (email:string, password:string) => dispatch(emailLogIn({email, password})),
	googleLogIn: () => dispatch(googleLogIn())
});

export default connect(null, mapDispatchToProps)(LogIn);