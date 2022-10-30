import { HttpResponse, ResponseUpdatePlan } from '@/models'

export interface UpdatePlanState {
	data: HttpResponse<ResponseUpdatePlan>
	isLoading: boolean
	error?: Error
}
