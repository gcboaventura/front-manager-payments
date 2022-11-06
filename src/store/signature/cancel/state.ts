import { ResponseCancelSignature } from '@/models'

export interface CancelSignatureState {
	data: ResponseCancelSignature
	isLoading: boolean
	error?: Error
}
