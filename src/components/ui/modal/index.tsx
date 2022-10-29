import { FC } from 'react'
import { Modal as ModalReactBootstrap } from 'react-bootstrap'
import { Props } from './types'

export const Modal: FC<Props> = ({ title, body, footer, ...props }): JSX.Element => {
	return (
		<ModalReactBootstrap {...props}>
			<ModalReactBootstrap.Header>{title}</ModalReactBootstrap.Header>
			<ModalReactBootstrap.Body>{body}</ModalReactBootstrap.Body>
			<ModalReactBootstrap.Footer>{footer}</ModalReactBootstrap.Footer>
		</ModalReactBootstrap>
	)
}
