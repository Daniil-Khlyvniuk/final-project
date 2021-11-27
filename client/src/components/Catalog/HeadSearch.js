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
import {BoxSearch, MenuSearch} from './style'

const HeadSearch = () => {
	const [perPage, setPerPage] = useState([])
	const [sortBy, setSortBy] = useState([])
	const [countSort, setCountSort] = useState([])
	const [Sort, setSort] = useState([])
	const [anchorEl, setAnchorEl] = useState(null)
	const [anchorPerP, setAnchorPerP] = useState(null)

	const dispatch = useDispatch()

	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}

	const openPer = Boolean(anchorPerP)
	const handleClickPer = (event) => {
		setAnchorPerP(event.currentTarget)
	}

	const handleShowCount = (item) => {
		setCountSort(item)
		setAnchorPerP(null)
	}
	const handleShowSort = (item) => {
		setSort(item)
		setAnchorEl(null)
	}

	const getPerPageFilters = async () => {
		const pageRes = await filterApi.getFiltersByType('perPage')
		setPerPage(pageRes.data)
		// dispatch(filterOperations.setPerPage(pageRes.data[0].value))
	}
	const getSortByFilters = async () => {
		const sortRes = await filterApi.getFiltersByType('sortBy')
		setSortBy(sortRes.data)
		// dispatch(filterOperations.setSort(sortRes.data[0].value))
	}

	useEffect(()=> {
		getPerPageFilters()
		getSortByFilters()
	// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	return (
		<Box style={BoxSearch}>
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
						onClose={()=> {setAnchorPerP(null)}}
					>
						{perPage.map((item)=>
							<MenuItem
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
					style={MenuSearch}
					id="basic-menu"
					anchorEl={anchorEl}
					open={open}
					onClose={() => {setAnchorEl(null)}}
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
