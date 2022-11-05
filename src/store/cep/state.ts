import { ResponseGetCep } from '@/models'

export interface GetCepState {
	data: ResponseGetCep
	isLoading: boolean
	error?: Error
}
