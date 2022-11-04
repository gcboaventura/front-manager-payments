import { FC } from 'react'
import { CreditCardComponent } from '@/components'
import { Props } from './types'

export const PaymentMethod: FC<Props> = ({ ...props }): JSX.Element => {
	return (
		<div className="d-flex align-items-start justify-content-center">
			<CreditCardComponent {...props} preview focused="name" />
		</div>
	)
}
