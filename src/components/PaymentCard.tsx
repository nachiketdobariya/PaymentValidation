import { PaymentCardProps } from '@/types/paymentCard';

const PaymentCard: React.FC<PaymentCardProps> = ({
	cardNumber,
	cardName,
	cardExpiryDate,
	cardCVV,
}) => {
	return (
		<div className="flex flex-col justify-center items-center gap-12">
			<div className="card py-4 bg-orange-500">
				<div data-testid="debit-card">
					<p className="font-bold pl-4">Bank Name</p>
					<p className="text-center font-semibold my-10 text-lg">
						{cardNumber}
					</p>
					<div className="debit-card-stripe"></div>
					<div className="flex pt-4 px-4 justify-between">
						<span className="debit-card-holder-name">{cardName}</span>
						<span className="debit-card-date">{cardExpiryDate}</span>
						<span className="debit-card-cvv">{cardCVV}</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PaymentCard;
