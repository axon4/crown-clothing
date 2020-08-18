import React, { ChangeEvent } from 'react';
import './FormInput.scss';

type FormInput = {
	handleChange:((event: ChangeEvent<HTMLInputElement>) => void);
	label:string;
	name:string;
	type:string;
	value:string;
	required:boolean;
};

const FormInput = ({ handleChange, label, ...otherProps }:FormInput) => {
	return (
		<div className='group'>
			<input className='form-input' onChange={handleChange} {...otherProps} required />
			{
				label
					? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label>
					: null
			}
		</div>
	);
};

export default FormInput;