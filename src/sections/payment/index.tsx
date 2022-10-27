import { FC } from 'react'
import { Row } from 'react-bootstrap'
import { Invoices } from './invoices'
import { NewPaymentOption } from './new-payment-option'
import style from './payment.module.css'

export const Payment: FC = (): JSX.Element => {
	return (
		<section className={style.payment}>
			<div className="container">
				<Row className="col-md-12 pt-5 pb-5">
					<h1>Logo</h1>
				</Row>
				<Row className=" align-items-start justify-content-between">
					<div className="col-md-6">
						<NewPaymentOption />
					</div>

					<div className="col-md-6">
						<Invoices />
					</div>
				</Row>
			</div>
		</section>
	)
}
