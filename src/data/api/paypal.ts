import { Http } from '../config/http'
import {
	HttpResponse,
	RequestAddPaypal,
	RequestDeletePaypal,
	ResponseAddPaypal,
	ResponseDeletePaypal
} from '@/models'

interface PaypalApiModel {
	add(card: RequestAddPaypal): Promise<HttpResponse<ResponseAddPaypal>>
	delete(data: RequestDeletePaypal): Promise<HttpResponse<ResponseDeletePaypal>>
}

export class PaypalAPI implements PaypalApiModel {
	async add(data: RequestAddPaypal): Promise<HttpResponse<ResponseAddPaypal>> {
		const url = '/add-paypal'
		return Http.post(url, data)
	}

	async delete(data: RequestDeletePaypal): Promise<HttpResponse<ResponseDeletePaypal>> {
		const url = `/delete-paypal/${data.id}`
		return Http.delete(url)
	}
}
