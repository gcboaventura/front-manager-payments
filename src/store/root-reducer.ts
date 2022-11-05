import { combineReducers } from 'redux'
import AlertReducer from './alert/reducer'
import GetCepReducer from './cep/reducer'
import PlansReducer from './plans'

export const rootReducer = combineReducers({
	alert: AlertReducer,
	plans: PlansReducer,
	cep: GetCepReducer
})
