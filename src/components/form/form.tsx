import React from 'react';
import './form.scss';

type Props = {
	value: string,
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
	placeholder: string,
	onClick: () => void,
	btnValue: string,
}

const Form: React.FC<Props> = ({value, onChange, placeholder, onClick, btnValue}) => {
	return (
		<div className="form">
			<input className='input' value={value} onChange={onChange} type="text" placeholder={placeholder} />
			<button className='submit' onClick={onClick}> {btnValue} </button>
		</div>
	)
}

export default Form;