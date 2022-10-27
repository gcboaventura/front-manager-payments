import { CreditCardModel } from './types'
import Validator from 'card-validator'
import moment from 'moment'

export class CreditCardUtils implements CreditCardModel {
	checkNumber(cardNumber: string): boolean {
		const { isValid } = Validator.number(cardNumber)
		return isValid
	}

	checkValidate(month: string, year: string): boolean {
		const currentMonth = moment().month() + 1

		const currentYear = moment().year()

		if (parseInt(year) > currentYear) {
			return true
		}

		if (parseInt(year) === currentYear && parseInt(month) >= currentMonth) {
			return true
		}

		return false
	}
}
