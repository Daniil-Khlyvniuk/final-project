import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import UserForm from '../UserForm/UserForm'
import Orders from '../Orders/Orders'
import Favorites from '../../../pages/Favorites/Favorites'

const TabPanel = (props) => {
	const { children, value, index, ...other } = props
	return (
		<div
			role='tabpanel'
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography component={'div'}>{children} </Typography>
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

const a11yProps = (index) => {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

export default function BasicTabs() {
	const [value, setValue] = React.useState(0)

	const handleChange = (event, newValue) => {
		setValue(newValue)
	}

	return (
		<Box sx={{ width: '100%', my:'15px' ,  }}>
			<Box sx={{ borderBottom: 1, borderColor: 'divider',
				'&.MuiBox-root':{display:'flex', justifyContent:'center',

					['@media (max-width:360px)']: {
						width: '260px',
						flexDirection:'column'
					}},

			}}>
				<Tabs value={value} onChange={handleChange}
					aria-label="basic tabs example"
					variant="scrollable"
					scrollButtons="auto"
				>
					<Tab label="My Profile" {...a11yProps(0)} />
					<Tab label="My purchases" {...a11yProps(1)} />
					<Tab label="Favorites" {...a11yProps(2)} />
				</Tabs>
			</Box>
			<TabPanel value={value} index={0}>
				<UserForm/>
			</TabPanel>
			<TabPanel value={value} index={1}>
				<Orders/>
			</TabPanel>
			<TabPanel value={value} index={2}>
				<Box sx={{display: 'flex',
					alignItems:'center',
					justifyContent: 'center'}}>
					<Favorites />
				</Box>

			</TabPanel>
		</Box>
	)
}
