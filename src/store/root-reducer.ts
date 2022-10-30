import { combineReducers } from 'redux'
import AlertReducer from './alert/reducer'
import CreditCardReducer from './credit-card'
import PaypalReducer from './paypal'
import AccountReducer from './account'
import PlansReducer from './plans'

export const rootReducer = combineReducers({
	alert: AlertReducer,
	creditCard: CreditCardReducer,
	paypal: PaypalReducer,
	account: AccountReducer,
	plans: PlansReducer
})
