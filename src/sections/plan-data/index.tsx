import { FC, ReactNode, useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import { KPIs } from './kpis'
import { Invoices } from './invoices'
import { Loading, Modal } from '@/components'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/config-store'
import { UserHelper } from '@/utils'
import style from './index.module.css'
import { User } from '@/models'
import { NotUser } from './not-user'
import { FormSignature } from './form-signature'

export const PlanData: FC = (): JSX.Element => {
	const [show, setShow] = useState<boolean>(false)

	const [title, setTitle] = useState<string>('')

	const [body, setBody] = useState<ReactNode>()

	const [user, setuser] = useState<User | null>(null)

	const dispatch = useDispatch()

	const { plans, isLoading } = useSelector((state: RootState) => ({
		plans: state.plans.getAll,
		isLoading: state.plans.getAll.isLoading || state.plans.update.isLoading
	}))

	const userLocal = new UserHelper().get()

	if (user) {
		setuser(userLocal)
	}

	useEffect(() => {}, [])

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

	const handleAddPlan = (): void => {
		setBody(<FormSignature />)
		setTitle('Assinar')
		setShow(true)
	}
	return (
		<>
			<section className={style.section}>
				<div className="container pt-5">
					<Row className="col-md-12 pt-5 pb-5">
						<img className={style.logo} src="/img/logo-primage-white.png" />
					</Row>

					<div className={`${style.payment} col-md-12 bg-white rounded-3 shadow-sm`}>
						{!user && <NotUser addPlan={handleAddPlan} />}
					</div>

					{user && (
						<>
							<div className="col-md-12">
								<KPIs />
							</div>
							<div className="col-md-12">
								<Invoices view={(url: string, name: string) => handleViewInvoice(url, name)} />
							</div>
						</>
					)}
				</div>
			</section>

			<Modal size="lg" body={body} close={() => setShow(false)} show={show} title={title} />

			<Loading show={isLoading} />
		</>
	)
}
