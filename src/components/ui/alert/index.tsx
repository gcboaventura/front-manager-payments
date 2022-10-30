import { Close } from '@/components/icons'
import { FC, useEffect, useState } from 'react'
import { Alert as AlertReactBootstrap } from 'react-bootstrap'
import { Props } from './types'
import style from './index.module.css'

export const Alert: FC<Props> = ({ message, show, time, ...props }): JSX.Element => {
	const [showAlert, setShowAlert] = useState<boolean>(false)

	useEffect(() => {
		if (time) {
			setTimeout(() => {
				setShowAlert(false)
			}, time)
		}

		setShowAlert(show)
	}, [show, time])

	return (
		<>
			{showAlert && (
				<div className={style.wrapper}>
					<AlertReactBootstrap
						{...props}
						children={
							<div className="d-flex align-items-center justify-content-between">
								<p className={style.message}>{message}</p>
								<Close className={style.svg} onClick={() => setShowAlert(false)} />
							</div>
						}
					/>
				</div>
			)}
		</>
	)
}
