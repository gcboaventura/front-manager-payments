import { HttpResponse, RequestAddCreditCard, ResponseAddCreditCard } from '@/models'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum AddCreditCardActionKeys {
	FETCH_ADD_CREDIT_CARD_START = '[LOGIN] FETCH_ADD_CREDIT_CARD_START',
	FETCH_ADD_CREDIT_CARD_SUCCESS = '[LOGIN] FETCH_ADD_CREDIT_CARD_SUCCESS',
	FETCH_ADD_CREDIT_CARD_FALIED = '[LOGIN] FETCH_ADD_CREDIT_CARD_FALIED'
}

export const AddCreditCardActions = {
	fetchAddCreditCard: (data: RequestAddCreditCard): fetchAddCreditCardAction =>
		createAction(AddCreditCardActionKeys.FETCH_ADD_CREDIT_CARD_START, data),
	fetchAddCreditCardSuccess: (
		card: HttpResponse<ResponseAddCreditCard>
	): fetchAddCreditCardSuccessAction =>
		createAction(AddCreditCardActionKeys.FETCH_ADD_CREDIT_CARD_SUCCESS, card),
	fetchAddCreditCardFalied: (error: Error): fetchAddCreditCardFaliedAction =>
		createAction(AddCreditCardActionKeys.FETCH_ADD_CREDIT_CARD_FALIED, error)
}

export type AddCreditCardActionUnion = ActionsUnion<typeof AddCreditCardActions>

export type fetchAddCreditCardAction = Action<
	AddCreditCardActionKeys.FETCH_ADD_CREDIT_CARD_START,
	RequestAddCreditCard
>

export type fetchAddCreditCardSuccessAction = Action<
	AddCreditCardActionKeys.FETCH_ADD_CREDIT_CARD_SUCCESS,
	HttpResponse<ResponseAddCreditCard>
>

export type fetchAddCreditCardFaliedAction = Action<
	AddCreditCardActionKeys.FETCH_ADD_CREDIT_CARD_FALIED,
	Error
>