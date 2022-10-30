import { HttpResponse, RequestUpdateCreditCard, ResponseUpdateCreditCard } from '@/models'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum UpdateCreditCardActionKeys {
	FETCH_UPDATE_CREDIT_CARD_START = '[LOGIN] FETCH_UPDATE_CREDIT_CARD_START',
	FETCH_UPDATE_CREDIT_CARD_SUCCESS = '[LOGIN] FETCH_UPDATE_CREDIT_CARD_SUCCESS',
	FETCH_UPDATE_CREDIT_CARD_FALIED = '[LOGIN] FETCH_UPDATE_CREDIT_CARD_FALIED'
}

export const UpdateCreditCardActions = {
	fetchUpdateCreditCard: (data: RequestUpdateCreditCard): fetchUpdateCreditCardAction =>
		createAction(UpdateCreditCardActionKeys.FETCH_UPDATE_CREDIT_CARD_START, data),
	fetchUpdateCreditCardSuccess: (
		card: HttpResponse<ResponseUpdateCreditCard>
	): fetchUpdateCreditCardSuccessAction =>
		createAction(UpdateCreditCardActionKeys.FETCH_UPDATE_CREDIT_CARD_SUCCESS, card),
	fetchUpdateCreditCardFalied: (error: Error): fetchUpdateCreditCardFaliedAction =>
		createAction(UpdateCreditCardActionKeys.FETCH_UPDATE_CREDIT_CARD_FALIED, error)
}

export type UpdateCreditCardActionUnion = ActionsUnion<typeof UpdateCreditCardActions>

export type fetchUpdateCreditCardAction = Action<
	UpdateCreditCardActionKeys.FETCH_UPDATE_CREDIT_CARD_START,
	RequestUpdateCreditCard
>

export type fetchUpdateCreditCardSuccessAction = Action<
	UpdateCreditCardActionKeys.FETCH_UPDATE_CREDIT_CARD_SUCCESS,
	HttpResponse<ResponseUpdateCreditCard>
>

export type fetchUpdateCreditCardFaliedAction = Action<
	UpdateCreditCardActionKeys.FETCH_UPDATE_CREDIT_CARD_FALIED,
	Error
>
