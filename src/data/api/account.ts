import { Http } from '../config/http'
import {
	HttpResponse,
	RequestDeleteAccount,
	RequestGetAccount,
	ResponseDeleteAccount,
	ResponseGetAccount
} from '@/models'

interface AccountApiModel {
	get(data: RequestGetAccount): Promise<HttpResponse<ResponseGetAccount>>
	delete(data: RequestDeleteAccount): Promise<HttpResponse<ResponseDeleteAccount>>
}

export class AccountAPI implements AccountApiModel {
	async get(data: RequestGetAccount): Promise<HttpResponse<ResponseGetAccount>> {
		const url = `/get-account/${data.id}`
		return Http.get(url)
	}

	async delete(data: RequestDeleteAccount): Promise<HttpResponse<ResponseDeleteAccount>> {
		const url = `/delete-account/${data.id}`
		return Http.delete(url)
	}
}
