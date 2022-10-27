import { HTMLAttributes } from 'react'

export interface Props extends HTMLAttributes<HTMLSpanElement> {
	children: string
	error?: boolean
}
