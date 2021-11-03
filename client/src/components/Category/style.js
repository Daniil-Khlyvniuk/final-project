import React from 'react'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'

export const StyledMenu = styled((props) => (
	<MenuList
		elevation={ 0 }
		anchorOrigin={ {
			vertical: 'bottom',
			horizontal: 'right',
		} }
		transformOrigin={ {
			vertical: 'top',
			horizontal: 'right',
		} }

		{ ...props }
	/>
))(({ theme }) => ({
	'&': {
		zIndex: '9999999999'
	},
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
	cursor: 'pointer',
	color: '#373F41',
	alignSelf: 'center',
	position: 'relative',
	display: 'flex',
	justifyContent: 'space-between',
	width: '100%'
}))