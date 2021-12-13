import React , {useEffect , useState} from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'
import UserForm from '../UserForm/UserForm'
import Orders from '../Orders/Orders'
import {Link, Route, Switch, useLocation} from 'react-router-dom'
import Favorites from '../../../pages/Favorites/Favorites'


const a11yProps = (index) => {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	}
}

export default function BasicTabs() {
	const [value, setValue] = useState(0)
	const {pathname} = useLocation()

	useEffect(() => {
		if(pathname === '/user-profile'  ) {
			setValue(0)
		} else if(pathname === '/purchase' ){setValue(1)}
		else if(pathname === '/favorite'){setValue(2)}
		else {
			setValue(0)
		}
	},[pathname,value])

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
					<Tab label="My Profile" component={Link} to={'/user-profile'} {...a11yProps(0)} />
					<Tab label="My purchases" component={Link} to={'/purchase'} {...a11yProps(1)} />
					<Tab label="Favorites" component={Link} to={'/favorite'} {...a11yProps(2)} />
				</Tabs>
			</Box>
			<Switch>
				<Route exact path={'/user-profile'}>
					<UserForm/>
				</Route>
				<Route exact path={'/purchase'}>
					<Orders/>
				</Route>
				<Route exact path={'/favorite'}>
					<Box sx={{display: 'flex',
						alignItems:'center',
						justifyContent: 'center'}}>
						<Favorites />
					</Box>
				</Route>
			</Switch>
		</Box>
	)
}
