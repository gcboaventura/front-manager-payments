import { Http } from '../config/http'
import { HttpResponse, RequestAddSignature, ResponseAddSignature } from '@/models'

interface SignatureApiModel {
	add(data: RequestAddSignature): Promise<HttpResponse<ResponseAddSignature>>
}

export class SignatureAPI implements SignatureApiModel {
	async add(data: RequestAddSignature): Promise<HttpResponse<ResponseAddSignature>> {
		const url = `/add-signature`
		return await Http.post(url, data)
	}
}
