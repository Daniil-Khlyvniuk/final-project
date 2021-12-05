import React from 'react'
import {AppBar, Box, Button,  Menu, MenuItem, Toolbar, Typography} from '@mui/material'
import ScreenSearchDesktopIcon from '@mui/icons-material/ScreenSearchDesktop'
import { HashLink } from 'react-router-hash-link'
import PropTypes from 'prop-types'


const LeftMenu = ({data}) => {

	const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null)
	const isMobileMenuOpen = Boolean(mobileMoreAnchorEl)

	const handleMobileMenuClose = () => {
		setMobileMoreAnchorEl(null)
	}

	const handleMobileMenuOpen = (event) => {
		setMobileMoreAnchorEl(event.currentTarget)
	}


	const mobileMenuId = 'menu-mobile'
	const renderMobileMenu = (
		<Menu
			anchorEl={mobileMoreAnchorEl}
			id={mobileMenuId}
			keepMounted
			sx={{display:{md:'none'}}}
			open={isMobileMenuOpen}
			onClose={handleMobileMenuClose}
		>
			{data && data.tabs.map(tab => {
				if(tab.id){
					return (
						<MenuItem
							onClick={handleMobileMenuClose}
							key={tab.tabTitle}>
							<HashLink
								style={{color:'black', textDecoration:'none'}}
								smooth
								to={`/shop/terms-of-service#${tab.id}`}>
								{tab.tabTitle}
							</HashLink>
						</MenuItem>
					)
				}
			})}
		</Menu>
	)

	return (
		<Box>
			<AppBar
				position="static"
				color={'transparent'}
				sx={{boxShadow:'none'}}>
				<Toolbar>
					<Box
						sx={{
							display: { md: 'flex', sm: 'none' , xs:'none' },
							flexDirection: 'column'
						}}
					>

						<Typography
							color={'rgba(55, 63, 65, 1)'}
							variant={'h6'}
							fontSize={'18px'}
							fontWeight={'700'}
							sx={{lineHeight:'24px', textTransform:'uppercase'}}>
							{data.title}
						</Typography>
						{data && data.tabs.map(tab => {
							return (
								<Typography
									fontSize={'16px'}
									sx={{
										textTransform:'uppercase',
										letterSpacing:'0.04em' ,marginTop:'25px'}}
									underline="none"
									key={tab.tabTitle}>
									{tab.tabTitle}
								</Typography>
							)
						})}

					</Box>
					<Box sx={{ display: { sm: 'flex', md: 'none' } , margin:'0 auto'}}>
						<Button
							startIcon={<ScreenSearchDesktopIcon />}
							aria-label="show more"
							aria-controls={mobileMenuId}
							aria-haspopup="true"
							onClick={handleMobileMenuOpen}
							color="inherit"
						>
							{data.title}
						</Button>
					</Box>
				</Toolbar>
			</AppBar>
			{renderMobileMenu}
		</Box>
	)
}
LeftMenu.propTypes = {
	data : PropTypes.shape({
		title: PropTypes.string,
		tabs: PropTypes.array
	})
}
export default LeftMenu