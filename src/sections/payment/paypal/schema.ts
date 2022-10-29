import { FormValues } from './types'
import { EmailUtils } from '@/utils'
import * as Yup from 'yup'

const emailValidator = new EmailUtils()

export const schemaPayPal: Yup.SchemaOf<FormValues> = Yup.object().shape({
	paypal_email: Yup.string()
		.required('Obrigatório')
		.test('paypal_email', 'email inválido', function (value: string | undefined) {
			if (value) {
				const check = emailValidator.validator(value)
				return check
			}
			return false
		})
})
