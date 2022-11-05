import { FC, useEffect, useState } from 'react'
import { Calendar, LockClosed, MaskInput, TextInput, Form, Button, Select } from '@/components'
import { CreditCard as CreditCardIcon } from '@/components/icons/credit-card'
import { Row } from 'react-bootstrap'
import { schema } from './schema'
import { FormValues } from './types'
import { useDispatch } from 'react-redux'
import { GetAllPlansActions } from '@/store/plans/get/action'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/config-store'
import { ResponseGetAllPlans, ResponseGetCep } from '@/models'
import { Option } from '@/components/ui/select/types'
import { GetCepActions } from '@/store/cep/action'
import { DateUtils } from '@/utils'
import style from './index.module.css'

export const FormSignature: FC = (): JSX.Element => {
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

	const [labelDocument, setLabelDocument] = useState<string>('Nº do documento')

	const [arrayPlans, setArrayPlans] = useState<Option[]>([])

	const dispatch = useDispatch()

	const fetchGetPlans = (): void => {
		dispatch(GetAllPlansActions.fetchGetAllPlans({}))
	}

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
				onSubmit={(values: FormValues) => {
					console.log(values)
				}}
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
									<div className="col-md-8">
										<Select name="plan_id" label="Plano escolhido" required options={arrayPlans} />
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
