import { Formik, Form as FormikForm, FormikValues, FormikHelpers } from 'formik'
import { Props } from './types'

export function Form<Values>({ children, initialValues, onSubmit, ...props }: Props<Values>) {
	return (
		<Formik
			//@ts-ignore
			onSubmit={(values: Values, formikHelpers: FormikHelpers<Values>) =>
				onSubmit(values, formikHelpers)
			}
			enableReinitialize
			initialValues={initialValues as FormikValues}
			{...props}
		>
			<FormikForm>{children}</FormikForm>
		</Formik>
	)
}
