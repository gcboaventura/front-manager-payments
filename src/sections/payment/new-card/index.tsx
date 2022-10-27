import { FC } from 'react'
import { Accordion, Card, Row } from 'react-bootstrap'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import { CreditCardForm, PaypalForm, schemaPayPal, schemaCreditCard } from './helpers'
import {
	Button,
	Calendar,
	CreditCard,
	Email,
	Form,
	LockClosed,
	Plus,
	TextInput,
	MaskInput
} from '../../../components'
import style from './helpers/newcard.module.css'

export const NewCard: FC = (): JSX.Element => {
	const CustomToggle = (props: any) => {
		const decoratedOnClick = useAccordionButton(props.eventKey)
		return (
			<Button className={props.className} onClick={decoratedOnClick}>
				{props.children}
			</Button>
		)
	}

	return (
		<>
			<div className="pt-3">
				<h1 className="display-3 ">Logo</h1>
			</div>

			<div className="col-md-6">
				<Accordion defaultActiveKey="1">
					<Card className="border-0 rounded-0 rounded-top">
						<CustomToggle eventKey="0" className="btn btn-light rounded-0 rounded-top p-3 w-100">
							<div className="d-flex align-items-center justify-content-between">
								<span>Paypal</span>
								<img src="https://i.imgur.com/7kQEsHU.png" width="30" />
							</div>
						</CustomToggle>
						<Accordion.Collapse eventKey="0">
							<Card.Body>
								<Form<PaypalForm>
									onSubmit={(values: PaypalForm) => console.log(values)}
									initialValues={{ paypal_email: '' }}
									validationSchema={schemaPayPal}
									children={
										<>
											<TextInput
												label="E-mail Paypal"
												type="email"
												aria-required
												name="paypal_email"
												placeholder="joao@gmail.com"
												required
												icon={<Email />}
											/>

											<div className="d-flex align-items-center justify-content-end mt-3">
												<Button
													type="submit"
													variant="outline-primary"
													icon={<Plus />}
													children="Adicionar"
												/>
											</div>
										</>
									}
								/>
							</Card.Body>
						</Accordion.Collapse>
					</Card>

					<Card className="border-0">
						<CustomToggle eventKey="1" className="btn btn-light rounded-0 rounded-bottom p-3 w-100">
							<div className="d-flex align-items-center justify-content-between">
								<span>Cartão de crédito</span>
								<div className="icons">
									<img src="https://i.imgur.com/2ISgYja.png" width="30" />
									<img src="https://i.imgur.com/W1vtnOV.png" width="30" />
									<img src="https://i.imgur.com/35tC99g.png" width="30" />
									<img src="https://i.imgur.com/2ISgYja.png" width="30" />
								</div>
							</div>
						</CustomToggle>

						<Accordion.Collapse eventKey="1">
							<Card.Body>
								<Form<CreditCardForm>
									initialValues={{
										card_number: '',
										cvv: '',
										validate: ''
									}}
									onSubmit={(values: CreditCardForm) => console.log(values)}
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
												icon={<CreditCard />}
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

												<Button
													type="submit"
													variant="outline-primary"
													icon={<Plus />}
													children="Adicionar"
												/>
											</div>
										</>
									}
								/>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</div>
		</>
	)
}
