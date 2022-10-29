import { FC } from 'react'
import { Button, Title } from '@/components'
import { Props } from './types'
import style from './index.module.css'

export const DeleteCreditCard: FC<Props> = ({ close, id }): JSX.Element => {
	const fetchDeleteCreditCard = (): void => {}

	return (
		<div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
			<Title className="h5">Tem certeza que deseja exlcuir o cartão ?</Title>
			<div className="col-md-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
				<Button
					className={style.button}
					variant="outline-danger"
					children="Cancelar"
					onClick={close}
				/>
				<Button
					className={style.button}
					children="Excluir cartão"
					onClick={fetchDeleteCreditCard}
				/>
			</div>
		</div>
	)
}
