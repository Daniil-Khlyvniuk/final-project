import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import filterApi from '../../utils/API/filterApi'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import { filterOperations } from '../../store/Filter'
import { useDispatch } from 'react-redux'


const HeadSearch = () => {
	const [perPage, setPerPage] = useState([])
	const [sortBy, setSortBy] = useState([])
	const [countSort, setCountSort] = useState([])
	const [Sort, setSort] = useState([])

	const dispatch = useDispatch()

	const [anchorEl, setAnchorEl] = React.useState(null)
	const [anchorPerP, setAnchorPerP] = React.useState(null)

	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const openPer = Boolean(anchorPerP)
	const handleClickPer = (event) => {
		setAnchorPerP(event.currentTarget)
	}
	const handleClosePer = () => {
		setAnchorPerP(null)
	}

	const handleShowCount = (item) => {
		setCountSort(item)
		handleClosePer()
	}
	const handleShowSort = (item) => {
		setSort(item)
		handleClose()
	}

	const getPerPageFilters = async () => {
		const pageRes = await filterApi.getFiltersByType('perPage')
		setPerPage(pageRes.data)
		dispatch(filterOperations.setPerPage(pageRes.data[0].value))
	}
	const getSortByFilters = async () => {
		const sortRes = await filterApi.getFiltersByType('sortBy')
		setSortBy(sortRes.data)
		dispatch(filterOperations.setSort(sortRes.data[0].value))
	}


	useEffect(()=> {
		getPerPageFilters()
		getSortByFilters()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])



	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				margin: 'auto',
			}}
		>

			{perPage.length && (
				<div>
					<Button
						id="basic-button"
						aria-controls="basic-menu"
						aria-haspopup="true"
						aria-expanded={openPer ? 'true' : undefined}
						onClick={handleClickPer}
					>{countSort.length ?  countSort :  'Show'}
						{openPer ? <KeyboardArrowRightIcon /> : <KeyboardArrowDownIcon />}
					</Button>
					<Menu
						id="basic-menu"
						anchorEl={anchorPerP}
						open={openPer}
						value={countSort}
						onClose={handleClosePer}
						MenuListProps={{
							'aria-labelledby': 'basic-button',
						}}
					>
						{perPage.map((item)=>
							<MenuItem
								style={{boxShadow: 'none'}}
								onClick={()=>{ handleShowCount(item.name) }}
								key={item._id} 
								value={item.value}
							>{item.name}</MenuItem>)}
					</Menu>
				</div>
			)}
			<div>
				<Button
					id="basic-button"
					aria-controls="basic-menu"
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					onClick={handleClick}
				>{Sort.length ?  Sort :  'Sort by'}
					{open ? <KeyboardArrowRightIcon /> : <KeyboardArrowDownIcon />}
				</Button>
				<Menu
					style={{
						border: '1px solid #373F41',
						borderRadius: '1px',
						boxShadow: 'none'
					}}
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={handleClose}
					MenuListProps={{
						'aria-labelledby': 'basic-button',
					}}
					onChange={(event) => 
						dispatch(filterOperations.setPerPage(event.target.value))}
				>
					{sortBy.map((item)=>
						<MenuItem
							key={item._id}
							value={item.value}
							onClick={()=>{handleShowSort(item.name)}}
						>{item.name}</MenuItem>)}
				</Menu>
			</div>
		</Box>
	)
}

export default HeadSearch
