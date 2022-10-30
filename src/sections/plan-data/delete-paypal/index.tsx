import { FC } from 'react'
import { Button, Title } from '@/components'
import { Props } from './types'
import { useDispatch } from 'react-redux'
import style from './index.module.css'
import { DeletePaypalActions } from '@/store/paypal/delete/action'

export const DeletePayPal: FC<Props> = ({ close, id }): JSX.Element => {
	const dispatch = useDispatch()

	const fetchDeletePayPal = (): void => {
		dispatch(DeletePaypalActions.fetchDeletePaypal({ id }))
	}

	return (
		<div className="col-md-12 d-flex flex-column align-items-center justify-content-center">
			<Title className="h5">Tem certeza que deseja exlcuir o e-mail ?</Title>
			<div className="col-md-12 mt-3 mb-3 d-flex align-items-center justify-content-center">
				<Button
					className={style.button}
					variant="outline-danger"
					children="Cancelar"
					onClick={close}
				/>
				<Button className={style.button} children="Excluir e-mail" onClick={fetchDeletePayPal} />
			</div>
		</div>
	)
}
