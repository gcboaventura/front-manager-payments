import { User } from '@/models'
import { UserModel } from './types'

export class UserHelper implements UserModel {
	get(): User {
		const user = localStorage.getItem('user')
		return JSON.parse(`${user}`)
	}
}
