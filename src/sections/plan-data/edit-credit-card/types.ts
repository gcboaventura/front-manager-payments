export interface FormValues {
	holder_name: string
	card_number: string
	validate: string
	cvv: string
}

export interface Props {
	success(): void
}
