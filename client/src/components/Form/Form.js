import React from 'react'
import { Box, Tabs, Tab } from '@mui/material'
import SignInForm from './SignInForm/SignInForm'
import LoginForm from './LoginForm/LoginForm'

import PropTypes from 'prop-types'

const Form = () => {
	const [value, setValue] = React.useState(0)
	const handleChange = (event, newValue) => {
		setValue(newValue)
	}
	return (
		<Box
			sx={{
				minWidth: '450px',
				padding: '5px 35px 16px 35px',
				['@media (max-width:600px)']: {
					minWidth: '400px',
					padding: '5px 25px 10px'
				},
				['@media (max-width:490px)']: {
					minWidth: '350px',
				},
				['@media (max-width:440px)']: {
					minWidth: '300px',
				},
				['@media (max-width:360px)']: {
					minWidth: '260px',
				}
			}}
		>
			<Tabs
				value={value}
				onChange={handleChange}
				centered
				variant='form-tab'
			>
				<Tab
					variant={value === 0 ? 'active' : 'default'}
					label="sign up"
				/>
				<Tab
					variant={value === 1 ? 'active' : 'default'}
					label="log in"
				/>
			</Tabs>
			<TabPanel value={value} index={0}><SignInForm /></TabPanel>
			<TabPanel value={value} index={1}><LoginForm /></TabPanel>
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
				<Box>
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