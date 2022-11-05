import { FC } from 'react'
import { Props } from './types'
import { useField } from 'formik'
import { Form } from 'react-bootstrap'
import { Label } from '../label'
import { ErrorMessage } from '../error-message'
import { IMaskInput } from 'react-imask'
import style from './index.module.css'

export const MaskInput: FC<Props> = ({
	width,
	variant,
	error,
	label,
	icon,
	name,
	required,
	mask,
	onChangeVal,
	...props
}): JSX.Element => {
	const [field, meta] = useField(name || 'name')

	const hasError = !!(meta.touched && meta.error)

	return (
		<div>
			{label && <Label error={hasError} children={label} />}
			<div className={style.wrapper}>
				<Form.Control
					as={IMaskInput}
					mask={mask}
					className={hasError ? `${style.error} ${props.className}` : props.className}
					required={required}
					{...field}
					{...props}
					onChange={(event: any) => {
						field.onChange(event)
						onChangeVal && onChangeVal(event.target.value)
					}}
				/>
				{icon && icon}
			</div>
			{hasError && <ErrorMessage children={meta.error || 'Erro'} error={hasError} />}
		</div>
	)
}
