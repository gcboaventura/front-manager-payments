export interface FormValues {
	name: string
	card_number: string
	validate: string
	cvv: string
}

export interface Props {
	initialValues?: FormValues
	type: 'register' | 'edit'
	onSuccess(data?: any): void
}
