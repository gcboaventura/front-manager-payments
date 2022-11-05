import { FC } from 'react'
import { CreditCardComponent, Title, Caption, Text } from '@/components'
import { RootState } from '@/store/config-store'
import { useSelector } from 'react-redux'
import { MoneyUtils } from '@/utils'
import { BillingType, Interval } from '@/models'

export const InfoSignature: FC = (): JSX.Element => {
	const { signature } = useSelector((state: RootState) => ({
		signature: state.signatue.get.data
	}))

	const moneyHelper = new MoneyUtils()

	const handleBilling = (info: BillingType): string => {
		switch (info) {
			case 'prepaid':
				return 'pré pago'
			case 'postpaid':
				return 'pós pago'
			case 'exact_day':
				return 'Dia exato'
			default:
				return ''
		}
	}

	const handleTrial = (info: Interval): string => {
		switch (info) {
			case 'day':
				return 'diário'
			case 'month':
				return 'mensal'
			case 'week':
				return 'semanal'
			case 'year':
				return 'anual'
			default:
				return ''
		}
	}

	return (
		<div className="d-flex">
			<div className="col-md-6 bg-white rounded-2 shadow-sm p-3">
				<div className="d-flex">
					<div className="col-md-11">
						<Caption className="h4 text-secondary">Seu plano</Caption>
						<Title className="h3">{moneyHelper.format(signature.plan.minimum_price || 0)}</Title>
						<p className="h6 text-secondary">
							{handleBilling(signature?.billing_type)} - {handleTrial(signature.interval)}
						</p>
					</div>
					<div className="col-md-1"></div>
				</div>
			</div>
			<div className="col-md-6">
				<CreditCardComponent
					cvc={signature.card.cvv || ''}
					expiry={
						`${
							String(signature.card.exp_month).length === 1
								? `0${signature.card.exp_month}`
								: signature.card.exp_month
						}/${signature.card.exp_year}` || ''
					}
					name={signature.card.holder_name || ''}
					number={`************${signature.card.last_four_digits}`}
					preview
					focused="name"
					issuer={signature.card.brand}
				/>
			</div>
		</div>
	)
}
