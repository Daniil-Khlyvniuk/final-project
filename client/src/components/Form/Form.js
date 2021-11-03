import React from 'react'
import { useFormStyle } from '../../utils/customHooks/useFormStyle'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import SignInForm from './SignInForm/SignInForm'
import LoginForm from './LoginForm/LoginForm'
import { styled } from '@mui/styles'
import theme from '../../utils/Theme'

const Form = () => {
	const classes = useFormStyle()
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	const CustomTab = styled(Tab)(() => ({
		fontFamily: theme.typography.fontFamily,
		fontStyle: 'normal',
		fontWeight: 'normal',
		fontSize: 16,
		lineHeight: '48px',
		letterSpacing: '0.04em',
		color: '#373F41',
		'& button .Mui-selected':{
			color: 'red'
		},
	}))

	return (
		<div>
			<Tabs
				value={value}
				onChange={handleChange}
				centered
				className={classes.switchForm}>
				<CustomTab
					label="SIGN UP"
				/>
				<CustomTab
					label="LOG IN"
				/>
			</Tabs>
			{value === 0 && <SignInForm/>}
			{value === 1 && <LoginForm/>}
		</div>
	)
}

export default Form