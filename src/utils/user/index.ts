import { User } from '@/models'
import { UserModel } from './types'

export class UserHelper implements UserModel {
	get(): User | null {
		const user = localStorage.getItem('user')
		if (user) {
			return JSON.parse(user)
		}
		return null
	}
}
