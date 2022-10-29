import { CreditCardForm } from '@/sections/payment/credit-card'
import { FC } from 'react'
import { Props } from './types'

export const EditCreditCard: FC<Props> = ({ ...props }): JSX.Element => {
	const fetchEditCreditCard = (data: any): void => {}

	return (
		<CreditCardForm initialValues={{ ...props }} handleSubmit={fetchEditCreditCard} type="edit" />
	)
}
