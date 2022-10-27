import { ButtonProps } from 'react-bootstrap'
import { ReactNode } from 'react'
import { ButtonVariant } from 'react-bootstrap/esm/types'

export interface Props extends ButtonProps {
	icon?: ReactNode
	children?: ReactNode
	variant?: ButtonVariant
}
