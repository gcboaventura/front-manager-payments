import { Http } from '../config/http'
import {
	HttpResponse,
	RequestAddCreditCard,
	RequestDeleteCreditCard,
	ResponseAddCreditCard,
	ResponseDeleteCreditCard
} from '@/models'

interface CreditCardApiModel {
	add(card: RequestAddCreditCard): Promise<HttpResponse<ResponseAddCreditCard>>
	delete(data: RequestDeleteCreditCard): Promise<HttpResponse<ResponseDeleteCreditCard>>
}

export class CreditCardAPI implements CreditCardApiModel {
	async add(card: RequestAddCreditCard): Promise<HttpResponse<ResponseAddCreditCard>> {
		const url = '/add-credit-card'
		return Http.post(url, card)
	}

	async delete(data: RequestDeleteCreditCard): Promise<HttpResponse<ResponseDeleteCreditCard>> {
		const url = `/delete-credit-card/${data.id}`
		return Http.delete(url)
	}
}
