import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useStyles } from './styles'

const Navbarlist = () => {
	const classes = useStyles()

	return (
		<List className={classes.navbar} sx={{ padding: 0 }}>
			<ListItem sx={{ padding: 0 }}>
				<NavLink
					exact to='/about'
					className={classes.navbarLink}
					activeClassName={classes.navbarLinkActive}
				>
					<ListItemText primary="About" />
				</NavLink>
			</ListItem>
			<ListItem sx={{ padding: 0 }}>
				<NavLink
					exact to='/contact'
					className={classes.navbarLink}
					activeClassName={classes.navbarLinkActive}
				>
					<ListItemText primary="Contact" />
				</NavLink>
			</ListItem>
			<ListItem sx={{ padding: 0 }}>
				<NavLink
					exact to='/blog'
					className={classes.navbarLink}
					activeClassName={classes.navbarLinkActive}
				>
					<ListItemText primary="Blog" />
				</NavLink>
			</ListItem>
		</List>
	)
}

export default Navbarlist