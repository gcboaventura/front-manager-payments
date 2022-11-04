import { ChangeEvent, FC } from 'react'
import { Option, Props } from './types'
import { useField } from 'formik'
import { Form } from 'react-bootstrap'
import { Label } from '../label'
import { ErrorMessage } from '../error-message'
import style from './index.module.css'

export const Select: FC<Props> = ({
	width,
	variant,
	error,
	label,
	icon,
	name,
	required,
	options,
	onChangeVal,
	...props
}): JSX.Element => {
	const [field, meta] = useField(name || 'name')

	const hasError = !!(meta.touched && meta.error)

	return (
		<div>
			{label && <Label error={hasError} children={label} />}
			<div className={style.wrapper}>
				<Form.Select
					aria-label="Selecione ..."
					className={hasError ? `${style.error} ${props.className}` : props.className}
					required={required}
					{...field}
					{...props}
					onChange={(event: ChangeEvent<HTMLSelectElement>) => {
						field.onChange(event)
						onChangeVal && onChangeVal(event.target.value)
					}}
				>
					{options.map((x: Option) => (
						<option key={x.value} value={x.value}>
							{x.name}
						</option>
					))}
				</Form.Select>
				{icon && icon}
			</div>
			{hasError && <ErrorMessage children={meta.error || 'Erro'} error={hasError} />}
		</div>
	)
}
