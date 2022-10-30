import { HttpResponse, ResponseDeletePaypal } from '@/models'

export interface DeletePaypalState {
	data: HttpResponse<ResponseDeletePaypal>
	isLoading: boolean
	error?: Error
}
