import * as Yup from 'yup'
import { CreditCardUtils } from '@/utils'
import { FormValues } from './types'

const cardValidator = new CreditCardUtils()

export const schemaCreditCard: Yup.SchemaOf<FormValues> = Yup.object().shape({
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
	cvv: Yup.string().min(3, 'Mínimo três dígitos.').required('Obrigatório'),
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
