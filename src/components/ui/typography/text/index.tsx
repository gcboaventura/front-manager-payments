import { FC } from 'react'
import { Props } from './types'

export const Text: FC<Props> = ({ className, children, ...props }): JSX.Element => {
	return (
		<p className={className} {...props}>
			{children}
		</p>
	)
}
