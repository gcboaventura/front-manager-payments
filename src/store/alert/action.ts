import { Action, ActionsUnion, createAction } from '../action-helpers'
import { PropsAlert } from './state'

export enum AlertActionKeys {
	ALERT_HIDEN = '[ALERT] ALERT_HIDEN',
	ALERT_SHOW = '[ALERT] ALERT_SHOW'
}

export const AlertActions = {
	HidenAlert: (data: PropsAlert): HidenAlertAction =>
		createAction(AlertActionKeys.ALERT_HIDEN, data),
	ShowAlert: (data: PropsAlert): ShowAlertAction => createAction(AlertActionKeys.ALERT_SHOW, data)
}

export type AlertActionUnion = ActionsUnion<typeof AlertActions>

export type ShowAlertAction = Action<AlertActionKeys.ALERT_SHOW, PropsAlert>

export type HidenAlertAction = Action<AlertActionKeys.ALERT_HIDEN, PropsAlert>
