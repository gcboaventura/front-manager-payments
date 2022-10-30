import { HttpResponse, ResponseUpdateCreditCard } from '@/models'

export interface UpdateCreditCardState {
	data: HttpResponse<ResponseUpdateCreditCard>
	isLoading: boolean
	error?: Error
}
