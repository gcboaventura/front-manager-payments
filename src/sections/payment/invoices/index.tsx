import { FC } from 'react'
import style from './invoices.module.css'

export const Invoices: FC = (): JSX.Element => {
	return (
		<div className={`${style.wrapper} col-md-12 p-3 rounded-2`}>
			<h1>Invoices</h1>
		</div>
	)
}
