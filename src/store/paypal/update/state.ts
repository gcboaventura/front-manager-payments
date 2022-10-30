import { HttpResponse, ResponseUpdatePaypal } from '@/models'

export interface UpdatePaypalState {
	data: HttpResponse<ResponseUpdatePaypal>
	isLoading: boolean
	error?: Error
}
