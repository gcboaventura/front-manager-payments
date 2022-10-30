import { HttpResponse, RequestDeleteCreditCard, ResponseDeleteCreditCard } from '@/models'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum DeleteCreditCardActionKeys {
	FETCH_DELETE_CREDIT_CARD_START = '[LOGIN] FETCH_DELETE_CREDIT_CARD_START',
	FETCH_DELETE_CREDIT_CARD_SUCCESS = '[LOGIN] FETCH_DELETE_CREDIT_CARD_SUCCESS',
	FETCH_DELETE_CREDIT_CARD_FALIED = '[LOGIN] FETCH_DELETE_CREDIT_CARD_FALIED'
}

export const DeleteCreditCardActions = {
	fetchDeleteCreditCard: (data: RequestDeleteCreditCard): fetchDeleteCreditCardAction =>
		createAction(DeleteCreditCardActionKeys.FETCH_DELETE_CREDIT_CARD_START, data),
	fetchDeleteCreditCardSuccess: (
		card: HttpResponse<ResponseDeleteCreditCard>
	): fetchDeleteCreditCardSuccessAction =>
		createAction(DeleteCreditCardActionKeys.FETCH_DELETE_CREDIT_CARD_SUCCESS, card),
	fetchDeleteCreditCardFalied: (error: Error): fetchDeleteCreditCardFaliedAction =>
		createAction(DeleteCreditCardActionKeys.FETCH_DELETE_CREDIT_CARD_FALIED, error)
}

export type DeleteCreditCardActionUnion = ActionsUnion<typeof DeleteCreditCardActions>

export type fetchDeleteCreditCardAction = Action<
	DeleteCreditCardActionKeys.FETCH_DELETE_CREDIT_CARD_START,
	RequestDeleteCreditCard
>

export type fetchDeleteCreditCardSuccessAction = Action<
	DeleteCreditCardActionKeys.FETCH_DELETE_CREDIT_CARD_SUCCESS,
	HttpResponse<ResponseDeleteCreditCard>
>

export type fetchDeleteCreditCardFaliedAction = Action<
	DeleteCreditCardActionKeys.FETCH_DELETE_CREDIT_CARD_FALIED,
	Error
>
