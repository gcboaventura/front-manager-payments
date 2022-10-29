export interface FormValues {
	name: string
	card_number: string
	validate: string
	cvv: string
}

export interface Props {
	initialValues?: FormValues
	handleSubmit(values: FormValues): void
	type: 'register' | 'edit'
}
