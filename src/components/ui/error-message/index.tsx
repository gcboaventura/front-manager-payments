import { FC } from 'react'
import { Props } from './types'

export const ErrorMessage: FC<Props> = ({ children, ...props }): JSX.Element => {
	return <span {...props}>{children}</span>
}
