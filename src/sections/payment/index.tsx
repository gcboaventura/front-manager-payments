import { FC } from 'react'
import { Row } from 'react-bootstrap'
import { Invoices } from './invoices'
import { NewPaymentOption } from './new-payment-option'

export const Payment: FC = (): JSX.Element => {
	return (
		<div>
			<div className="container">
				<Row className="align-items-start justify-content-between">
					<div className="col-md-6">
						<NewPaymentOption />
					</div>

					<div className="col-md-6">
						<Invoices />
					</div>
				</Row>
			</div>
		</div>
	)
}
