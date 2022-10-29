import { FC } from 'react'
import { Alert, Button, CreditCardComponent, Pencil, Title, Trash } from '@/components'
import { Props } from './types'
import style from './currentcard.module.css'

export const CurrentCard: FC<Props> = ({ deleteCard, editCard, addPayment }): JSX.Element => {
	const haveCard: boolean = false

	const havePayPal: boolean = false

	return (
		<>
			{!haveCard && !havePayPal && (
				<div className="bg-white rounded-3 p-3 shadow-sm">
					<div className="col-md-12 d-flex align-items-center justify-content-center">
						<Alert className={style.alert} />
						<Title className="h5 text-secondary">
							Você não possui meios de pagamento cadastrado.
						</Title>
					</div>
					<div className="d-flex col-md-12 align-items-center justify-content-center mt-2">
						<Button children="Cadastrar agora" onClick={addPayment} />
					</div>
				</div>
			)}

			{haveCard && !havePayPal && (
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
			)}

			{havePayPal && !haveCard && (
				<div className="bg-white rounded-3 p-3 shadow-sm">
					<div className="col-md-12 d-flex align-items-center justify-content-center">
						<Alert className={style.alert} />
						<Title className="h5 text-secondary">
							Você não possui meios de pagamento cadastrado.
						</Title>
					</div>
					<div className="d-flex col-md-12 align-items-center justify-content-center mt-2">
						<Button children="Cadastrar agora" onClick={addPayment} />
					</div>
				</div>
			)}
		</>
	)
}
