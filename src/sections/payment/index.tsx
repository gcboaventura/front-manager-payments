import { FC } from 'react'
import { NewCard } from './new-card'
import style from './payment.module.css'

export const Payment: FC = (): JSX.Element => {
	return (
		<section className={style.payment}>
			<div className="container">
				<NewCard />
			</div>
		</section>
	)
}
