import { HttpResponse, RequestGetAccount, ResponseGetAccount } from '@/models'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum GetAccountActionKeys {
	FETCH_GET_ACCOUNT_START = '[LOGIN] FETCH_GET_ACCOUNT_START',
	FETCH_GET_ACCOUNT_SUCCESS = '[LOGIN] FETCH_GET_ACCOUNT_SUCCESS',
	FETCH_GET_ACCOUNT_FALIED = '[LOGIN] FETCH_GET_ACCOUNT_FALIED'
}

export const GetAccountActions = {
	fetchGetAccount: (data: RequestGetAccount): fetchGetAccountAction =>
		createAction(GetAccountActionKeys.FETCH_GET_ACCOUNT_START, data),
	fetchGetAccountSuccess: (card: HttpResponse<ResponseGetAccount>): fetchGetAccountSuccessAction =>
		createAction(GetAccountActionKeys.FETCH_GET_ACCOUNT_SUCCESS, card),
	fetchGetAccountFalied: (error: Error): fetchGetAccountFaliedAction =>
		createAction(GetAccountActionKeys.FETCH_GET_ACCOUNT_FALIED, error)
}

export type GetAccountActionUnion = ActionsUnion<typeof GetAccountActions>

export type fetchGetAccountAction = Action<
	GetAccountActionKeys.FETCH_GET_ACCOUNT_START,
	RequestGetAccount
>

export type fetchGetAccountSuccessAction = Action<
	GetAccountActionKeys.FETCH_GET_ACCOUNT_SUCCESS,
	HttpResponse<ResponseGetAccount>
>

export type fetchGetAccountFaliedAction = Action<
	GetAccountActionKeys.FETCH_GET_ACCOUNT_FALIED,
	Error
>
