import { FC } from 'react'
import { Props } from './types'
import Cards from 'react-credit-cards'

export const CreditCardComponent: FC<Props> = ({
	cvc,
	focused,
	name,
	number,
	expiry,
	...props
}): JSX.Element => {
	return (
		<Cards cvc={cvc} name={name} number={number} expiry={expiry} focused={focused} {...props} />
	)
}
