import { ReactNode } from 'react'
import { FormSelectProps } from 'react-bootstrap'
import { Variant } from 'react-bootstrap/esm/types'

export interface Props extends FormSelectProps {
	variant?: Variant
	width?: string | number
	error?: boolean
	label?: string
	icon?: ReactNode
	name: string
	required?: boolean
	options: Option[]
}

export interface Option {
	name: string
	value: number
}
