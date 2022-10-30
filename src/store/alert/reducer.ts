import { AlertActionKeys, AlertActionUnion } from './action'
import { AlertState } from './state'

const initalState: AlertState = {
	data: []
}

const AlertReducer = (state = initalState, action: AlertActionUnion): AlertState => {
	switch (action.type) {
		case AlertActionKeys.ALERT_SHOW:
			return {
				...state,
				data: [...state.data, action.payload]
			}
		case AlertActionKeys.ALERT_HIDEN:
			return {
				...state,
				data: [...state.data, action.payload]
			}
		default:
			return state
	}
}

export default AlertReducer
