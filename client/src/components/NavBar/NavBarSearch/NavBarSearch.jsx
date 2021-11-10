import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import SearchIcon from './SearchIcon/SearchIcon'
import { Search, SearchIconWrapper, StyledAutocomplete, StyledBox } from './styles'
import productsAPI from '../../../utils/API/productsAPI'
import { Grid, Avatar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const HeaderSearch = () => {
	const [options, setOptions] = useState([])
	let timer

	const clearOptions = () => {
		setOptions([])
	}

	const onSearch = (e) => {
		clearTimeout(timer)

		timer = setTimeout(async function () {

			if (e.target.value.trim().length === 0) {
				setOptions([])
				return
			}

			try {
				const res = await productsAPI.searchForProducts(
					{ query: e.target.value }
				)
				const data = await res.data

				if (data.length > 0) {
					setOptions(data)
				} else {
					setOptions([])
				}
			} catch (err) {
				// eslint-disable-next-line no-console
				console.error(err)
				setOptions([])
			}
		}, 500)
	}

	return (
		<StyledBox>
			<Search>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledAutocomplete
					id="combo-box-demo"
					options={options}
					onKeyUp={onSearch}
					onBlur={clearOptions}
					// onBlur={clearInput}
					// onKeyDown={(event) => {
					// 	if (event.key === 'Enter') {
					// 		// Prevent's default 'Enter' behavior.
					// 		event.defaultMuiPrevented = true
					// 		// eslint-disable-next-line no-console
					// 		console.log('test')
					// 	}
					// }}
					size='small'
					renderInput={(params) => <TextField {...params} label="Search..." variant="standard" />}
					// getOptionLabel={(option) => `${option.name} 
					// 	${option.currentPrice} 
					// 	${option.itemNo} 
					// 	${option.categories}
					// `}
					getOptionLabel={(option) => option.name.toString()}
					renderOption={(props, option) => {
						return (
							<Link to={`/product-details/${option._id}`}
								style={{ textDecoration: 'none' }}
								{...props}
							>
								<Grid container wrap="nowrap" spacing={2}>
									<Grid item>
										<Avatar
											src={option.imageUrls[0]}
											alt={option.name}
											sx={{ width: 50, height: 50 }}
											variant='square'
										/>
									</Grid>
									<Grid item xs zeroMinWidth>
										<Typography
											variant='menuBold'
											sx={{ display: 'block' }}
										>
											{option.name} ({option.itemNo})
										</Typography>
										<Typography
											variant='footerTextMedium'
											sx={{ display: 'block' }}
										>
											{'$' + option.currentPrice}
										</Typography>
									</Grid>
								</Grid>
							</Link>
						)
					}}
				>
				</StyledAutocomplete>
			</Search>
		</StyledBox>
	)
}

export default HeaderSearch