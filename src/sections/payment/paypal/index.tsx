import { FC } from 'react'
import { Button, Email, Form, Plus, TextInput } from '@/components'
import { schemaPayPal } from './schema'
import { FormValues } from './types'

export const PayPal: FC = (): JSX.Element => {
	return (
		<Form<FormValues>
			onSubmit={(values: FormValues) => console.log(values)}
			initialValues={{ paypal_email: '' }}
			validationSchema={schemaPayPal}
		>
			{() => (
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
						<Button type="submit" variant="outline-primary" icon={<Plus />} children="Adicionar" />
					</div>
				</>
			)}
		</Form>
	)
}
