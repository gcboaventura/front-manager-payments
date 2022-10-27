import { CreditCardModel } from './types'
import { DateUtils } from '../date'
import Validator from 'card-validator'

export class CreditCardUtils implements CreditCardModel {
	checkNumber(cardNumber: string): boolean {
		const { isValid } = Validator.number(cardNumber)
		return isValid
	}

	checkValidate(month: string, year: string): boolean {
		const dateUtils = new DateUtils()

		const currentMonth = dateUtils.getMonth()

		const currentYear = dateUtils.getYear()

		if (parseInt(year) > currentYear) {
			return true
		}

		if (parseInt(year) === currentYear && parseInt(month) >= currentMonth) {
			return true
		}

		return false
	}
}
