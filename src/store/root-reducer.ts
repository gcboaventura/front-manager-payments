import { combineReducers } from 'redux'
import AlertReducer from './alert/reducer'
import AccountReducer from './account'
import PlansReducer from './plans'

export const rootReducer = combineReducers({
	alert: AlertReducer,
	account: AccountReducer,
	plans: PlansReducer
})
