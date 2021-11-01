import React, { memo, useState } from 'react'
import Button from '@mui/material/Button'
import { StyledMenu } from '../style'

// eslint-disable-next-line react/prop-types
const PositionedMenu = ({ children }) => {
	// root category menu

	const [anchorEl, setAnchorEl] = useState(null)
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
				id={ 'rootCategory' }
				aria-controls="category"
				aria-haspopup="true"
				aria-expanded={ open ? 'true' : undefined }
				onClick={ handleClick }
			>
				Category
			</Button>
			<StyledMenu
				id="category"
				aria-labelledby={ 'rootCategory' }
				anchorEl={ anchorEl }
				open={ open }
				onClose={ handleClose }
				anchorOrigin={ {
					vertical: 'top',
					horizontal: 'left',
				} }
				transformOrigin={ {
					vertical: 'top',
					horizontal: 'left',
				} }>
				{ children }
			</StyledMenu>
		</div>
	)
}
export default memo(PositionedMenu)