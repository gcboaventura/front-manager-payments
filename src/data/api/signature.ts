import { Http } from '../config/http'
import {
	HttpResponse,
	RequestAddSignature,
	RequestCancelSignature,
	RequestGetSignature,
	ResponseAddSignature,
	ResponseCancelSignature,
	ResponseGetSignature
} from '@/models'

interface SignatureApiModel {
	add(data: RequestAddSignature): Promise<HttpResponse<ResponseAddSignature>>
	get(data: RequestGetSignature): Promise<HttpResponse<ResponseGetSignature>>
	cancel(data: RequestCancelSignature): Promise<HttpResponse<ResponseCancelSignature>>
}

export class SignatureAPI implements SignatureApiModel {
	async add(data: RequestAddSignature): Promise<HttpResponse<ResponseAddSignature>> {
		const url = `/add-signature`
		return await Http.post(url, data.data)
	}

	async get(data: RequestGetSignature): Promise<HttpResponse<ResponseGetSignature>> {
		const url = `/get-signature/${data.id}`
		return await Http.get(url)
	}

	async cancel(data: RequestCancelSignature): Promise<HttpResponse<ResponseCancelSignature>> {
		const url = `/cancel-signature/${data.id}`
		return await Http.delete(url)
	}
}
