import { InvoiceAPI } from '@/data'
import { AlertActions } from '@/store/alert/action'
import { call, put } from 'redux-saga/effects'
import { fetchGetAllInvoicesAction, GetAllInvoicesActions } from './action'

export function* fetchGetAllInvoices(action: fetchGetAllInvoicesAction) {
	const invoiceAPI = new InvoiceAPI()

	const { onSuccess, onFalied } = action.payload

	try {
		const { data } = yield call(invoiceAPI.getAll, action.payload)

		yield put(GetAllInvoicesActions.fetchGetAllInvoicesSuccess(data))

		if (onSuccess) {
			onSuccess(data)
		}
	} catch (error: unknown) {
		yield put(GetAllInvoicesActions.fetchGetAllInvoicesFalied(error as Error))

		yield put(
			AlertActions.ShowAlert({ message: 'Erro ao buscar faturas.', variant: 'danger', show: true })
		)

		if (onFalied) {
			onFalied(error)
		}
	}
}
