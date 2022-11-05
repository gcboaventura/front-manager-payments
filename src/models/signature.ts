import { BillingType, Currency, Interval, Items, PlanModel, Status } from './plan'

export interface RequestGetSignature {
	id: string
	onSuccess?: (data?: any) => void
	onFalied?: (error?: any) => void
}

export interface ResponseGetSignature extends SignatureModel {}

export interface RequestAddSignature {
	data: {
		code?: string
		plan_id: string
		payment_method: PaymentMethods
		start_at: string
		customer: ClientEntity
		card: Card
		installments?: number
		discounts?: Discounts[]
		increments?: Increments[]
		gateway_affiliation_id?: string
		boleto_due_days?: number
	}

	onSuccess?: (data?: any) => void
	onFalied?: (error?: any) => void
}

export interface ResponseAddSignature {}

export type PaymentMethods = 'credit_card' | 'boleto' | 'debit_card'

export interface ClientEntity {
	name: string //max 64 caracteres
	type: TypePesron
	email: string //max 64 caracteres
	code?: string //max 52 caracteres
	document: string //max 16 caracteres
	document_type: DocumentType
	gender: Gender
	address: Address
	phones: Phones
	birthdate: string
}

export type TypePesron = 'individual' | 'company'

export type DocumentType = 'CPF' | 'CNPJ' | 'PASSAPORTE'

export type Gender = 'male' | 'female'

export interface Address {
	country: string
	state: string
	city: string
	zip_code: string
	line_1: string
	line_2: string
}

export interface Phones {
	home_phone?: HomePhone
	mobile_phone: MobilePhone
}

export interface HomePhone {
	country_code: string
	area_code: string
	number: string
}

export interface MobilePhone {
	country_code: string
	area_code: string
	number: string
}

export interface Discounts {
	cycles: string
	value: string
	discount_type: string
}

export interface Increments {
	cycles: string
	value: string
	increment_type: string
}

export interface Card {
	number: string
	holder_name: string
	exp_month: number
	exp_year: number
	cvv: string
	holder_document?: string
	brand?: string
	label?: string
	billing_address_id?: string
	billing_address: Address
	last_four_digits?: string
}

export interface SignatureEntity {
	code?: string
	plan_id: string
	payment_method: PaymentMethods
	start_at: string
	customer: ClientEntity
	card: Card
	installments?: number
	discounts?: Discounts[]
	increments?: Increments[]
	gateway_affiliation_id?: string
	boleto_due_days?: number
}

export interface SignatureModel extends SignatureEntity {
	id: string
	current_cycle: CurrentCycle
	next_billing_at: string
	currency: Currency
	statement_descriptor: string
	status: Status
	created_at: string
	updated_at: string
	plan: PlanModel
	items: Items
	billing_type: BillingType
	interval: Interval
}

export interface CurrentCycle {
	id: string
	start_at: string
	end_at: string
	billing_at: string
}
