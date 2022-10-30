export interface RequestAddCreditCard {
	name: string
	card_number: string
	validate: string
	cvv: string
}

export interface ResponseAddCreditCard {}

export interface RequestDeleteCreditCard {
	id: number
}

export interface ResponseDeleteCreditCard {}

export interface RequestUpdateCreditCard extends RequestAddCreditCard, RequestDeleteCreditCard {}

export interface ResponseUpdateCreditCard {}
