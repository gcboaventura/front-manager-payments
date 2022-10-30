import { HttpResponse, RequestUpdatePlan, ResponseUpdatePlan } from '@/models'
import { createAction, ActionsUnion, Action } from '../../action-helpers'

export enum UpdatePlanActionKeys {
	FETCH_UPDATE_PLAN_START = '[LOGIN] FETCH_UPDATE_PLAN_START',
	FETCH_UPDATE_PLAN_SUCCESS = '[LOGIN] FETCH_UPDATE_PLAN_SUCCESS',
	FETCH_UPDATE_PLAN_FALIED = '[LOGIN] FETCH_UPDATE_PLAN_FALIED'
}

export const UpdatePlanActions = {
	fetchUpdatePlan: (data: RequestUpdatePlan): fetchUpdatePlanAction =>
		createAction(UpdatePlanActionKeys.FETCH_UPDATE_PLAN_START, data),
	fetchUpdatePlanSuccess: (card: HttpResponse<ResponseUpdatePlan>): fetchUpdatePlanSuccessAction =>
		createAction(UpdatePlanActionKeys.FETCH_UPDATE_PLAN_SUCCESS, card),
	fetchUpdatePlanFalied: (error: Error): fetchUpdatePlanFaliedAction =>
		createAction(UpdatePlanActionKeys.FETCH_UPDATE_PLAN_FALIED, error)
}

export type UpdatePlanActionUnion = ActionsUnion<typeof UpdatePlanActions>

export type fetchUpdatePlanAction = Action<
	UpdatePlanActionKeys.FETCH_UPDATE_PLAN_START,
	RequestUpdatePlan
>

export type fetchUpdatePlanSuccessAction = Action<
	UpdatePlanActionKeys.FETCH_UPDATE_PLAN_SUCCESS,
	HttpResponse<ResponseUpdatePlan>
>

export type fetchUpdatePlanFaliedAction = Action<
	UpdatePlanActionKeys.FETCH_UPDATE_PLAN_FALIED,
	Error
>
