import { InputHTMLAttributes, ReactNode } from 'react'

export type Variant = 'error'

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
	variant?: Variant
	width?: string | number
	error?: boolean
	label?: string
	icon?: ReactNode
}

export interface StyledInputProps {
	$variant?: Variant
	$width?: string | number
	$error?: boolean
	$icon?: boolean
}
