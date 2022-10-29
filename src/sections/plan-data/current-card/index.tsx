import { FC } from 'react'
import { CreditCardComponent, Pencil, Trash } from '@/components'
import { Props } from './types'
import style from './currentcard.module.css'

export const CurrentCard: FC<Props> = ({ deleteCard, editCard }): JSX.Element => {
	return (
		<div className="d-flex align-items-start justify-content-center">
			<div>
				<CreditCardComponent
					expiry={'10/2026'}
					name="Guilherme de Carvalho Boaventura"
					number={4179581059547386}
					cvc={100}
					preview
					focused="name"
				/>
			</div>
			<div>
				<div className="bg-white rounded-3 p-2 mb-2">
					<Pencil className={style.svg} onClick={editCard} />
				</div>
				<div className="bg-white rounded-3 p-2 mb-2">
					<Trash className={style.svg} onClick={deleteCard} />
				</div>
			</div>
		</div>
	)
}
