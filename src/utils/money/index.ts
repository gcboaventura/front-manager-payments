import { MoneyModel } from './types'

export class MoneyUtils implements MoneyModel {
	format(money: number, cipher?: boolean): string {
		if (cipher) {
			let formatCipher = money.toLocaleString('pt-br', { minimumFractionDigits: 2 })
			return formatCipher
		}

		return money.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
	}
}
