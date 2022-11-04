import { ResponseGetAllPlans } from '@/models'

export interface GetAllPlansState {
	data: ResponseGetAllPlans[]
	isLoading: boolean
	error?: Error
}
