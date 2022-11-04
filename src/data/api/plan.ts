import { Http } from '../config/http'
import {
	HttpResponse,
	RequestGetAllPlans,
	RequestUpdatePlan,
	ResponseGetAllPlans,
	ResponseUpdatePlan
} from '@/models'

interface AccountApiModel {
	getAll(data: RequestGetAllPlans): Promise<HttpResponse<ResponseGetAllPlans>>
	update(data: RequestUpdatePlan): Promise<HttpResponse<ResponseUpdatePlan>>
}

export class PlanAPI implements AccountApiModel {
	async getAll(data: RequestGetAllPlans): Promise<HttpResponse<ResponseGetAllPlans>> {
		const url = '/list-plan'
		return Http.get(url)
	}

	async update(data: RequestUpdatePlan): Promise<HttpResponse<ResponseUpdatePlan>> {
		const url = `/update-plan`
		return Http.post(url, data.id)
	}
}
