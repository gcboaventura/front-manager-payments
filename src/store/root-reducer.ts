import { combineReducers } from 'redux'
import AlertReducer from './alert/reducer'
import CreditCardReducer from './credit-card'
import PaypalReducer from './paypal'

export const rootReducer = combineReducers({
	alert: AlertReducer,
	creditCard: CreditCardReducer,
	paypal: PaypalReducer
})
