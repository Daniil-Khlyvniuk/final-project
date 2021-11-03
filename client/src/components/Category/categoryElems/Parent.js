import * as React from 'react'
// import ClickAwayListener from '@mui/material/ClickAwayListener'
// import Grow from '@mui/material/Grow'
// import Popper from '@mui/material/Popper'
// import  from '@mui/material/MenuList'
import { StyledMenuItem } from '../style'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import { ClickAwayListener, Grow, MenuList, Popper } from '@mui/material'
import Paper from '@mui/material/Paper'

// eslint-disable-next-line react/prop-types
const MenuListComposition = ({ children, text }) => {
	const [open, setOpen] = React.useState(false)
	// const [test, setTest] = React.useState(false)
	const anchorRef = React.useRef(null)
	const prevOpen = React.useRef()
	const AAAAAA = React.useRef()

	// eslint-disable-next-line no-console
	console.log('anchorRef', anchorRef)
	// eslint-disable-next-line no-console

	// const handleToggle = (ev) => {
	// 	if (ev.target !== ev.currentTarget && ev.target !== anchorRef.current) {
	// 		return
	// 	}
	// 	setOpen((prevOpen) => !prevOpen)
	// }

	// eslint-disable-next-line no-unused-vars
	const handleClose = (ev) => {
		// const isChild = children.includes(ev.target)
		// eslint-disable-next-line react/prop-types
		// if (ev.target === AAAAAA.current) return setOpen(false)
		// if (ev.target === AAAAAA.current || ev.target === anchorRef.current) {
		// 	return
		// }
		// if (anchorRef.current && anchorRef.current.contains(event.target)) {
		// 	return
		// }
		// eslint-disable-next-line no-console
		console.log('F U C K')
		setOpen(false)
	}

	// eslint-disable-next-line no-unused-vars
	const handleOpen = (ev) => {
		// if (ev.target !== anchorRef.current &&
		// 	anchorRef.current.contains(ev.target)) {
		// 	return
		// }
		// if (anchorRef.current && anchorRef.current.contains(ev.target)) {
		// 	return
		// }

		setOpen(true)
	}
	// eslint-disable-next-line react/prop-types
	const childrenWithOnMouseEnter = children.map((child, i, currArray) => {
		// eslint-disable-next-line no-debugger
		// debugger
		// eslint-disable-next-line react/prop-types
		if (currArray.length === 1) return child
		if (!child.props.children || child.props.children === []) {
			return {
				...child,
				props: {
					...child.props,
					handleMouseEnter: handleClose
				}
			}
		} else {
			return child
		}
	})

	const handleListKeyDown = (event) => {
		if (event.key === 'Tab') {
			event.preventDefault()
			setOpen(false)
		} else if (event.key === 'Escape') {
			setOpen(false)
		}
	}

	const FUCK = () => {
		// Очень нужная функция
		// eslint-disable-next-line no-console
		// console.log('F U C K')
	}

	// return focus to the button when we transitioned from !open -> open
	React.useEffect(() => {
		// if (prevOpen.current === true && open === false) {
		// 	anchorRef.current.focus()
		// }
		// eslint-disable-next-line no-console
		console.log('AAAAAA', AAAAAA)
		prevOpen.current = open
	}, [open])

	return (
		<div>
			<StyledMenuItem
				// ОК, это я мщгу найти как anchorRef.current
				ref={ anchorRef }
				id={ `${ text }-button` }
				aria-controls={ open ? 'composition-menu' : undefined }
				aria-expanded={ open ? 'true' : undefined }
				aria-haspopup="true"
				// onClick={ handleToggle }
				onMouseEnter={ handleOpen }
				// onMouseLeave={ handleClose }
			>
				{ text }
				<ArrowForwardIosIcon
					style={ {
						height: '.5em',
						marginLeft: 'auto',
						paddingRight: '10%'
					} }
				/>
			</StyledMenuItem>
			<Popper
				open={ open }
				anchorEl={ anchorRef.current }
				role={ undefined }
				placement="right-start"
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
						<Paper
							style={ { backgroundColor: 'red' } }
							ref={ AAAAAA }

							onMouseLeave={ handleClose }
						>
							<ClickAwayListener
								onClickAway={ handleClose }

							>
								<MenuList
									onMouseMove={ FUCK }
									onMouseLeave={ handleClose }
									// style={ { backgroundColor: 'red' } }
									className={ 'БЛЯЯЯЯЯ' }
									ref={ AAAAAA }
									autoFocusItem={ open }
									id={ `${ text }-menu` }
									aria-labelledby={ `${ text }-button` }
									onKeyDown={ handleListKeyDown }
								>
									{ childrenWithOnMouseEnter }
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
// import { StyledMenu, StyledMenuItem } from '../style'
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
//
// // eslint-disable-next-line no-unused-vars,react/prop-types
// const Parent = ({ children, text }) => {
// 	// eslint-disable-next-line react/prop-types
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
// 		<>
// 			<StyledMenuItem
// 				id={ text }
// 				aria-controls={ text }
// 				aria-haspopup="true"
// 				aria-expanded={ open ? 'true' : undefined }
// 				onClick={ handleClick }
// 				onMouseEnter={ handleClick }
// 				style={ {
// 					zIndex: '5555555555555555555555555555',
// 				} }
// 			>
// 				{ text }
// 				<ArrowForwardIosIcon
// 					style={ { height: '100%', margin: '0', paddingRight: '10%' } }
// 				/>
// 			</StyledMenuItem>
// 			<StyledMenu
// 				MenuListProps={ {
// 					onMouseLeave: handleClose,
// 				} }
// 				// style={ {
// 				// 	backgroundColor: 'green',
// 				// } }
// 				id={ `category-${ text }` }
// 				aria-labelledby={ text }
// 				anchorEl={ anchorEl }
// 				open={ open }
// 				onClose={ handleClose }
// 				anchorOrigin={ {
// 					vertical: 'top',
// 					horizontal: 'right',
// 				} }
// 				transformOrigin={ {
// 					vertical: 'top',
// 					horizontal: 'left',
// 				} }
// 			>
// 				{ children }
// 			</StyledMenu>
// 		</>
// 	)
// }
//
// export default memo(Parent)
//
