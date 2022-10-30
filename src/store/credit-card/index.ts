import { combineReducers } from 'redux'
import AddCreditCardReducer from './add/reducer'

export default combineReducers({
	add: AddCreditCardReducer
})
