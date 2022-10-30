import { Variant } from 'react-bootstrap/esm/types'

export interface PropsAlert {
	variant: Variant
	show: boolean
	message: string
	time?: number
}

export interface AlertState {
	data: PropsAlert[]
}
