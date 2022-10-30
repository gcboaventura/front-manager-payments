import { HttpResponse, ResponseGetAllPlans } from '@/models'

export interface GetAllPlansState {
	data: HttpResponse<ResponseGetAllPlans>
	isLoading: boolean
	error?: Error
}
