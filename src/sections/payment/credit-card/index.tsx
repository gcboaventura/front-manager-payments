import { FC } from 'react'
import { Row } from 'react-bootstrap'
import { schemaCreditCard } from './shema'
import { FormValues, Props } from './types'
import { useDispatch } from 'react-redux'
import { AddCreditCardActions } from '@/store/credit-card/add/action'
import { UpdateCreditCardActions } from '@/store/credit-card/update/action'
import {
	Button,
	Calendar,
	CreditCard as CreditCardIcon,
	Form,
	LockClosed,
	MaskInput,
	Pencil,
	Plus,
	TextInput
} from '@/components'
import style from './index.module.css'

export const CreditCardForm: FC<Props> = ({ initialValues, type, onSuccess }): JSX.Element => {
	const dispatch = useDispatch()

	const fetchAddCreditCard = (values: FormValues): void => {
		dispatch(AddCreditCardActions.fetchAddCreditCard({ ...values, onSuccess }))
	}

	const fetchEditCreditCard = (values: FormValues): void => {
		dispatch(UpdateCreditCardActions.fetchUpdateCreditCard({ id: 0, ...values, onSuccess }))
	}

	return (
		<Form<FormValues>
			initialValues={
				initialValues
					? initialValues
					: {
							name: '',
							card_number: '',
							cvv: '',
							validate: ''
					  }
			}
			onSubmit={(values: FormValues) =>
				type === 'edit' ? fetchEditCreditCard(values) : fetchAddCreditCard(values)
			}
			validationSchema={schemaCreditCard}
		>
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

						<Button
							type="submit"
							variant="outline-primary"
							icon={type === 'register' ? <Plus /> : <Pencil />}
							children={type === 'register' ? 'Adicionar' : 'Editar'}
						/>
					</div>
				</>
			)}
		</Form>
	)
}
