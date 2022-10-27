import { HTMLAttributes } from 'react'

export interface Props extends HTMLAttributes<HTMLLabelElement> {
	children: string
}
