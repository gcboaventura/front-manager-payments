import { FC } from 'react'
import { PlanData } from '@/sections'
import { Snack } from '@/components/ui'
import { RootState } from '@/store/config-store'
import { useSelector } from 'react-redux'

const Main: FC = (): JSX.Element => {
	const { alert } = useSelector((state: RootState) => ({
		alert: state.alert.data
	}))

	return (
		<>
			<Snack data={alert} />
			<PlanData />
			{/* <Payment /> */}
		</>
	)
}
export default Main
