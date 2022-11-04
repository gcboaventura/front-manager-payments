import { User } from '@/models'

export interface UserModel {
	get(): User | null
}
