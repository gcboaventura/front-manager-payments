import { Button, File, Title } from '@/components'
import { FC } from 'react'
import { Invoice } from './types'
import { DateUtils, MoneyUtils } from '@/utils'
import style from './invoices.module.css'

export const Invoices: FC = (): JSX.Element => {
	const moneyUtils = new MoneyUtils()

	const dateUtils = new DateUtils()

	const invoicesList: Invoice[] = [
		{
			date: dateUtils.toIso('10/03/2022'),
			value: 101545.72,
			file: '/file.pdf',
			id: '#ABC123'
		}
	]

	return (
		<div className={`${style.wrapper} col-md-12 p-3 rounded-1`}>
			<div className="d-flex align-items-start justify-content-between mb-4">
				<Title className="h3">Faturas</Title>
				<Button children="Ver todas" variant="outline-primary" />
			</div>

			<div>
				{invoicesList.map((x: Invoice) => (
					<div className="d-flex align-items-start justify-content-between">
						<div className="col-md-6">
							<p>
								<strong>{dateUtils.format(x.date)}</strong>
							</p>
							<span>{x.id}</span>
						</div>
						<div className="col-md-6 d-flex align-items-center justify-content-end">
							<span>{moneyUtils.format(x.value)}</span>
							<a href={x.file}>
								<File />
								PDF
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
