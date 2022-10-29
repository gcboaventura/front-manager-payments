import { FC } from 'react'
import { Table as TableReactBootstrap } from 'react-bootstrap'
import { Column, Props } from './types'

export const Table: FC<Props> = ({ columns, items, onClick, ...props }): JSX.Element => {
	return (
		<TableReactBootstrap {...props}>
			<thead>
				<tr>
					{columns.map((x: Column, index: number) => {
						return <th key={index}>{x.title}</th>
					})}
				</tr>
			</thead>
			<tbody>
				{items.map((x: any, index: number) => {
					return (
						<tr key={index} onClick={() => onClick && onClick(x)}>
							{columns.map((y: Column, index: number) => {
								return <td key={index}>{x[y.key]}</td>
							})}
						</tr>
					)
				})}
			</tbody>
		</TableReactBootstrap>
	)
}
