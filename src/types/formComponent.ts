export interface PaymentFormProps {
	formData: {
		cardNumber: string;
		cardName: string;
		expiryMonth: string;
		expiryYear: string;
		cvv: string;
	};
	errors: {
		cardNumber: string;
		cardName: string;
		expiryMonth: string;
		expiryYear: string;
		cvv: string;
	};
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
	isSubmitEnabled: boolean;
}
