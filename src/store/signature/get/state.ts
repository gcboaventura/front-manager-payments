import { ResponseGetSignature } from '@/models'

export interface GetSignatureState {
	data: ResponseGetSignature
	isLoading: boolean
	error?: Error
}
