import { FC } from 'react'
import { Props } from './types'
import { useField } from 'formik'
import { Form } from 'react-bootstrap'
import { Label } from '../label'
import { ErrorMessage } from '../error-message'
import style from './textinput.module.css'

export const TextInput: FC<Props> = ({
	width,
	variant,
	error,
	label,
	icon,
	name,
	required,
	...props
}): JSX.Element => {
	const [field, meta] = useField(name || 'name')

	const hasError = !!(meta.touched && meta.error)

	return (
		<div>
			{label && <Label error={hasError} children={label} />}
			<div className={style.wrapper}>
				<Form.Control
					className={hasError ? `${style.error} ${props.className}` : props.className}
					required={required}
					{...field}
					{...props}
				/>
				{icon && icon}
			</div>
			{hasError && <ErrorMessage children={meta.error || 'Erro'} error={hasError} />}
		</div>
	)
}
