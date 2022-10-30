import { Http } from '../config/http'
import {
	HttpResponse,
	RequestAddPaypal,
	RequestDeletePaypal,
	RequestUpdatePaypal,
	ResponseAddPaypal,
	ResponseDeletePaypal,
	ResponseUpdatePaypal
} from '@/models'

interface PaypalApiModel {
	add(card: RequestAddPaypal): Promise<HttpResponse<ResponseAddPaypal>>
	delete(data: RequestDeletePaypal): Promise<HttpResponse<ResponseDeletePaypal>>
	update(data: RequestUpdatePaypal): Promise<HttpResponse<ResponseUpdatePaypal>>
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

	async update(data: RequestUpdatePaypal): Promise<HttpResponse<ResponseUpdatePaypal>> {
		const url = '/update-paypal'
		return Http.patch(url, data)
	}
}
