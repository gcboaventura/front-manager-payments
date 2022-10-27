import { FC } from 'react'
import { NewPaymentOption } from './new-payment-option'
import style from './payment.module.css'

export const Payment: FC = (): JSX.Element => {
	return (
		<section className={style.payment}>
			<div className="container">
				<NewPaymentOption />
			</div>
		</section>
	)
}
