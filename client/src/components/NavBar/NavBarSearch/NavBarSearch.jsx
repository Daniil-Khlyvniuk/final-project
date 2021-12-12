import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import SearchIcon from './SearchIcon/SearchIcon'
import { Search, SearchIconWrapper, StyledAutocomplete, StyledBox } from './styles'
import productsAPI from '../../../utils/API/productsAPI'
import { CircularProgress, Grid, Avatar, Typography } from '@mui/material'
import { useHistory, Link } from 'react-router-dom'

const HeaderSearch = () => {
	const [options, setOptions] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	let history = useHistory()
	let timer

	const onSearch = (e) => {
		clearTimeout(timer)
		setIsLoading(true)
		if (!e.target.value) return setIsLoading(false)

		timer = setTimeout(() => {
			if (e.target.value.trim().length === 0) {
				setOptions([])
				return
			}
			try {
				productsAPI.searchForProducts(
					{ query: e.target.value }
				).then(({ data }) => {
					setIsLoading(false)
					if (data.length > 0) {
						setOptions(data)
					}
				})
			} catch (err) {
				// eslint-disable-next-line no-console
				console.error(err)
				setOptions([])
<<<<<<< HEAD
=======
				setIsLoading(false)
>>>>>>> develop
			}
		}, 700)
	}

	return (
<<<<<<< HEAD
		<StyledBox>
=======
		<StyledBox data-testid='navbar-search'>
>>>>>>> develop
			<Search>
				<SearchIconWrapper>
					<SearchIcon />
				</SearchIconWrapper>
				<StyledAutocomplete
					disablePortal
					id="combo-box-demo"
					options={options}
					noOptionsText={'Search for products...'}
					loading={isLoading}
					clearOnBlur
					onKeyUp={onSearch}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							e.defaultMuiPrevented = true
							try {
								productsAPI.searchForProducts(
									{ query: e.target.value }
								).then(({ data }) => {
									if (data.length > 0) {
										history.push(`/search?search_term=${e.target.value}`)
									}
								})
							} catch (err) {
								// eslint-disable-next-line no-console
								console.error(err)
							}
						}
					}}
					renderInput={(params) => <TextField
						{...params}
						label="Search..."
						variant="standard"
						InputProps={{
							...params.InputProps,
							endAdornment: (
								<React.Fragment>
									{isLoading ? <CircularProgress color="inherit" size={20} /> : null}
									{params.InputProps.endAdornment}
								</React.Fragment>
							),
						}}
					/>}
					size='small'
					getOptionLabel={(option) => option.name}
					isOptionEqualToValue={(option) => option.name}
					renderOption={(props, option) => {
						return (
							<Link
								to={`/product-details/${option.variants._id}`}
								style={{ textDecoration: 'none' }}
								{...props}
							>
								<Grid container wrap="nowrap" spacing={2}>
									<Grid item>
										<Avatar
											src={'/' + option.variants.imageUrls[0]}
											alt={option.name}
											sx={{ width: 50, height: 50 }}
											variant='square'
										/>
									</Grid>
									<Grid item xs zeroMinWidth>
										<Typography
											variant='menuBold'
<<<<<<< HEAD
											sx={{ display: 'block' }}
=======
											sx={{ display: 'block', color: '#373F41' }}
>>>>>>> develop
										>
											{option.name}
										</Typography>
										<Typography
											variant='footerTextMedium'
<<<<<<< HEAD
											sx={{ display: 'block' }}
=======
											sx={{ display: 'block', color: '#373F41' }}
>>>>>>> develop
										>
											({option.variants.itemNo})
										</Typography>
										<Typography
											variant='menuBold'
<<<<<<< HEAD
											sx={{ display: 'block' }}
=======
											sx={{ display: 'block', color: '#373F41' }}
>>>>>>> develop
										>
											{'$' + option.variants.currentPrice}
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
