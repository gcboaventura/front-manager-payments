export interface RequestAddPaypal {
	email: string
}

export interface ResponseAddPaypal {}

export interface RequestDeletePaypal {
	id: number
}

export interface ResponseDeletePaypal {}

export interface RequestUpdatePaypal extends RequestAddPaypal, RequestDeletePaypal {}

export interface ResponseUpdatePaypal {}
