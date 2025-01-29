import { InputComponentProps } from '@/types/inputComponent';
import React from 'react';

const InputComponent: React.FC<InputComponentProps> = ({
	placeholder,
	name,
	value,
	onChange,
	error,
	'data-testid': dataTestId,
}) => {
	return (
		<div className="layout-column">
			<input
				placeholder={placeholder}
				name={name}
				value={value}
				onChange={onChange}
				data-testid={dataTestId}
			/>
			<p className="text-sm text-red-500" data-testid={`${dataTestId}Error`}>
				{error}
			</p>
		</div>
	);
};

export default InputComponent;
