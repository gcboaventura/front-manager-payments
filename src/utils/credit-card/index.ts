import { CreditCardModel } from './types'
import Validator from 'card-validator'

export class CreditCardUtils implements CreditCardModel {
	checkNumber(cardNumber: string): boolean {
		const { isValid } = Validator.number(cardNumber)
		return isValid
	}
}
