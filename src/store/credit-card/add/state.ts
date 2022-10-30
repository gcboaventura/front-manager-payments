import { ResponseAddCreditCard, HttpResponse } from '@/models'

export interface AddCreditCardState {
	data: HttpResponse<ResponseAddCreditCard>
	isLoading: boolean
	error?: Error
}
