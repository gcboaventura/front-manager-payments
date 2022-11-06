import * as Yup from 'yup'

export const schema = Yup.object().shape({
	holder_name: Yup.string().required('Obrigatório'),
	card_number: Yup.string().required('Obrigatório'),
	validate: Yup.string().required('Obrigatório'),
	cvv: Yup.string().required('Obrigatório')
})
