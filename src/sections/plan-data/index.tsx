import { FC, ReactNode, useEffect, useState } from 'react'
import { CreditCardForm } from '../payment/credit-card'
import { Row } from 'react-bootstrap'
import { PaymentMethod } from './payment-method'
import { CurrentPlan } from './current-plan'
import { KPIs } from './kpis'
import { Invoices } from './invoices'
import { Modal } from '@/components'
import { NewPaymentOption } from '../payment/new-payment-option'
import { AboutPlan } from './about-plan'
import { EditPlan } from './edit-plan'
import { DeleteCreditCard } from './delete-credit-card'
import { PayPalForm } from '../payment/paypal'
import { DeletePayPal } from './delete-paypal'
import { useDispatch, useSelector } from 'react-redux'
import { GetAccountActions } from '@/store/account/get/action'
import { RootState } from '@/store/config-store'
import style from './plandata.module.css'

export const PlanData: FC = (): JSX.Element => {
	const [show, setShow] = useState<boolean>(false)

	const [title, setTitle] = useState<string>('')

	const [body, setBody] = useState<ReactNode>()

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(GetAccountActions.fetchGetAccount({ id: 0 }))
	}, [])

	const { account } = useSelector((state: RootState) => ({
		account: state.account.get
	}))

	const handleAboutPlan = (): void => {
		setBody(<AboutPlan />)
		setTitle('Sobre o plano contratado')
		setShow(true)
	}

	const handleEditPlan = (): void => {
		setBody(<EditPlan onSuccess={() => setShow(false)} />)
		setTitle('Editar plano')
		setShow(true)
	}

	const handleEditCreditCard = (): void => {
		setBody(
			<CreditCardForm
				initialValues={{
					card_number: '4179581059547386',
					cvv: '100',
					name: 'Guilherme de Carvalho Boaventura',
					validate: '10/2026'
				}}
				type="edit"
				onSuccess={() => setShow(false)}
			/>
		)
		setTitle('Editar cartão de crédito')
		setShow(true)
	}

	const handleDeleteCreditCard = (): void => {
		setBody(<DeleteCreditCard close={() => setShow(false)} id={1} />)
		setTitle('Excluir cartão de crédito')
		setShow(true)
	}

	const handleAddPayment = (): void => {
		setBody(<NewPaymentOption type="register" onSuccess={() => setShow(false)} />)
		setTitle('Adicionar pagamento')
		setShow(true)
	}

	const handleEditPayPal = (): void => {
		setBody(
			<PayPalForm
				initialValues={{ paypal_email: 'guilherme.boaventura@involucro.com.br' }}
				type="edit"
				onSuccess={() => setShow(false)}
			/>
		)
		setTitle('Editar e-mail de pagamento')
		setShow(true)
	}

	const handleDeletePayPal = (): void => {
		setBody(<DeletePayPal close={() => setShow(false)} id={1} />)
		setTitle('Excluir e-mail PayPal')
		setShow(true)
	}

	const handleViewInvoice = (url: string, name: string): void => {
		setBody(
			<div
				style={{
					backgroundImage: `url(${url})`,
					minWidth: '600px',
					minHeight: '600px',
					width: '100%',
					height: '100%',
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}
			></div>
		)
		setTitle('Fatura ' + name)
		setShow(true)
	}

	return (
		<>
			<section className={style.section}>
				<div className="container pt-5">
					<Row className="col-md-12 pt-5 pb-5">
						<img className={style.logo} src="/img/logo-primage-white.png" />
					</Row>

					<Row className="align-items-center justify-content-between">
						<div className="col-md-6">
							<CurrentPlan aboutPlan={handleAboutPlan} editPlan={handleEditPlan} />
						</div>
						<div className="col-md-6">
							<PaymentMethod
								addPayment={handleAddPayment}
								deleteCard={handleDeleteCreditCard}
								editCard={handleEditCreditCard}
								deletePayPal={handleDeletePayPal}
								editPayPal={handleEditPayPal}
							/>
						</div>
					</Row>
					<div className="col-md-12">
						<KPIs />
					</div>
					<div className="col-md-12">
						<Invoices view={(url: string, name: string) => handleViewInvoice(url, name)} />
					</div>
				</div>
			</section>

			<Modal size="lg" body={body} close={() => setShow(false)} show={show} title={title} />
		</>
	)
}
