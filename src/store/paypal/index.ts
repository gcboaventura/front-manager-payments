import { combineReducers } from 'redux'
import AddPaypalReducer from './add/reducer'

export default combineReducers({
	add: AddPaypalReducer
})
