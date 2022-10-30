import { combineReducers } from 'redux'
import AlertReducer from './alert/reducer'

export const rootReducer = combineReducers({
	alert: AlertReducer
})
