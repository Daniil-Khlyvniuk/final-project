import React, { useState } from 'react'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { StyledMenu } from './styles'

const NavBarLanguages = () => {
	const [anchorEl, setAnchorEl] = useState(null)
	const [lang, setLang] = useState('En')
	const allLangs = ['En', 'Ukr', 'Rus']
	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = (currentLang) => ()  => {
		setAnchorEl(null)
		setLang(currentLang)
	}

	const chooseLang = allLangs.map((langEl, i) => {
		if (lang !== langEl) return (
			<MenuItem key={i} onClick={handleClose(langEl)} disableRipple>
				{langEl}
			</MenuItem>
		)
	})

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
				{lang}
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
				{chooseLang}
			</StyledMenu>
		</div>
	)
}

export default NavBarLanguages