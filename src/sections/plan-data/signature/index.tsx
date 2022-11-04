import { Calendar, LockClosed, MaskInput, TextInput, Form, Button } from '@/components'
import { CreditCard as CreditCardIcon } from '@/components/icons/credit-card'
import { FC } from 'react'
import { Row } from 'react-bootstrap'
import { schema } from './schema'
import { FormValues } from './types'
import style from './index.module.css'

export const Signature: FC = (): JSX.Element => {
	return (
		<>
			<Form initialValues={{}} onSubmit={(values: FormValues) => {}} validationSchema={schema}>
				{() => (
					<>
						<div className="mb-3">
							<TextInput label="Nome impresso no cartão" type="email" name="name" required />
						</div>

						<div>
							<MaskInput
								label="Número do cartão"
								name="card_number"
								type="text"
								mask="0000 0000 0000 0000"
								placeholder="0000 0000 0000 0000"
								required
								icon={<CreditCardIcon />}
							/>
						</div>

						<Row className="mt-3 align-items-center justify-content-between">
							<div className="col-md-6">
								<MaskInput
									label="Data de vencimento"
									name="validate"
									type="text"
									mask="00/0000"
									placeholder="00/0000"
									required
									icon={<Calendar />}
								/>
							</div>

							<div className="col-md-6">
								<MaskInput
									label="CVC/CVV"
									name="cvv"
									type="text"
									mask="000"
									placeholder="000"
									required
									icon={<LockClosed />}
								/>
							</div>
						</Row>

						<div className="d-flex align-items-center justify-content-between mt-3">
							<div className="d-flex align-items-center justify-content-start">
								<div className={style.lockIcon}>
									<LockClosed />
								</div>
								<span className="text-muted certificate-text">
									Sua transação está protegida com certificado SSL
								</span>
							</div>

							<Button type="submit" variant="outline-primary" icon="" children="" />
						</div>
					</>
				)}
			</Form>
		</>
	)
}
