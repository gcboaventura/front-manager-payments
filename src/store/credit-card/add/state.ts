import { ResponseCreditCard, HttpResponse } from '@/models'

export interface AddCreditCardState {
	data: HttpResponse<ResponseCreditCard>
	isLoading: boolean
	error?: Error
}
