import { FormControlProps } from 'react-bootstrap'

export interface Props extends FormControlProps {
	children: string
	error?: boolean
}
