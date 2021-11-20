import React from 'react'
import {Box, Tabs, Tab} from '@mui/material'
import SignInForm from './SignInForm/SignInForm'
import LoginForm from './LoginForm/LoginForm'
// import { useFormStyle } from '../../utils/customHooks/useFormStyle'

import PropTypes from 'prop-types'

// const a11yProps = (index) => {
// 	return {
// 		id: `full-width-tab-${index}`,
// 		'aria-controls': `full-width-tabpanel-${index}`,
// 	}
// }



const Form = () => {
	const [value, setValue] = React.useState(0)
	const handleChange = (event, newValue) => {
		setValue(newValue)
		// eslint-disable-next-line no-console
		console.log('val',newValue)
	}
	return (
		<Box
			sx={{
				maxWidth: '450px',
				padding: {
					sx: '10px 15px',
					lg: '50px 55px',
				},
				overflowY: 'auto',
				maxHeight: {
					sx: '500px',
					// sx: 'calc(100vh - 100px)',
					// md: 'calc(100vh - 200px)',
				}
				// paddingLeft: '55px',
				// paddingRight: '55px',
			}}
		>
			<Tabs
				value={value}
				onChange={handleChange}
				centered
				variant='standard'
			>
				<Tab
					variant = {value === 0 ? 'active' : 'default'}
					// {...a11yProps(0)}
					label="sign up"
				/>
				<Tab
					variant = {value === 1 ? 'active' : 'default'}
					// {...a11yProps(1)}
					label="log in"
				/>
			</Tabs>
			{/* {value === 0 && <SignInForm/>} */}
			{/* {value === 1 && <LoginForm/>} */}
			<TabPanel value={value} index={0}><SignInForm/></TabPanel>
			<TabPanel value={value} index={1}><LoginForm/></TabPanel>
		</Box>
	)
}

export default Form


const TabPanel = (props) => {
	const { children, value, index, ...other } = props

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`full-width-tabpanel-${index}`}
			aria-labelledby={`full-width-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box
					sx={{
						maxWidth: '450px',
					}}
				>
					{children}
				</Box>
			)}
		</div>
	)
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.number.isRequired,
	value: PropTypes.number.isRequired,
}