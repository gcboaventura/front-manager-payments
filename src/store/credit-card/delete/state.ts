import { ResponseDeleteCreditCard, HttpResponse } from '@/models'

export interface DeleteCreditCardState {
	data: HttpResponse<ResponseDeleteCreditCard>
	isLoading: boolean
	error?: Error
}
