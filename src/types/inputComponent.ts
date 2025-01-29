export interface InputComponentProps {
	placeholder: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	error: string;
	'data-testid': string;
}
