import { ReactNode } from 'react'
import { ModalProps } from 'react-bootstrap'

export interface Props extends ModalProps {
	title: string
	body: ReactNode
	footer: ReactNode
	show: boolean
	close(): void
}
