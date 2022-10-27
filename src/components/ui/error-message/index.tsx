import { FC } from 'react'
import { Props } from './types'
import style from './errormessage.module.css'

export const ErrorMessage: FC<Props> = ({ children, error, ...props }): JSX.Element => {
	return (
		<span className={error ? `${style.error} ${props.className}` : props.className} {...props}>
			{children}
		</span>
	)
}
