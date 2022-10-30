import { FC } from 'react'
import { PlanData } from '@/sections'
import { Alert } from '@/components/ui'

const Main: FC = (): JSX.Element => {
	return (
		<>
			<Alert
				show={true}
				message="sdfssfsdfsfsdfsdfsdfsfsfsfsdfsdfsfsfffffsfsfsfsfsfsfsf"
				variant="success"
				time={5000}
			/>
			<PlanData />
			{/* <Payment /> */}
		</>
	)
}
export default Main
