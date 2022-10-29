export interface FormValues {
	paypal_email: string
}

export interface Props {
	initialValues?: FormValues
	type: 'register' | 'edit'
}
