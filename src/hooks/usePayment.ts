import { FormData } from '@/types/formData';
import { useEffect, useMemo, useState } from 'react';

export const usePayment = () => {
	const [formData, setFormData] = useState<FormData>({
		cardNumber: '',
		cardName: '',
		expiryMonth: '',
		expiryYear: '',
		cvv: '',
	});

	const [errors, setErrors] = useState<FormData>({
		cardNumber: '',
		cardName: '',
		expiryMonth: '',
		expiryYear: '',
		cvv: '',
	});

	const [isSubmitEnabled, setSubmitEnabled] = useState(false);

	const validateForm = () => {
		const { cardNumber, cardName, expiryMonth, expiryYear, cvv } = formData;
		const newErrors: FormData = {
			cardNumber: '',
			cardName: '',
			expiryMonth: '',
			expiryYear: '',
			cvv: '',
		};

		if (!cardNumber || !/^\d{16}$/.test(cardNumber)) {
			newErrors.cardNumber = 'Invalid Card Number';
		}

		// Card Name Validation
		if (!cardName || !/^[A-Za-z\s]+$/.test(cardName)) {
			newErrors.cardName = 'Invalid Card Name';
		}

		// Expiry Month Validation
		if (!expiryMonth || !/^(0[1-9]|1[0-2])$/.test(expiryMonth)) {
			newErrors.expiryMonth = 'Invalid Month';
		}

		// Expiry Year Validation
		const currentYear = new Date().getFullYear();
		if (
			!expiryYear ||
			!/^\d{4}$/.test(expiryYear) ||
			Number(expiryYear) < currentYear ||
			Number(expiryYear) > currentYear + 3
		) {
			newErrors.expiryYear = 'Invalid Year';
		}

		// CVV Validation
		if (!cvv || !/^\d{3}$/.test(cvv)) {
			newErrors.cvv = 'Invalid CVV';
		}

		setErrors(newErrors);
		setSubmitEnabled(
			Object.keys(newErrors).every((key) => !newErrors[key as keyof FormData])
		);
	};

	useEffect(() => {
		validateForm();
	}, [formData]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (isSubmitEnabled) {
			alert('Form Submitted Successfully!');
		}
	};

	const cardNumber = useMemo(
		() => formData.cardNumber || 'XXXXXXXXXXXXXXXX',
		[formData.cardNumber]
	);

	const cardName = useMemo(
		() => formData.cardName || 'Name',
		[formData.cardName]
	);
	const cardExpiryDate = useMemo(
		() => `${formData.expiryMonth || 'MM'}/${formData.expiryYear || 'YYYY'}`,
		[formData.expiryMonth, formData.expiryYear]
	);
	const cardCVV = useMemo(() => formData.cvv || 'CVV', [formData.cvv]);

	return {
		formData,
		errors,
		cardNumber,
		cardName,
		cardExpiryDate,
		cardCVV,
		isSubmitEnabled,
		handleSubmit,
		handleChange,
	};
};
