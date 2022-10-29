import { TableProps } from 'react-bootstrap'

export interface Props extends TableProps {
	items: any[]
	columns: Column[]
	onClick?: (row: any) => void
}

export interface Column {
	key: string
	title: string
}
