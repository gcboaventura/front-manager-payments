import { CreditCardForm, PaypalForm } from './types'
import { CreditCardUtils } from '../../../../utils'
import * as Yup from 'yup'

const cardValidator = new CreditCardUtils()

export const schemaPayPal: Yup.SchemaOf<PaypalForm> = Yup.object().shape({
	paypal_email: Yup.string().required('Obrigatório')
})

export const schemaCreditCard: Yup.SchemaOf<CreditCardForm> = Yup.object().shape({
	card_number: Yup.string()
		.required('Obrigatório')
		.test('card_number', 'Cartão inválido', function (value: string | undefined): boolean {
			const cardNumber = value?.replaceAll(' ', '')
			if (cardNumber) {
				const check = cardValidator.checkNumber(cardNumber)
				return check
			}
			return false
		}),
	cvv: Yup.string().required('Obrigatório'),
	validate: Yup.string()
		.required('Obrigatório')
		.test('validate', 'Data inválida', function (value: string | undefined) {
			const date = value?.split('/')
			if (date) {
				const check = cardValidator.checkValidate(date[0], date[1])
				return check
			}
			return false
		})
})
