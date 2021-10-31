import React from 'react'
import Button from '@mui/material/Button'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { StyledMenu, StyledMenuItem } from './styles'

const NavBarMenu = () => {
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<div>
			<Button
				id="demo-customized-button"
				aria-controls="demo-customized-menu"
				aria-haspopup="true"
				aria-expanded={open ? 'true' : undefined}
				disableElevation
				onClick={handleClick}
				endIcon={<KeyboardArrowDownIcon />}
				sx={
					{
						padding: 0,
						textTransform: 'none',
						fontFamily: 'Mulish',
						fontWeight: 600,
						fontSize: '16px',
						color: '#373F41',
					}
				}
			>
				Catalog
			</Button>
			<StyledMenu
				id="demo-customized-menu"
				MenuListProps={{
					'aria-labelledby': 'demo-customized-button',
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
			>
				<StyledMenuItem
					onClick={handleClose} disableRipple
				>
					Bedroom
				</StyledMenuItem>
				<StyledMenuItem onClick={handleClose} disableRipple>
					Bed linen
				</StyledMenuItem>
				<StyledMenuItem onClick={handleClose} disableRipple>
					Kitchen
				</StyledMenuItem>
				<StyledMenuItem onClick={handleClose} disableRipple>
					Bathroom
				</StyledMenuItem>
				<StyledMenuItem onClick={handleClose} disableRipple>
					Loungewear
				</StyledMenuItem>
				<StyledMenuItem onClick={handleClose} disableRipple>
					Sale
				</StyledMenuItem>
				<StyledMenuItem onClick={handleClose} disableRipple>
					Shop All
				</StyledMenuItem>
			</StyledMenu>
		</div>
	)
}

export default NavBarMenu