import { FC } from 'react'
import { Button as ButtonReactBootstrap } from 'react-bootstrap'
import { Props } from './types'
import style from './button.module.css'

export const Button: FC<Props> = ({ children, icon, variant, ...props }): JSX.Element => {
	return (
		<ButtonReactBootstrap className={`d-flex ${props.className}`} variant={variant} {...props}>
			{icon && <div className={style.wrapperIcon}>{icon}</div>}
			{children}
		</ButtonReactBootstrap>
	)
}
