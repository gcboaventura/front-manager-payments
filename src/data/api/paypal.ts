import { Http } from '../config/http'
import { HttpResponse, RequestAddPaypal, ResponseAddPaypal } from '@/models'

interface PaypalApiModel {
	add(card: RequestAddPaypal): Promise<HttpResponse<ResponseAddPaypal>>
}

export class PaypalAPI implements PaypalApiModel {
	async add(data: RequestAddPaypal): Promise<HttpResponse<ResponseAddPaypal>> {
		const url = '/add-paypal'
		return Http.post(url, data)
	}
}
