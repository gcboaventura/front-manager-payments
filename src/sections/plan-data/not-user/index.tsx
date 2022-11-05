import { FC } from 'react'
import { Alert } from '@/components/icons/alert'
import { Button } from '@/components'
import { Props } from './types'
import style from './index.module.css'

export const NotUser: FC<Props> = ({ addPlan }): JSX.Element => {
	return (
		<div className="bg-white rounded-3 shadow-lg d-flex flex-column justify-content-center align-items-center">
			<Alert className={style.svg} />
			<h1 className={style.title}>Você não possui plano</h1>
			<Button children="Assine agora" onClick={addPlan} className={style.button} />
		</div>
	)
}
