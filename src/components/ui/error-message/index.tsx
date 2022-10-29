import { FC } from 'react'
import { Props } from './types'
import style from './index.module.css'

export const ErrorMessage: FC<Props> = ({ children, error, ...props }): JSX.Element => {
	return (
		<p className={error ? `${style.error} ${props.className}` : props.className} {...props}>
			{children}
		</p>
	)
}
