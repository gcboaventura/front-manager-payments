import { Formik, Form as FormikForm, FormikValues, FormikHelpers } from 'formik'
import { Props } from './types'

export function Form<Values>({ initialValues, onSubmit, children, ...props }: Props<Values>) {
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
			{({ ...rest }) => (
				<FormikForm>
					<>{children({ ...rest })}</>
				</FormikForm>
			)}
		</Formik>
	)
}
