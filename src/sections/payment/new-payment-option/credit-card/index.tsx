import { FC } from 'react'
import { Row } from 'react-bootstrap'
import { schemaCreditCard } from './shema'
import { FormValues } from './types'
import {
	Button,
	Calendar,
	CreditCard as CreditCardIcon,
	Form,
	LockClosed,
	MaskInput,
	Plus
} from '../../../../components'
import style from './creditcard.module.css'

export const CreditCard: FC = (): JSX.Element => {
	return (
		<Form<FormValues>
			initialValues={{
				card_number: '',
				cvv: '',
				validate: ''
			}}
			onSubmit={(values: FormValues) => console.log(values)}
			validationSchema={schemaCreditCard}
			children={
				<>
					<MaskInput
						label="Número do cartão"
						name="card_number"
						type="text"
						mask="0000 0000 0000 0000"
						placeholder="0000 0000 0000 0000"
						required
						icon={<CreditCardIcon />}
					/>

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

						<Button type="submit" variant="outline-primary" icon={<Plus />} children="Adicionar" />
					</div>
				</>
			}
		/>
	)
}