import { FormikConfig, FormikHelpers, FormikValues } from 'formik'
import { ReactNode } from 'react'

export interface Props<Values> extends FormikConfig<Values> {
	initialValues: Values
	onSubmit(values: Values, formikHelpers: FormikHelpers<Values>): void | Promise<any>
	children: ReactNode
}
