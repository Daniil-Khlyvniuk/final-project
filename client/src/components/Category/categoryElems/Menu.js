import * as React from 'react'
import ClickAwayListener from '@mui/material/ClickAwayListener'
import Grow from '@mui/material/Grow'
import Paper from '@mui/material/Paper'
import Popper from '@mui/material/Popper'
import MenuList from '@mui/material/MenuList'
import { StyledMenuItem } from '../style'

// eslint-disable-next-line react/prop-types
const MenuListComposition = ({ children }) => {
	const [open, setOpen] = React.useState(false)
	const anchorRef = React.useRef(null)

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen)
	}

	const handleClose = (event) => {
		if (anchorRef.current && anchorRef.current.contains(event.target)) {
			return
		}

		setOpen(false)
	}

	const handleListKeyDown = (event) => {
		if (event.key === 'Tab') {
			event.preventDefault()
			setOpen(false)
		} else if (event.key === 'Escape') {
			setOpen(false)
		}
	}

	// return focus to the button when we transitioned from !open -> open
	const prevOpen = React.useRef(open)
	React.useEffect(() => {
		if (prevOpen.current === true && open === false) {
			anchorRef.current.focus()
		}

		prevOpen.current = open
	}, [open])

	return (

		<div>
			<StyledMenuItem
				ref={ anchorRef }
				id="composition-button"
				aria-controls={ open ? 'composition-menu' : undefined }
				aria-expanded={ open ? 'true' : undefined }
				aria-haspopup="true"
				onClick={ handleToggle }
			>
				Dashboard
			</StyledMenuItem>
			<Popper
				open={ open }
				anchorEl={ anchorRef.current }
				role={ undefined }
				placement="bottom-start"
				transition
				disablePortal
			>
				{ ({ TransitionProps, placement }) => (
					<Grow
						{ ...TransitionProps }
						style={ {
							transformOrigin:
								placement === 'bottom-start' ? 'left top' : 'left bottom',
						} }
					>
						<Paper>
							<ClickAwayListener onClickAway={ handleClose }>
								<MenuList
									autoFocusItem={ open }
									id="composition-menu"
									aria-labelledby="composition-button"
									onKeyDown={ handleListKeyDown }
								>
									{ children }
									{/*<MenuItem onClick={ handleClose }>Profile</MenuItem>*/ }
									{/*<MenuItem onClick={ handleClose }>My account</MenuItem>*/ }
									{/*<MenuItem onClick={ handleClose }>Logout</MenuItem>*/ }
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				) }
			</Popper>
		</div>
	)
}
export default MenuListComposition

// import React, { memo, useState } from 'react'
// import Button from '@mui/material/Button'
// import { StyledMenu } from '../style'
//
// // eslint-disable-next-line react/prop-types
// const PositionedMenu = ({ children }) => {
// 	// root category menu
// 	// root category menu
// 	// root category menu
// 	// root category menu
//
// 	const [anchorEl, setAnchorEl] = useState(null)
// 	const open = Boolean(anchorEl)
//
// 	const handleClick = (event) => {
// 		setAnchorEl(event.currentTarget)
// 	}
// 	const handleClose = () => {
// 		setAnchorEl(null)
// 	}
//
// 	return (
// 		<div>
// 			<Button
// 				id={ 'rootCategory' }
// 				aria-controls="category"
// 				aria-haspopup="true"
// 				aria-expanded={ open ? 'true' : undefined }
// 				onClick={ handleClick }
// 			>
// 				Category
// 			</Button>
// 			<StyledMenu
// 				id="category"
// 				aria-labelledby={ 'rootCategory' }
// 				anchorEl={ anchorEl }
// 				open={ open }
// 				onClose={ handleClose }
// 				MenuListProps={ {
// 					onMouseLeave: handleClose,
// 				} }
// 				anchorOrigin={ {
// 					vertical: 'bottom',
// 					horizontal: 'left',
// 				} }
// 				transformOrigin={ {
// 					vertical: 'top',
// 					horizontal: 'left',
// 				} }>
// 				{ children }
// 			</StyledMenu>
// 		</div>
// 	)
// }
// export default memo(PositionedMenu)