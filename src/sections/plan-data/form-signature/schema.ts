import * as Yup from 'yup'

export const schema = Yup.object().shape({
	name: Yup.string().required('Obrigatório'),
	type: Yup.string().required('Obrigatório'),
	email: Yup.string().required('Obrigatório'),
	document_type: Yup.string().required('Obrigatório'),
	document: Yup.string().required('Obrigatório'),
	gender: Yup.string().required('Obrigatório'),
	mobile_phone: Yup.string().required('Obrigatório'),
	birthdate: Yup.string().required('Obrigatório'),
	zip_code: Yup.string().required('Obrigatório'),
	country: Yup.string().required('Obrigatório'),
	state: Yup.string().required('Obrigatório'),
	city: Yup.string().required('Obrigatório'),
	district: Yup.string().required('Obrigatório'),
	road: Yup.string().required('Obrigatório'),
	number: Yup.string().required('Obrigatório'),
	complement: Yup.string().notRequired(),
	plan_id: Yup.string().required('Obrigatório'),
	start_at: Yup.string().required('Obrigatório'),
	holder_name: Yup.string().required('Obrigatório'),
	card_number: Yup.string().required('Obrigatório'),
	validate: Yup.string().required('Obrigatório'),
	cvv: Yup.string().required('Obrigatório')
})
