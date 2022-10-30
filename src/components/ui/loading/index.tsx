import { FC } from 'react'
import { LoadingLine } from '@/components/icons'
import { Props } from './types'
import style from './index.module.css'

export const Loading: FC<Props> = ({ show }): JSX.Element => {
	console.log(show)
	return (
		<>
			{show && (
				<div className={style.background}>
					<LoadingLine />
				</div>
			)}
		</>
	)
}
