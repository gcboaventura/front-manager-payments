import { FC } from 'react'
import { Accordion, Card } from 'react-bootstrap'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import { Button } from '@/components'
import { CreditCard } from './credit-card'
import { PayPal } from './paypal'

export const NewPaymentOption: FC = (): JSX.Element => {
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
								<PayPal />
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
								<CreditCard />
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
			</div>
		</>
	)
}
