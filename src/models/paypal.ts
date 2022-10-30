export interface RequestAddPaypal {
	email: string
	onSuccess?: (data?: any) => void
	onFalied?: (error?: any) => void
}

export interface ResponseAddPaypal {}

export interface RequestDeletePaypal {
	id: number
	onSuccess?: (data?: any) => void
	onFalied?: (error?: any) => void
}

export interface ResponseDeletePaypal {}

export interface RequestUpdatePaypal extends RequestAddPaypal, RequestDeletePaypal {}

export interface ResponseUpdatePaypal {}
