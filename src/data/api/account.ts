import { Http } from '../config/http'
import { HttpResponse, RequestGetAccount, ResponseGetAccount } from '@/models'

interface AccountApiModel {
	get(data: RequestGetAccount): Promise<HttpResponse<ResponseGetAccount>>
}

export class AccountAPI implements AccountApiModel {
	async get(data: RequestGetAccount): Promise<HttpResponse<ResponseGetAccount>> {
		const url = `/get-account/${data.id}`
		return Http.post(url)
	}
}
