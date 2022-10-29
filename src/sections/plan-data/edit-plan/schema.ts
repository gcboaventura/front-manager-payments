import { FormValues } from './types'
import * as Yup from 'yup'

export const schema: Yup.SchemaOf<FormValues> = Yup.object().shape({
	plan: Yup.string().required('Obrigatório.')
})
