import { Close } from '@/components/icons'
import { FC } from 'react'
import { Modal as ModalReactBootstrap } from 'react-bootstrap'
import { Title } from '../typography'
import { Props } from './types'
import style from './modal.module.css'

export const Modal: FC<Props> = ({ title, body, footer, close, ...props }): JSX.Element => {
	return (
		<ModalReactBootstrap {...props}>
			<ModalReactBootstrap.Header>
				<div
					className={`${style.header} col-md-12 d-flex align-items-center justify-content-between`}
				>
					<Title className="h5">{title}</Title>
					<Close onClick={close} />
				</div>
			</ModalReactBootstrap.Header>
			<ModalReactBootstrap.Body>{body}</ModalReactBootstrap.Body>
			{footer && <ModalReactBootstrap.Footer>{footer}</ModalReactBootstrap.Footer>}
		</ModalReactBootstrap>
	)
}
