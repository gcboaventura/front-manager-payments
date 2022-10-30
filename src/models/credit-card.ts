export interface RequestAddCreditCard {
	name: string
	card_number: string
	validate: string
	cvv: string
	onSuccess?: (data?: any) => void
	onFalied?: (error?: any) => void
}

export interface ResponseAddCreditCard {}

export interface RequestDeleteCreditCard {
	id: number
	onSuccess?: (data?: any) => void
	onFalied?: (error?: any) => void
}

export interface ResponseDeleteCreditCard {}

export interface RequestUpdateCreditCard extends RequestAddCreditCard, RequestDeleteCreditCard {}

export interface ResponseUpdateCreditCard {}
