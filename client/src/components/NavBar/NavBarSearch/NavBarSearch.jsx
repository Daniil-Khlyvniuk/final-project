import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import SearchIcon from './SearchIcon/SearchIcon'
import { Search, SearchIconWrapper, StyledAutocomplete, StyledBox } from './styles'
import productsAPI from '../../../utils/API/productsAPI'
import { Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const HeaderSearch = () => {
	const [autocomplete, setAutocomplete] = useState([])
	// const [matchedCards, setMatchedCards] = useState([])
	let timer

	const onSearch = (e) => {
		clearTimeout(timer)

		timer = setTimeout(() => {

			if (e.target.value.trim().length === 0) {
				setAutocomplete([])
				return
			}

			try {
				productsAPI.searchAutocomplete(
					{ query: e.target.value }
				).then(({data}) => {
					if (data.length > 0) {
						setAutocomplete(data)
					} else {
						setAutocomplete([])
					}
				})
				
			} catch (err) {
				// eslint-disable-next-line no-console
				console.error(err)
				setAutocomplete([])
			}
		}, 700)
	}

	return (
		<StyledBox>
			<Search>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledAutocomplete
					disablePortal
					id="combo-box-demo"
					options={autocomplete}
					onKeyUp={onSearch}
					size='small'
					renderInput={(params) => <TextField {...params} label="Search..." variant="standard" />}
					getOptionLabel={(option) => option}
					renderOption={(props, option) => {
						// eslint-disable-next-line no-console
						console.log(option)
						return (
							<Link
								to={`/product-details/${option._id}`}
								style={{ textDecoration: 'none' }}
								{...props}
							>
								<Grid container wrap="nowrap" spacing={2}>
									{/* <Grid item>
										<Avatar
											// src={option.imageUrls[0]}
											alt={option.name}
											sx={{ width: 50, height: 50 }}
											variant='square'
										/>
									</Grid> */}
									<Grid item xs zeroMinWidth>
										<Typography
											variant='menuBold'
											sx={{ display: 'block' }}
										>
											{/* {option} ({option.itemNo}) */}
											{option}
										</Typography>
										{/* <Typography
											variant='footerTextMedium'
											sx={{ display: 'block' }}
										>
											{'$' + option.currentPrice}
										</Typography> */}
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