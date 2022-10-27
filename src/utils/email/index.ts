import { EmailModel } from './types'
import Validator from 'email-validator'

export class EmailUtils implements EmailModel {
	validator(email: string): boolean {
		return Validator.validate(email)
	}
}
