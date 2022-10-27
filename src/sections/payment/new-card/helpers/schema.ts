import { CreditCardForm, PaypalForm } from './types'
import * as Yup from 'yup'

export const schemaPayPal: Yup.SchemaOf<PaypalForm> = Yup.object().shape({
	paypal_email: Yup.string().required('Obrigatório')
})

export const schemaCreditCard: Yup.SchemaOf<CreditCardForm> = Yup.object().shape({
	card_number: Yup.string().required('Obrigatório'),
	cvv: Yup.string().required('Obrigatório'),
	validate: Yup.string().required('Obrigatório')
})
