import { HttpResponse, ResponseUpdateCreditCardSignature } from '@/models'

export interface UpdateCreditCardSignatureState {
	data: ResponseUpdateCreditCardSignature
	isLoading: boolean
	error?: Error
}
