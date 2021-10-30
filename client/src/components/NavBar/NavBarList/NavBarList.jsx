import { List, ListItem, ListItemText } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles(() => ({
	navbar: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 0,
		listStyle: 'none',
		gap: 40
	},
	navbarLink: {
		color: '#373F41',
		textDecoration: 'none',
	},
	navbarLinkActive: {
		textDecoration: 'underline'
	}
}))

const Navbarlist = () => {
	const { navbar, navbarLink, navbarLinkActive } = useStyles()

	return (
		<List className={navbar} sx={{ padding: 0 }}>
			<ListItem sx={{ padding: 0 }}>
				<NavLink
					exact to='/about'
					className={navbarLink}
					activeClassName={navbarLinkActive}
				>
					<ListItemText primary="About" />
				</NavLink>
			</ListItem>
			<ListItem sx={{ padding: 0 }}>
				<NavLink
					exact to='/contact'
					className={navbarLink}
					activeClassName={navbarLinkActive}
				>
					<ListItemText primary="Contact" />
				</NavLink>
			</ListItem>
			<ListItem sx={{ padding: 0 }}>
				<NavLink
					exact to='/blog'
					className={navbarLink}
					activeClassName={navbarLinkActive}
				>
					<ListItemText primary="Blog" />
				</NavLink>
			</ListItem>
		</List>
	)
}

export default Navbarlist