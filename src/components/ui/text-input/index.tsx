import { FC } from 'react'
import { Props } from './types'
import { useField } from 'formik'

export const TextInput: FC<Props> = ({
	width,
	variant,
	error,
	label,
	icon,
	...props
}): JSX.Element => {
	const [field, meta] = useField(props.name || 'name')

	const hasError = !!(meta.touched && meta.error)

	return <input type="text" />
}
