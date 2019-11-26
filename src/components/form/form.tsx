import React from 'react';
import './form.scss';

type Props = {
	value: string,
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
	placeholder: string,
	onClick: () => void,
	btnValue: string
}

const Form: React.FC<Props> = ({value, onChange, placeholder, onClick, btnValue}) => {
	const go = (event: React.KeyboardEvent<HTMLInputElement>) => {
		event.key === 'Enter' && onClick();
	}
	return (
		<div className="form">
			<input className='form__input' value={value} onChange={onChange} type="text" placeholder={placeholder} onKeyUp={go}/>
			<button className='form__submit' onClick={onClick} disabled={value ? false : true}> {btnValue} </button>
		</div>
	)
}

export default Form;