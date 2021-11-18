import React from 'react'
import {AppBar, Box, Button,  Menu, MenuItem, Toolbar, Typography, Link} from '@mui/material'
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop'
// eslint-disable-next-line react/prop-types
const LeftMenu = ({data}) => {
	const [anchorEl, setAnchorEl] = React.useState(null)
	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)

	// eslint-disable-next-line no-unused-vars
	const isMenuOpen = Boolean(anchorEl)
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)
	// eslint-disable-next-line no-unused-vars
	const handleProfileMenuOpen = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null)
	}

	// eslint-disable-next-line no-unused-vars
	const handleMenuClose = () => {
		setAnchorEl(null)
		handleMobileMenuClose()
	}

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget)
	}

	// eslint-disable-next-line no-unused-vars
	const menuId = 'primary-search-account-menu'
	// const renderMenu = (
	//   <Menu
	//     anchorEl={anchorEl}
	//     anchorOrigin={{
	//       vertical: 'top',
	//       horizontal: 'right',
	//     }}
	//     id={menuId}
	//     keepMounted
	//     transformOrigin={{
	//       vertical: 'top',
	//       horizontal: 'right',
	//     }}
	//     open={isMenuOpen}
	//     onClose={handleMenuClose}
	//   >
	//     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
	//     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
	//   </Menu>
	// );

	const mobileMenuId = 'primary-search-account-menu-mobile'
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right'
			}}
			id={mobileMenuId}
			keepMounted
			transformOrigin={{
				vertical: 'top',
				horizontal: 'right'
			}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			{/* eslint-disable-next-line react/prop-types */}
			{data && data.tabs.map(tab => {
				return (
					<MenuItem key={tab.tabTitle}>{tab.tabTitle}</MenuItem>
				)
			})}

		</Menu>
	)

	return (
		<Box>
			<AppBar position="static" color={'transparent'} sx={{boxShadow:'none'}}>
				<Toolbar>
					<Box
						sx={{
							display: { md: 'flex', sm: 'none' , xs:'none' },
							flexDirection: 'column'
						}}
					>
						{/* eslint-disable-next-line react/prop-types */}
						<Typography color={'primary'} variant={'h6'} fontSize={'18px'} fontWeight={'700'}>{data.pageTitle}</Typography>
						{/* eslint-disable-next-line react/prop-types */}
						{data && data.tabs.map(tab => {
							return (
								<Link fontSize={'16px'} sx={{letterSpacing:'0.04em' ,marginTop:'25px'}} underline="none" key={tab.tabTitle}>{tab.tabTitle}</Link>
							)
						})}

					</Box>
					<Box sx={{ display: { sm: 'flex', md: 'none' } , margin:'0 auto'}}>
						<Button
							startIcon={<ScreenSearchDesktopIcon />}
							// size="large"
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							{/* eslint-disable-next-line react/prop-types */}
							{data.pageTitle}
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
			{/* {renderMenu} */}
		</Box>
	)
}

export default LeftMenu