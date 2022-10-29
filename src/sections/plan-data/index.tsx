import { FC, ReactNode, useState } from 'react'
import { Row } from 'react-bootstrap'
import { CurrentCard } from './current-card'
import { CurrentPlan } from './current-plan'
import { KPIs } from './kpis'
import { Invoices } from './invoices'
import { Modal } from '@/components'
import { AboutPlan, DeleteCreditCard, EditCreditCard, EditPlan } from './screen-actions'
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
			<EditCreditCard
				card_number="000000000000"
				cvv="000"
				name="Guilherme De C Boaventura"
				validate="06/2026"
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
							<CurrentCard deleteCard={handleDeleteCreditCard} editCard={handleEditCreditCard} />
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
