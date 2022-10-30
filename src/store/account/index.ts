import { combineReducers } from 'redux'
import GetAccountReducer from './get/reducer'

export default combineReducers({
	get: GetAccountReducer
})
