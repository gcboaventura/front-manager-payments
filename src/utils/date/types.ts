export interface DateModel {
	toIso(date: string | number): string
	format(date: number | string): string
	getMonth(): number
	getYear(): number
	formatDateString(date: string | number): string
}
