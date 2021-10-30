import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { makeStyles } from '@mui/styles'
import NavBarLogo from './NavBarLogo/NavBarLogo'
import { Box } from '@mui/system'
import NavbarMenu from './NavBarMenu/NavBarMenu'
import LoginIcon from './NavBarIcons/LoginIcon/LoginIcon'
import FavoriteIcon from './NavBarIcons/FavotiteIcon/FavoriteIcon'
import CartIcon from './NavBarIcons/CartIcon/CartIcon'
import NavBarSearch from './NavBarSearch/NavBarSearch'
import Navbarlist from './NavBarList/NavBarList'
import NavBarLanguages from './NavBarLanguages/NavBarLanguages'

const useStyles = makeStyles(() => ({
	header: {
		backgroundColor: '#ffffff',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	iconsWrapper: {
		width: 90,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	}
}))

const Navbar = () => {
	const { header, iconsWrapper } = useStyles()

	return (
		<Box sx={{ borderColor: '#373F41', borderBottom: 1 }}>
			<AppBar position="static" sx={{ boxShadow: 'none' }}>
				<Toolbar className={header}>
					<NavBarLogo />
					<NavbarMenu />
					<Navbarlist />
					<NavBarSearch />
					<div className={iconsWrapper}>
						<LoginIcon />
						<FavoriteIcon />
						<CartIcon />
					</div>
					<NavBarLanguages />
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Navbar