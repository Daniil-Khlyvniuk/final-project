import React, { useState } from 'react'
import { useFormStyle } from './hooks/useFormStyle'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

const Form = () => {
	const classes = useFormStyle()
	const [value, setValue] = useState(1 )

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<Tabs
			className={classes.switchForm}
			value={value}
			onChange={handleChange}
			centered>
			<Tab
				className={classes.signin}
				value= {value}
				key={1}
				label="SIGN UP"
				href="/signup"
			/>
			<Tab
				className={classes.login}
				value={2}
				label="LOG IN"
				href="/login"
			/>
		</Tabs>
	)
}

export default Form