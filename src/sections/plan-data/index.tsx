import { FC } from 'react'
import { Row } from 'react-bootstrap'
import { CurrentCard } from './current-card'
import { CurrentPlan } from './current-plan'
import { KPIs } from './kpis'
import { Invoices } from './invoices'
import style from './plandata.module.css'

export const PlanData: FC = (): JSX.Element => {
	return (
		<section className={style.section}>
			<div className="container pt-5">
				<Row className="col-md-12 pt-5 pb-5">
					<img className={style.logo} src="/img/logo-primage-white.png" />
				</Row>

				<Row className="align-items-center justify-content-between">
					<div className="col-md-6">
						<CurrentPlan />
					</div>
					<div className="col-md-6">
						<CurrentCard />
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
	)
}
