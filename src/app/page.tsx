'use client';

import PaymentCard from '@/components/PaymentCard';
import PaymentForm from '@/components/PaymentForm';

import { usePayment } from '@/hooks/usePayment';

export default function Home() {
	const {
		formData,
		cardNumber,
		cardName,
		cardExpiryDate,
		cardCVV,
		errors,
		isSubmitEnabled,
		handleChange,
		handleSubmit,
	} = usePayment();

	return (
		<div className="grid items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8">
				<h1 className="self-center">Payment Card Validation</h1>

				<PaymentCard
					cardNumber={cardNumber}
					cardName={cardName}
					cardExpiryDate={cardExpiryDate}
					cardCVV={cardCVV}
				/>

				<PaymentForm
					formData={formData}
					errors={errors}
					handleChange={handleChange}
					handleSubmit={handleSubmit}
					isSubmitEnabled={isSubmitEnabled}
				/>
			</main>
		</div>
	);
}
