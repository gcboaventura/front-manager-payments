import { Button, Title } from '@/components'
import { CancelSignatureActions } from '@/store/signature/cancel/action'
import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Props } from './types'
import { useRouter } from 'next/router'

export const CancelSignature: FC<Props> = ({ success }): JSX.Element => {
	const dispatch = useDispatch()

	const router = useRouter()

	const fetchCancelSignature = (): void => {
		const id = localStorage.getItem('id')
		if (id) {
			dispatch(
				CancelSignatureActions.fetchCancelSignature({
					id: JSON.parse(id),
					onSuccess: () => {
						router.reload()
						success()
					}
				})
			)
		}
	}

	return (
		<div className="d-flex flex-column align-items-center justify-content-center">
			<Title className="h4 text-secondary mb-2 mt-2">
				Tem certeza que deseja fazer o cancelamento ?
			</Title>
			<Button children="Cancelar minha assinatura" onClick={fetchCancelSignature} />
		</div>
	)
}
