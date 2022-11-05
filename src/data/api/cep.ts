import { Http } from '../config/http'
import { HttpResponse, RequestGetCep, ResponseGetCep } from '@/models'

interface CepApiModel {
	get(data: RequestGetCep): Promise<HttpResponse<ResponseGetCep>>
}

export class CepAPI implements CepApiModel {
	async get(data: RequestGetCep): Promise<HttpResponse<ResponseGetCep>> {
		const url = `https://viacep.com.br/ws/${data.cep}/json/`
		return await Http.get(url)
	}
}
