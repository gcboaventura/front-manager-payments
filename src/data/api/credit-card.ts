import { HttpResponse, RequestCreditCard, ResponseCreditCard } from '@/models'
import { Http } from '../config/http'

interface CreditCardApiModel {
	add(card: RequestCreditCard): Promise<HttpResponse<ResponseCreditCard>>
}

export class CreditCardAPI implements CreditCardApiModel {
	async add(card: RequestCreditCard): Promise<HttpResponse<ResponseCreditCard>> {
		const url = '/add-credit-card'
		return Http.post(url, card)
	}
}
