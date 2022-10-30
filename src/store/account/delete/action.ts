import { HttpResponse, RequestDeleteAccount, ResponseDeleteAccount } from '@/models'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum DeleteAccountActionKeys {
	FETCH_DELETE_ACCOUNT_START = '[LOGIN] FETCH_DELETE_ACCOUNT_START',
	FETCH_DELETE_ACCOUNT_SUCCESS = '[LOGIN] FETCH_DELETE_ACCOUNT_SUCCESS',
	FETCH_DELETE_ACCOUNT_FALIED = '[LOGIN] FETCH_DELETE_ACCOUNT_FALIED'
}

export const DeleteAccountActions = {
	fetchDeleteAccount: (data: RequestDeleteAccount): fetchDeleteAccountAction =>
		createAction(DeleteAccountActionKeys.FETCH_DELETE_ACCOUNT_START, data),
	fetchDeleteAccountSuccess: (
		card: HttpResponse<ResponseDeleteAccount>
	): fetchDeleteAccountSuccessAction =>
		createAction(DeleteAccountActionKeys.FETCH_DELETE_ACCOUNT_SUCCESS, card),
	fetchDeleteAccountFalied: (error: Error): fetchDeleteAccountFaliedAction =>
		createAction(DeleteAccountActionKeys.FETCH_DELETE_ACCOUNT_FALIED, error)
}

export type DeleteAccountActionUnion = ActionsUnion<typeof DeleteAccountActions>

export type fetchDeleteAccountAction = Action<
	DeleteAccountActionKeys.FETCH_DELETE_ACCOUNT_START,
	RequestDeleteAccount
>

export type fetchDeleteAccountSuccessAction = Action<
	DeleteAccountActionKeys.FETCH_DELETE_ACCOUNT_SUCCESS,
	HttpResponse<ResponseDeleteAccount>
>

export type fetchDeleteAccountFaliedAction = Action<
	DeleteAccountActionKeys.FETCH_DELETE_ACCOUNT_FALIED,
	Error
>
