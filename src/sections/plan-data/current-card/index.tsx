import { FC } from 'react'
import { CreditCardComponent, Pencil } from '@/components'
import { Props } from './types'
import style from './currentcard.module.css'

export const CurrentCard: FC<Props> = (): JSX.Element => {
	return (
		<div className="d-flex align-items-start justify-content-center">
			<div className="col-md-7">
				<CreditCardComponent
					expiry={'10/2026'}
					name="Guilherme de Carvalho Boaventura"
					number={4179581059547386}
					cvc={100}
					preview
					focused="name"
				/>
			</div>
			<div className="d-flex flex-column bg-white rounded-3 p-2  align-items-center justify-content-between">
				<Pencil className={style.svg} />
			</div>
		</div>
	)
}
