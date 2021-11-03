import React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import SignInForm from './SignInForm/SignInForm'
import LoginForm from './LoginForm/LoginForm'
// import { useFormStyle } from '../../utils/customHooks/useFormStyle'

const Form = () => {
	const [value, setValue] = React.useState(0)
	// const classes = useFormStyle()
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div>
			<Tabs
				value={value}
				onChange={handleChange}
				centered
				variant='form-tab'
			>
				<Tab
					variant='active'
					label="SIGN UP"
				/>
				<Tab
					variant='active'
					label="LOG IN"
				/>
			</Tabs>
			{value === 0 && <SignInForm/>}
			{value === 1 && <LoginForm/>}
		</div>
	)
}

export default Form