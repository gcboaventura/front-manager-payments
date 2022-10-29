import { FC } from 'react'
import { Form } from 'react-bootstrap'
import { Props } from './types'
import style from './index.module.css'

export const Label: FC<Props> = ({ children, error, ...props }): JSX.Element => {
	return (
		<Form.Label
			className={error ? `${style.error} ${props.className}` : props.className}
			{...props}
		>
			{children}
		</Form.Label>
	)
}
