import { Http } from '../config/http'
import {
	HttpResponse,
	RequestAddCreditCard,
	RequestDeleteCreditCard,
	RequestUpdateCreditCard,
	ResponseAddCreditCard,
	ResponseDeleteCreditCard,
	ResponseUpdateCreditCard
} from '@/models'

interface CreditCardApiModel {
	add(card: RequestAddCreditCard): Promise<HttpResponse<ResponseAddCreditCard>>
	delete(data: RequestDeleteCreditCard): Promise<HttpResponse<ResponseDeleteCreditCard>>
	update(card: RequestUpdateCreditCard): Promise<HttpResponse<ResponseUpdateCreditCard>>
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

	async update(card: RequestUpdateCreditCard): Promise<HttpResponse<ResponseUpdateCreditCard>> {
		const url = '/update-credit-card'
		return Http.patch(url, card)
	}
}
