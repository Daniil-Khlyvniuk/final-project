import React from 'react'
import { useFormStyle } from './hooks/useFormStyle'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

const Form = () => {
	const classes = useFormStyle()
	return (
		<Tabs
			className={classes.switchForm}
			centered>
			<Tab
				className={classes.signin}
				value="one"
				label="SIGN UP"
				href="/signup"
			/>
			<Tab
				className={classes.login}
				value="two"
				label="LOG IN"
				href="/login"
			/>
		</Tabs>
	)
}

export default Form