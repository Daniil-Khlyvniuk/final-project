import React, { useEffect, useRef, useState } from 'react'
import { StyledMenuItem } from './style'
import { ClickAwayListener, Grow, MenuList, Popper } from '@mui/material'
import Paper from '@mui/material/Paper'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { KeyboardArrowUp } from '@mui/icons-material'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import productsAPI from '../../../utils/API/productsAPI'
// import productsReducer from '../../../store/Products'

const ParentMenuList = ({
	children = [],
	text = 'Category',
	parent = false,
	root = false
}) => {
	const [open, setOpen] = useState(false)
	const anchorRef = useRef(null)
	const prevOpen = useRef()
	const menuList = useRef()
	// const dispatch = useDispatch()

	const handleToggle = () => {
		setOpen((prevOpen) => !prevOpen)
	}

	const handleClose = (ev) => {
		try {
			if (!!menuList && menuList?.current?.contains(ev.relatedTarget)) {
				return
			}
		} catch (err) {
			return setOpen(false)
		}
		setOpen(false)
	}

	const handleOpen = () => {
		setOpen(true)
	}

	useEffect(() => {
		prevOpen.current = open
	}, [open])

	const getProductsByCategory = () => {
		// productsAPI.getFilteredProducts(`?category=${text}`)
		// 	.then(products => dispatch(productsReducer.setAllProducts(products)))
	}

	return (
		<Box style={{ zIndex: '99999999999999' }}>
			{parent ?
				<Link
					to={`/shop/catalog?category=${text}`}
					style={{ textDecoration: 'none' }}
				>
					<StyledMenuItem
						ref={anchorRef}
						id={`${text}-button`}
						aria-controls={open && 'composition-menu'}
						aria-expanded={open && 'true'}
						aria-haspopup="true"
						onClick={root ? handleToggle : getProductsByCategory}
						onMouseEnter={parent ? handleOpen : null}
						onMouseLeave={handleClose}
					>
						{root ? text : text}
						{parent && <KeyboardArrowRightIcon />}
						{(root && !open) && <KeyboardArrowDownIcon />}
						{(root && open) && <KeyboardArrowUp />}
					</StyledMenuItem>
				</Link> : <StyledMenuItem
					ref={anchorRef}
					id={`${text}-button`}
					aria-controls={open && 'composition-menu'}
					aria-expanded={open && 'true'}
					aria-haspopup="true"
					onClick={root ? handleToggle : null}
					onMouseEnter={parent ? handleOpen : null}
					onMouseLeave={handleClose}
				>
					{root ? text : text}
					{parent && <KeyboardArrowRightIcon />}
					{(root && !open) && <KeyboardArrowDownIcon />}
					{(root && open) && <KeyboardArrowUp />}
				</StyledMenuItem>}

			<Popper
				open={open}
				anchorEl={anchorRef.current}
				role={undefined}
				placement={root ? 'bottom-start' : 'right-start'}
				transition
				disablePortal
			>
				{({ TransitionProps, placement }) => (
					<Grow
						{...TransitionProps}
						style={{
							transformOrigin:
								placement === 'bottom-start' ? 'left top' : 'left bottom',
						}}
					>
						<Paper
							ref={menuList}
							onMouseLeave={handleClose}
						>
							<ClickAwayListener
								onClickAway={handleClose}
							>
								<MenuList
									ref={menuList}
									autoFocusItem={open}
									id={`${text}-menu`}
									aria-labelledby={`${text}-button`}
								>
									{children}
								</MenuList>
							</ClickAwayListener>
						</Paper>
					</Grow>
				)}
			</Popper>
		</Box >
	)
}

ParentMenuList.propTypes = {
	text: PropTypes.string,
	children: PropTypes.array,
	parent: PropTypes.bool,
	root: PropTypes.bool,
}

export default ParentMenuList
