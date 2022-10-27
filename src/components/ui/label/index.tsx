import { FC } from 'react'
import { Props } from './types'

export const Label: FC<Props> = ({ children, ...props }): JSX.Element => {
	return <Label {...props}>{children}</Label>
}
