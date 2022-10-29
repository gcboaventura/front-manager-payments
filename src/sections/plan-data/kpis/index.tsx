import { Text, Title } from '@/components'
import { FC } from 'react'
import style from './kpi.module.css'

export const KPIs: FC = (): JSX.Element => {
	return (
		<div className="d-flex flex-wrap align-items-center justify-content-between mt-5 mb-5">
			<div className={`${style.wrapper} bg-white rounded-3`}>
				<Title className="h6 text-secondary">Dispositivos</Title>
				<Text className="h4 text-info">3/3</Text>
			</div>

			<div className={`${style.wrapper} bg-white rounded-3`}>
				<Title className="h6 text-secondary">Atendentes</Title>
				<Text className="h4 text-info">3/6</Text>
			</div>

			<div className={`${style.wrapper} bg-white rounded-3`}>
				<Title className="h6 text-secondary">Mensagens enviadas</Title>
				<Text className="h4 text-info">5.239/out</Text>
			</div>

			<div className={`${style.wrapper} bg-white rounded-3`}>
				<Title className="h6 text-secondary">Mensagens recebidas</Title>
				<Text className="h4 text-info">1.559/out</Text>
			</div>
		</div>
	)
}
