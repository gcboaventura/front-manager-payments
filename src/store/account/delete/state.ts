import { HttpResponse, ResponseDeleteAccount } from '@/models'

export interface DeleteAccountState {
	data: HttpResponse<ResponseDeleteAccount>
	isLoading: boolean
	error?: Error
}
