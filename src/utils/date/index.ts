import { DateModel } from './types'
import moment from 'moment'

export class DateUtils implements DateModel {
	toIso(date: string | number): string {
		return moment(date).toISOString()
	}

	format(date: string | number): string {
		return moment(date).format('DD/MM/YYYY')
	}

	getMonth(): number {
		return moment().month() + 1
	}

	getYear(): number {
		return moment().year()
	}
	formatDateString(date: string | number): string {
		moment('pt')
		moment.updateLocale('pt', {
			months: [
				'Janeiro',
				'Fevereiro',
				'Março',
				'Abril',
				'Maio',
				'Junho',
				'Julho',
				'Agosto',
				'Setembro',
				'Outubro',
				'Novembro',
				'Dezembro'
			]
		})

		return moment(date).format('DD [de] MMMM [de] YYYY')
	}
}
