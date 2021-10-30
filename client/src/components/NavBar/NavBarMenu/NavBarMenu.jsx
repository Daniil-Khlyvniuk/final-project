import React from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

const StyledMenu = styled((props) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'right',
		}}
		{...props}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 180,
		boxShadow:
			`rgb(255, 255, 255) 0px 0px 0px 0px, 
            rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, 
            rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, 
            rgba(0, 0, 0, 0.05) 0px 4px 6px -2px`,
		'& .MuiMenu-list': {
			padding: '4px 0',
		},
		'& .MuiMenuItem-root': {
			'& .MuiSvgIcon-root': {
				fontSize: 18,
				color: theme.palette.text.secondary,
				marginRight: theme.spacing(1.5),
			},
		},
	},
}))

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
						fontSize: '1rem',
						fontWeight: 'normal',
						color: '#373F41'
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
				<MenuItem onClick={handleClose} disableRipple>
					Bedroom
				</MenuItem>
				<MenuItem onClick={handleClose} disableRipple>
					Bed linen
				</MenuItem>
				<MenuItem onClick={handleClose} disableRipple>
					Kitchen
				</MenuItem>
				<MenuItem onClick={handleClose} disableRipple>
					Bathroom
				</MenuItem>
				<MenuItem onClick={handleClose} disableRipple>
					Loungewear
				</MenuItem>
				<MenuItem onClick={handleClose} disableRipple>
					Sale
				</MenuItem>
				<MenuItem onClick={handleClose} disableRipple>
					Shop All
				</MenuItem>
			</StyledMenu>
		</div>
	)
}

export default NavBarMenu