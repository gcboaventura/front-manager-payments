import { FC } from 'react'
import { About, Caption, Pencil, Text, Title } from '@/components'
import { MoneyUtils } from '@/utils'
import { Props } from './types'
import style from './index.module.css'

export const CurrentPlan: FC<Props> = ({ aboutPlan, editPlan }): JSX.Element => {
	const moneyHelper = new MoneyUtils()

	return (
		<div className={`${style.card} d-flex bg-white rounded-3 p-3 shadow-sm`}>
			<div className="col-md-10">
				<Title className="h5 text-secondary">Seu plano</Title>
				<Caption className={`h3 ${style.price}`}>{moneyHelper.format(259.0)}</Caption>
				<Text className="h6 text-secondary">mensal</Text>
			</div>
			<div className="d-flex col-md-2 align-items-start justify-content-end">
				<About className={style.svg} onClick={aboutPlan} />
				<Pencil className={style.svg} onClick={editPlan} />
			</div>
		</div>
	)
}
