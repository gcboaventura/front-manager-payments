import { ReactNode } from 'react'
import { FormControlProps } from 'react-bootstrap'

export type Variant = 'error'

export interface Props extends FormControlProps {
	variant?: Variant
	width?: string | number
	error?: boolean
	label?: string
	icon?: ReactNode
	name: string
	required?: boolean
	mask: string
	onChangeVal?: (value: any) => void
}
