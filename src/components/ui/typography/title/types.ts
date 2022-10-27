import { HtmlHTMLAttributes } from 'react'

export interface Props extends HtmlHTMLAttributes<HTMLParagraphElement> {
	children: string
}
