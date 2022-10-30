import { combineReducers } from 'redux'
import AlertReducer from './alert/reducer'
import CreditCardReducer from './credit-card'

export const rootReducer = combineReducers({
	alert: AlertReducer,
	creditCard: CreditCardReducer
})
