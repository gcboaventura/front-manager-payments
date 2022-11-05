export interface FormValues {
	name: string
	type: string
	email: string
	document_type: string
	document: string
	gender: string
	mobile_phone: string
	birthdate: string
	zip_code: string
	country: string
	state: string
	city: string
	district: string
	road: string
	number: string
	complement?: string
	plan_id: string
	start_at: string
	holder_name: string
	card_number: string
	validate: string
	cvv: string
}

export interface Props {
	onSuccess?: (data?: any) => void
}
