import { FC } from 'react'
import { Alert, Button, CreditCardComponent, Paypal, Pencil, Title, Trash } from '@/components'
import { Props } from './types'
import style from './index.module.css'

export const PaymentMethod: FC<Props> = ({
	deleteCard,
	editCard,
	addPayment,
	editPayPal,
	deletePayPal
}): JSX.Element => {
	const haveCard: boolean = false

	const havePayPal: boolean = true

	return (
		<>
			{!haveCard && !havePayPal && (
				<div className={`${style.card} bg-white rounded-3 p-3 shadow-sm`}>
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
				<div className="col-md-12 d-flex align-items-start justify-content-center">
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
						<div className={`${style.wrapperIcon} bg-white rounded-3 p-2 mb-2`}>
							<Pencil className={style.svg} onClick={editCard} />
						</div>
						<div className={`${style.wrapperIcon} bg-white rounded-3 p-2 mb-2`}>
							<Trash className={style.svg} onClick={deleteCard} />
						</div>
					</div>
				</div>
			)}

			{havePayPal && !haveCard && (
				<div className={`${style.card} bg-white rounded-3 p-3 shadow-sm`}>
					<div className="col-md-12 d-flex align-items-center justify-content-between">
						<Title className="h5 text-secondary">Metódo de pagamento:</Title>
						<div className="d-flex align-items-center justify-content-start">
							<Trash className={style.option} onClick={deletePayPal} />
							<Pencil className={style.option} onClick={editPayPal} />
						</div>
					</div>
					<div className="col-md-12 d-flex align-items-center justify-content-start">
						<Paypal className={style.paypal} />
						<Title className="h6 text-secondary">guilherme.boaventura@involucro.com.br</Title>
						<div></div>
					</div>
				</div>
			)}
		</>
	)
}
