import { PropsAlert } from '@/store/alert/state'
import { FC } from 'react'
import { Alert } from '../alert'
import { Props } from './types'
import style from './index.module.css'

export const Snack: FC<Props> = ({ data }): JSX.Element => {
	return (
		<div className={style.snack}>
			{data.map((x: PropsAlert) => (
				<Alert {...x} time={x.time || 5000} />
			))}
		</div>
	)
}
