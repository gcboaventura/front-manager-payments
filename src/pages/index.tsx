import { FC } from 'react'
import { PlanData } from '@/sections'
import { Alert } from '@/components/ui'
import { RootState } from '@/store/config-store'
import { useSelector } from 'react-redux'

const Main: FC = (): JSX.Element => {
	const { alert } = useSelector((state: RootState) => ({
		alert: state.alert.data
	}))

	return (
		<>
			<Alert show={alert.show} message={alert.message} variant={alert.variant} time={alert.time} />
			<PlanData />
			{/* <Payment /> */}
		</>
	)
}
export default Main
