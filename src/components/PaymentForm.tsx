import React from 'react';
import InputComponent from './InputComponent';
import { PaymentFormProps } from '@/types/formComponent';

const PaymentForm: React.FC<PaymentFormProps> = ({
	formData,
	errors,
	handleChange,
	handleSubmit,
	isSubmitEnabled,
}) => {
	return (
		<form onSubmit={handleSubmit} className="layout-column gap-2">
			<InputComponent
				placeholder="Card Number"
				name="cardNumber"
				value={formData.cardNumber}
				onChange={handleChange}
				error={errors.cardNumber}
				data-testid="cardNumberInput"
			/>
			<InputComponent
				placeholder="Name On Card"
				name="cardName"
				value={formData.cardName}
				onChange={handleChange}
				error={errors.cardName}
				data-testid="nameInput"
			/>
			<div className="flex justify-content-around gap-2">
				<InputComponent
					placeholder="Expiry Month"
					name="expiryMonth"
					value={formData.expiryMonth}
					onChange={handleChange}
					error={errors.expiryMonth}
					data-testid="monthInput"
				/>
				<InputComponent
					placeholder="Expiry Year"
					name="expiryYear"
					value={formData.expiryYear}
					onChange={handleChange}
					error={errors.expiryYear}
					data-testid="yearInput"
				/>
				<InputComponent
					placeholder="CVV"
					name="cvv"
					value={formData.cvv}
					onChange={handleChange}
					error={errors.cvv}
					data-testid="cvvInput"
				/>
			</div>
			<button
				type="submit"
				className="mx-0 font-semibold"
				data-testid="submitButton"
				disabled={!isSubmitEnabled}
			>
				Submit
			</button>
		</form>
	);
};

export default PaymentForm;
