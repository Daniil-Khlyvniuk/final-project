import React from 'react'
import { useFormStyle } from '../../utils/customHooks/useFormStyle'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import SignInForm from './SignInForm/SignInForm'
import LoginForm from './LoginForm/LoginForm'

const Form = () => {
	const classes = useFormStyle()
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<div>
			<Tabs
				value={value}
				onChange={handleChange}
				centered
				className={classes.switchForm}>
				<Tab
					label="SIGN UP"
					className={classes.signin}
				/>
				<Tab
					className={classes.login}
					label="LOG IN"
				/>
			</Tabs>
			{value === 0 && <SignInForm/>}
			{value === 1 && <LoginForm/>}
		</div>
	)
}

export default Form