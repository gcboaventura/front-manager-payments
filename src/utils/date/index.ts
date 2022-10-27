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
}
