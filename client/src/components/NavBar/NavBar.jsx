import React from 'react'
import { AppBar, Container, Toolbar } from '@mui/material'
import NavBarLogo from './NavBarLogo/NavBarLogo'
import { Box } from '@mui/system'
import LoginIcon from './NavBarIcons/LoginIcon/LoginIcon'
import FavoriteIcon from './NavBarIcons/FavotiteIcon/FavoriteIcon'
import CartIcon from './NavBarIcons/CartIcon/CartIcon'
import NavBarSearch from './NavBarSearch/NavBarSearch'
import { useStyles } from './styles'
import Category from '../Category/Category'
import LogoutIconHeader from './NavBarIcons/LogoutIcon/LogoutIcon'
import ProfileIcon from './NavBarIcons/ProfileIcon/ProfileIcon'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { userSelectors } from '../../store/User'

const Navbar = () => {
	const classes = useStyles()
	const { pathname } = useLocation()
	const user = useSelector(userSelectors.getData())
	const isLoggedIn = !!user

	return (
		<Box sx={{ borderColor: '#373F41', borderBottom: 1 }}>
			<Container maxWidth="lg" sx={{ minWidth: 320 }}>
				<AppBar className={classes.appbar} position="static" sx={{ boxShadow: 'none' }}>
					<Toolbar className={classes.header}>
						<NavBarLogo />
						{pathname !== '/shop/catalog' && <Category />}
						<NavBarSearch />
						<Box className={classes.iconsWrapper}>
							{!isLoggedIn ? <LoginIcon /> :
								pathname === '/user-profile' ? <LogoutIconHeader /> :
									<ProfileIcon />}
							{isLoggedIn && <FavoriteIcon />}
							<CartIcon />
						</Box>
					</Toolbar>
				</AppBar>
			</Container>
		</Box>
	)
}

export default Navbar