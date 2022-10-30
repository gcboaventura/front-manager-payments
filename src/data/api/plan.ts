import { Http } from '../config/http'
import { HttpResponse, RequestGetAllPlans, ResponseGetAllPlans } from '@/models'

interface AccountApiModel {
	getAll(data: RequestGetAllPlans): Promise<HttpResponse<ResponseGetAllPlans>>
}

export class PlanAPI implements AccountApiModel {
	async getAll(data: RequestGetAllPlans): Promise<HttpResponse<ResponseGetAllPlans>> {
		const url = '/get-all-plans'
		return Http.get(url)
	}
}
