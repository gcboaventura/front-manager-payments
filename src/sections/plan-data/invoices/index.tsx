import { FC } from 'react'
import { File, Title } from '@/components'
import { DateUtils } from '@/utils'
import style from './index.module.css'

export const Invoices: FC = (): JSX.Element => {
	const dateHelper = new DateUtils()

	interface Item {
		date: string
		status: string
		link: string
	}

	const items: Item[] = [
		{
			date: dateHelper.toIso('10/03/2022'),
			link: 'sfhvjklsdf',
			status: 'Fechada'
		},
		{
			date: dateHelper.toIso('10/03/2022'),
			link: 'sfhvjklsdf',
			status: 'Aberta'
		},
		{
			date: dateHelper.toIso('10/03/2022'),
			link: 'sfhvjklsdf',
			status: 'Fechada'
		},
		{
			date: dateHelper.toIso('10/03/2022'),
			link: 'sfhvjklsdf',
			status: 'Fechada'
		},
		{
			date: dateHelper.toIso('10/03/2022'),
			link: 'sfhvjklsdf',
			status: 'Fechada'
		},
		{
			date: dateHelper.toIso('10/03/2022'),
			link: 'sfhvjklsdf',
			status: 'Fechada'
		},
		{
			date: dateHelper.toIso('10/03/2022'),
			link: 'sfhvjklsdf',
			status: 'Fechada'
		}
	]

	return (
		<>
			<Title className="h4">Faturas</Title>
			{items.map((x: Item, index: number) => (
				<div
					key={index}
					className="d-flex align-items-center justify-content-between shadow-sm rounded-3 p-3 mt-3 mb-3 bg-white"
				>
					<div className="col-md-6">
						<span className="text-dark">{dateHelper.formatDateString(x.date)}</span>
					</div>
					<div className="col-md-4 text-center">
						<span className={style[x.status === 'Fechada' ? 'closed' : 'open']}>{x.status}</span>
					</div>
					<div className="col-md-2 text-center">
						<span className={style.wrapperLink}>
							<File />
							<a download={x.link} className={style.link}>
								Baixar
							</a>
						</span>
					</div>
				</div>
			))}
		</>
	)
}
