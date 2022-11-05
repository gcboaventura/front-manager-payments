import { FC, useEffect, useState } from 'react'
import {
	Calendar,
	LockClosed,
	MaskInput,
	TextInput,
	Form,
	Button,
	Select,
	Refresh
} from '@/components'
import { CreditCard as CreditCardIcon } from '@/components/icons/credit-card'
import { Row } from 'react-bootstrap'
import { schema } from './schema'
import { FormValues, Props } from './types'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/config-store'
import { DocumentType, Gender, ResponseGetAllPlans, ResponseGetCep, TypePesron } from '@/models'
import { Option } from '@/components/ui/select/types'
import { GetCepActions } from '@/store/cep/action'
import { DateUtils } from '@/utils'
import { AddSignatureActions } from '@/store/signature/add/action'
import style from './index.module.css'
import { GetAllPlansActions } from '@/store/plans/get/action'

export const FormSignature: FC<Props> = ({ onSuccess }): JSX.Element => {
	const dateHelper = new DateUtils()

	const [initial, setInitial] = useState<FormValues>({
		name: '',
		type: '',
		email: '',
		document_type: '',
		document: '',
		gender: '',
		mobile_phone: '',
		birthdate: '',
		zip_code: '',
		country: '',
		state: '',
		city: '',
		district: '',
		road: '',
		number: '',
		complement: '',
		plan_id: '',
		start_at: dateHelper.currentDate(),
		holder_name: '',
		card_number: '',
		validate: '',
		cvv: ''
	})

	const [mask, setMask] = useState<string>('')

	const [refresh, setRefresh] = useState<number>(0)

	const [labelDocument, setLabelDocument] = useState<string>('Nº do documento')

	const [arrayPlans, setArrayPlans] = useState<Option[]>([])

	const dispatch = useDispatch()

	const fetchGetPlans = (): void => {
		dispatch(GetAllPlansActions.fetchGetAllPlans({}))
	}

	useEffect(() => {
		fetchGetPlans()
	}, [refresh])

	const fetchGetCep = (value: string, setFieldValue: any): void => {
		if (value.length === 9) {
			dispatch(
				GetCepActions.fetchGetCep({
					cep: value,
					onSuccess: (data: ResponseGetCep) => {
						setFieldValue('country', 'Brasil')
						setFieldValue('state', data.uf)
						setFieldValue('district', data.bairro)
						setFieldValue('road', data.logradouro)
						setFieldValue('city', data.localidade)
					}
				})
			)
		}
	}

	const fetchAddSignature = (values: FormValues): void => {
		dispatch(
			AddSignatureActions.fetchAddSignature({
				plan_id: values.plan_id,
				payment_method: 'credit_card',
				start_at: dateHelper.toApi(values.start_at),
				customer: {
					name: values.name,
					type: values.type as TypePesron,
					email: values.email,
					document: values.document.replaceAll('.', '').replaceAll('-', ''),
					document_type: values.document_type as DocumentType,
					gender: values.gender as Gender,
					phones: {
						mobile_phone: {
							country_code: '55',
							area_code: values.mobile_phone.substring(1, 3),
							number: values.mobile_phone.substring(4, 16).replaceAll(' ', '').replace('-', '')
						}
					},
					birthdate: dateHelper.toApi(values.birthdate),
					address: {
						zip_code: values.zip_code.replace('-', ''),
						city: values.city,
						country: 'BR',
						state: `BR-${values.state}`,
						line_1: `${values.number}, ${values.road}, ${values.district}`,
						line_2: values.complement || ''
					}
				},
				card: {
					billing_address: {
						zip_code: values.zip_code.replace('-', ''),
						city: values.city,
						country: 'BR',
						state: `BR-${values.state}`,
						line_1: `${values.number}, ${values.road}, ${values.district}`,
						line_2: values.complement || ''
					},
					cvv: values.cvv,
					holder_name: values.holder_name,
					number: values.card_number.replaceAll(' ', ''),
					exp_month: parseInt(values.validate.split('/')[0]),
					exp_year: parseInt(values.validate.split('/')[1])
				},
				onSuccess: (data: any) => onSuccess && onSuccess(data)
			})
		)
	}

	const { plans } = useSelector((state: RootState) => ({
		plans: state.plans.getAll
	}))

	useEffect(() => {
		let arr: Option[] = []
		plans.data.map((x: ResponseGetAllPlans) => {
			arr.push({
				name: x.name,
				value: x.id
			})
		})
		setArrayPlans(arr)
	}, [plans])

	const handleMask = (document: 'CPF' | 'CNPJ' | 'PASSAPORTE'): void => {
		switch (document) {
			case 'CNPJ':
				setMask('00.000.000/0000-00')
				setLabelDocument('Informe o CNPJ')
				break

			case 'CPF':
				setMask('000.000.000-00')
				setLabelDocument('Informe o CPF')
				break

			case 'PASSAPORTE':
				setMask('00000000')
				setLabelDocument('Informe o Passaporte')
				break

			default:
				break
		}
	}

	return (
		<>
			<Form<FormValues>
				initialValues={initial}
				onSubmit={(values: FormValues) => fetchAddSignature(values)}
				validationSchema={schema}
			>
				{({ values, setFieldValue }) => {
					return (
						<>
							<div>
								<p>Dados pessoais</p>

								<Row className="d-flex">
									<div className="col-md-6">
										<TextInput name="name" label="Nome completo" required />
									</div>

									<div className="col-md-6">
										<TextInput required type="email" name="email" label="Seu melhor email" />
									</div>

									<div className="col-md-4 mt-2">
										<Select
											name="type"
											label="Tipo de pessoa"
											required
											options={[
												{
													name: 'Selecione ...',
													value: ''
												},
												{
													name: 'Pessoa física',
													value: 'individual'
												},
												{
													name: 'Pessoa jurídica',
													value: 'company'
												}
											]}
										/>
									</div>
									<div className="col-md-4 mt-2">
										<Select
											name="document_type"
											label="Tipo de documento"
											required
											onChangeVal={handleMask}
											options={[
												{
													name: 'Selecione ...',
													value: ''
												},
												{
													name: 'CPF',
													value: 'CPF'
												},
												{
													name: 'CNPJ',
													value: 'CNPJ'
												},
												{
													name: 'Passaport',
													value: 'PASSAPORTE'
												}
											]}
										/>
									</div>

									<div className="col-md-4 mt-2">
										<MaskInput
											required
											mask={mask}
											type="text"
											name="document"
											label={labelDocument}
										/>
									</div>

									<div className="col-md-4 mt-2">
										<Select
											name="gender"
											label="Sexo"
											required
											options={[
												{
													name: 'Selecione ...',
													value: ''
												},
												{
													name: 'Masculino',
													value: 'male'
												},
												{
													name: 'Feminino',
													value: 'female'
												}
											]}
										/>
									</div>
									<div className="col-md-4 mt-2">
										<MaskInput
											required
											mask="(00) 0 0000-0000"
											type="text"
											name="mobile_phone"
											label="Celular"
										/>
									</div>
									<div className="col-md-4 mt-2">
										<MaskInput
											required
											mask="00/00/0000"
											type="text"
											name="birthdate"
											label="Data de nascimento"
										/>
									</div>
								</Row>
							</div>

							<div className="mt-3">
								<p>Endereço</p>

								<Row className="d-flex">
									<div className="col-md-2">
										<MaskInput
											type="text"
											mask="00000-000"
											required
											name="zip_code"
											label="Cep"
											onChangeVal={(value: string) => fetchGetCep(value, setFieldValue)}
										/>
									</div>
									<div className="col-md-3">
										<TextInput type="text" name="country" label="País" required disabled />
									</div>
									<div className="col-md-3">
										<TextInput type="text" name="state" label="Estado" required disabled />
									</div>
									<div className="col-md-4">
										<TextInput type="text" name="city" label="Cidade" required disabled />
									</div>
									<div className="col-md-4 mt-2">
										<TextInput type="text" name="district" label="Bairro" required />
									</div>
									<div className="col-md-6 mt-2">
										<TextInput type="text" name="road" label="Rua" required />
									</div>
									<div className="col-md-2 mt-2">
										<TextInput type="text" name="number" label="Número" required />
									</div>
									<div className="col-md-12 mt-2">
										<TextInput type="text" name="complement" label="Complemento" />
									</div>
								</Row>
							</div>

							<div className="mt-5">
								<p>Plano</p>

								<Row className="d-flex">
									<div className="d-flex align-items-center col-md-8">
										<div className="col-md-11">
											<Select
												name="plan_id"
												label="Plano escolhido"
												required
												options={arrayPlans}
											/>
										</div>
										<div className="col-md-1">
											<Refresh className={style.refresh} onClick={() => setRefresh(refresh + 1)} />
										</div>
									</div>

									<div className="col-md-4">
										<MaskInput
											required
											disabled
											mask="00/00/0000"
											type="text"
											name="start_at"
											label="Data de início"
										/>
									</div>
								</Row>
							</div>

							<div className="mt-5">
								<p>Pagamento</p>

								<Row className="d-flex">
									<div className="col-md-6">
										<TextInput
											label="Nome impresso no cartão"
											type="text"
											name="holder_name"
											required
										/>
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
											placeholder="00/0000"
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
								</Row>
							</div>

							<div className="mt-3">
								<p>Endereço de cobrança</p>
								{values.road && (
									<span>
										{values.road}, {values.number}, {values.district}, {values.city},{' '}
										{values.zip_code} - {values.state}, {values.country}
									</span>
								)}
							</div>

							<div className="d-flex align-items-center justify-content-between mt-3">
								<div className="d-flex align-items-center justify-content-start">
									<div className={style.lockIcon}>
										<LockClosed />
									</div>
									<span className="text-muted certificate-text">
										Sua transação está protegida com certificado SSL
									</span>
								</div>

								<Button type="submit" variant="outline-primary" icon="" children="Assinar" />
							</div>
						</>
					)
				}}
			</Form>
		</>
	)
}
