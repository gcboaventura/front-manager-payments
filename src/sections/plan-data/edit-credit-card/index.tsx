import { Button, Calendar, Form, LockClosed, MaskInput, TextInput } from '@/components'
import { FC } from 'react'
import { Row } from 'react-bootstrap'
import { FormValues, Props } from './types'
import { CreditCard as CreditCardIcon } from '@/components/icons/credit-card'
import { schema } from './schema'
import { useDispatch } from 'react-redux'
import { UpdateCreditCardSignatureActions } from '@/store/signature/update-credit-card/action'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/config-store'

export const EditCreditCard: FC<Props> = ({ success }): JSX.Element => {
	const dispatch = useDispatch()

	const { signature } = useSelector((state: RootState) => ({
		signature: state.signatue.get.data
	}))

	const fetchEditCreditCard = (values: FormValues): void => {
		const idSignature = localStorage.getItem('id')
		if (idSignature) {
			dispatch(
				UpdateCreditCardSignatureActions.fetchUpdateCreditCardSignature({
					signature_id: JSON.parse(idSignature),
					card: {
						card_id: signature.card.id || '',
						holder_name: values.holder_name,
						number: values.card_number.replaceAll(' ', ''),
						exp_month: parseInt(values.validate.split('/')[0]),
						exp_year: parseInt(values.validate.split('/')[1]),
						cvv: values.cvv,
						billing_address: signature.card.billing_address
					},
					onSuccess: () => success()
				})
			)
		}
	}

	return (
		<Form<FormValues>
			onSubmit={(values: FormValues) => fetchEditCreditCard(values)}
			initialValues={{
				card_number: '',
				cvv: '',
				holder_name: '',
				validate: ''
			}}
			validationSchema={schema}
		>
			{() => {
				return (
					<Row className="d-flex">
						<div className="col-md-6">
							<TextInput label="Nome impresso no cartão" type="text" name="holder_name" required />
						</div>
						<div className="col-md-6">
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
						<div className="col-md-6 mt-2">
							<MaskInput
								label="Data de vencimento"
								name="validate"
								type="text"
								mask="00/0000"
								placeholder="00/00"
								required
								icon={<Calendar />}
							/>
						</div>
						<div className="col-md-6 mt-2">
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

						<div className="d-flex justify-content-end mt-4">
							<Button children="Editar cartão" type="submit" />
						</div>
					</Row>
				)
			}}
		</Form>
	)
}
