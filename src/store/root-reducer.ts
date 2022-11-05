import { combineReducers } from 'redux'
import AlertReducer from './alert/reducer'
import GetCepReducer from './cep/reducer'
import PlansReducer from './plans'
import SignatureReducer from './signature'

export const rootReducer = combineReducers({
	alert: AlertReducer,
	plans: PlansReducer,
	cep: GetCepReducer,
	signatue: SignatureReducer
})
