export interface CreditCardModel {
	checkNumber(cardNumber: string): boolean
	checkValidate(month: string, year: string): boolean
}
