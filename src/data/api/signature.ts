import { Http } from '../config/http'
import {
	HttpResponse,
	RequestAddSignature,
	RequestCancelSignature,
	RequestGetSignature,
	RequestUpdateCreditCardSignature,
	ResponseAddSignature,
	ResponseCancelSignature,
	ResponseGetSignature,
	ResponseUpdateCreditCardSignature
} from '@/models'

interface SignatureApiModel {
	add(data: RequestAddSignature): Promise<HttpResponse<ResponseAddSignature>>
	get(data: RequestGetSignature): Promise<HttpResponse<ResponseGetSignature>>
	cancel(data: RequestCancelSignature): Promise<HttpResponse<ResponseCancelSignature>>
	updateCreditCard(
		data: RequestUpdateCreditCardSignature
	): Promise<HttpResponse<ResponseUpdateCreditCardSignature>>
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

	async updateCreditCard(
		data: RequestUpdateCreditCardSignature
	): Promise<HttpResponse<ResponseUpdateCreditCardSignature>> {
		const url = `/update-card-signature/${data.signature_id}`
		return await Http.patch(url, data.card)
	}
}
