import { AlertProps } from 'react-bootstrap'

export interface Props extends AlertProps {
	message: string
	show: boolean
	time?: number
}
