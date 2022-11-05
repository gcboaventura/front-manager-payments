import { DateModel } from './types'
import moment from 'moment'
import 'moment/locale/pt-br'

export class DateUtils implements DateModel {
	toIso(date: string | number): string {
		return moment(new Date(date)).format()
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

	formatDateString(date: string): string {
		moment.updateLocale('pt-br', {
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

	currentDate(): string {
		return moment().format()
	}

	toApi(value: string): string {
		return moment().format('YYYY-MM-DD')
	}
}
