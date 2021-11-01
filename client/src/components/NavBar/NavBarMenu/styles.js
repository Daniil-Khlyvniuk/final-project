import React from 'react'
import { styled } from '@mui/material/styles'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

export const StyledMenu = styled((props) => (
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

export const StyledMenuItem = styled(MenuItem)(() => ({
	fontFamily: 'Mulish',
	fontWeight: 600,
	fontSize: '16px',
	color: '#373F41',
}))