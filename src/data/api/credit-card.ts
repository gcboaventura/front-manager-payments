import { HttpResponse, RequestAddCreditCard, ResponseAddCreditCard } from '@/models'
import { Http } from '../config/http'

interface CreditCardApiModel {
	add(card: RequestAddCreditCard): Promise<HttpResponse<ResponseAddCreditCard>>
}

export class CreditCardAPI implements CreditCardApiModel {
	async add(card: RequestAddCreditCard): Promise<HttpResponse<ResponseAddCreditCard>> {
		const url = '/add-credit-card'
		return Http.post(url, card)
	}
}
