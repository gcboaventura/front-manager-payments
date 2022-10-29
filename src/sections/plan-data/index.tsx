import { FC, ReactNode, useState } from 'react'
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
import style from './plandata.module.css'

export const PlanData: FC = (): JSX.Element => {
	const [show, setShow] = useState<boolean>(false)

	const [title, setTitle] = useState<string>('')

	const [body, setBody] = useState<ReactNode>()

	const handleAboutPlan = (): void => {
		setBody(<AboutPlan />)
		setTitle('Sobre o plano contratado')
		setShow(true)
	}

	const handleEditPlan = (): void => {
		setBody(<EditPlan />)
		setTitle('Editar plano')
		setShow(true)
	}

	const handleEditCreditCard = (): void => {
		setBody(
			<CreditCardForm
				initialValues={{
					card_number: '0000000000000',
					cvv: '000',
					name: 'Teste',
					validate: '06/2026'
				}}
				type="edit"
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

	const handleRegisterCreditCard = (): void => {}

	const handleAddPayment = (): void => {
		setBody(<NewPaymentOption type="register" />)
		setTitle('Adicionar pagamento')
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
							/>
						</div>
					</Row>
					<div className="col-md-12">
						<KPIs />
					</div>
					<div className="col-md-12">
						<Invoices />
					</div>
				</div>
			</section>

			<Modal size="lg" body={body} close={() => setShow(false)} show={show} title={title} />
		</>
	)
}
