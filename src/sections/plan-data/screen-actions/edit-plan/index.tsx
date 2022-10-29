import { FC, useState } from 'react'
import { Button, Form, Select, Text, Title } from '@/components'
import { Option } from '@/components/ui/select/types'
import { schema } from './schema'
import { FormValues } from './types'
import style from './index.module.css'

export const EditPlan: FC = (): JSX.Element => {
	const [selected, setSelected] = useState<number>(2)

	const listPlans: Option[] = [
		{
			name: 'Easy R$ 199,90',
			value: 1
		},
		{
			name: 'Standard R$ 259,00',
			value: 2
		},
		{
			name: 'Pro R$ 430,00',
			value: 3
		}
	]

	const currentPlan: Option | undefined = listPlans.find((x: Option) => x.value === selected)

	const fetchUpdatePlan = (value: number): void => {}

	const fetchDeleteAccount = (): void => {}

	return (
		<>
			<Form<FormValues>
				onSubmit={(values: FormValues) => fetchUpdatePlan(values.plan)}
				initialValues={{ plan: 2 }}
				validationSchema={schema}
			>
				{() => {
					return (
						<>
							<div className="col-md-12">
								<Select
									label="Plano atual"
									name="plan"
									options={listPlans}
									onChangeVal={(value: number) => setSelected(value)}
								/>
							</div>

							<div className="col-md-12 mt-4 mb-4">
								<Title
									className="h5"
									children={`Descrição do plano ${currentPlan && currentPlan.name}`}
								/>

								<Text
									children={`
								O plano ${currentPlan && currentPlan.name} Lorem Ipsum is simply dummy text of the printing and
								typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
								since the 1500s, when an unknown printer took a galley of type and scrambled it to
								make a type specimen book. It has survived not only five centuries, but also the
								leap into electronic typesetting, remaining essentially unchanged. It was
								popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
								passages, and more recently with desktop publishing software like Aldus PageMaker
								including versions of Lorem Ipsum`}
									className="mt-2 mb-2"
								/>
							</div>
							<div className="col-md-12 d-flex align-items-center justify-content-end">
								<Button
									className={style.button}
									variant="outline-danger"
									children="Excluir minha conta"
									onClick={fetchDeleteAccount}
								/>
								<Button type="submit" children="Mudar plano" />
							</div>
						</>
					)
				}}
			</Form>
		</>
	)
}
