import { HttpResponse, ResponseAddPaypal } from '@/models'

export interface AddPaypalState {
	data: HttpResponse<ResponseAddPaypal>
	isLoading: boolean
	error?: Error
}
