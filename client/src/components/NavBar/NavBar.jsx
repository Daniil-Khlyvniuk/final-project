import React from 'react'
import { AppBar, Container, Toolbar } from '@mui/material'
import NavBarLogo from './NavBarLogo/NavBarLogo'
import { Box } from '@mui/system'
import NavbarMenu from './NavBarMenu/NavBarMenu'
import LoginIcon from './NavBarIcons/LoginIcon/LoginIcon'
import FavoriteIcon from './NavBarIcons/FavotiteIcon/FavoriteIcon'
import CartIcon from './NavBarIcons/CartIcon/CartIcon'
import NavBarSearch from './NavBarSearch/NavBarSearch'
import { useStyles } from './styles'
// import Navbarlist from './NavBarList/NavBarList'
// import NavBarLanguages from './NavBarLanguages/NavBarLanguages'

const Navbar = () => {
	const classes = useStyles()

	return (
		<Box sx={{ borderColor: '#373F41', borderBottom: 1 }}>
			<Container maxWidth="lg">
				<AppBar position="static" sx={{ boxShadow: 'none' }}>
					<Toolbar className={classes.header} disableGutters={true} >
						<NavBarLogo />
						<NavbarMenu />
						{/* <Navbarlist /> */}
						<NavBarSearch />
						<div className={classes.iconsWrapper}>
							<LoginIcon />
							<FavoriteIcon />
							<CartIcon />
						</div>
						{/* <NavBarLanguages /> */}
					</Toolbar>
				</AppBar>
			</Container>
		</Box>
	)
}

export default Navbar