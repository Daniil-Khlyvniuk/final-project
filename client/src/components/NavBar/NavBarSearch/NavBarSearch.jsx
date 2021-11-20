import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import SearchIcon from './SearchIcon/SearchIcon'
import { Search, SearchIconWrapper, StyledAutocomplete, StyledBox } from './styles'
import productsAPI from '../../../utils/API/productsAPI'
import { CircularProgress, Grid, Avatar, Typography } from '@mui/material'
// eslint-disable-next-line no-unused-vars
import { useHistory, Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'
// import setAllProducts from '../../../store/Products'

const HeaderSearch = () => {
	const [options, setOptions] = useState([])
	// eslint-disable-next-line no-console
	console.log('options', options)
	const [isLoading, setIsLoading] = useState(false)
	// const dispatch = useDispatch()
	// let history = useHistory()
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
					// dispatch(setAllProducts.setAllProducts(data)) // var2
					}
				})
			} catch (err) {
				// eslint-disable-next-line no-console
				console.error(err)
				setOptions([])
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
					options={options}
					noOptionsText={'Search for products...'}
					loading={isLoading}
					clearOnBlur
					onKeyUp={onSearch}
					// onKeyDown={(e) => {
					// 	if (e.key === 'Enter') {
					// 		e.defaultMuiPrevented = true
					// 		try {
					// 			productsAPI.searchForProducts(
					// 				{ query: e.target.value }
					// 			).then(({ data }) => {
					// 				if (data.length > 0) {
					// 					dispatch(setAllProducts.setAllProducts(data))
					// 					history.push('/shop/catalog')
					// 				}
					// 			})
					// 		} catch (err) {
					// 			// eslint-disable-next-line no-console
					// 			console.error(err)
					// 			dispatch(setAllProducts.setAllProducts([]))
					// 		}
					// 	}
					// }}
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
					getOptionLabel={(option) => option.product.name}
					renderOption={(props, option) => {
						return (
							<Link
								to={`/product-details/${option._id}`} // var 1
								// to={'/shop/catalog'} // var2 
								style={{ textDecoration: 'none' }}
								{...props}
							>
								<Grid container wrap="nowrap" spacing={2}>
									<Grid item>
										<Avatar
											src={'/' + option.imageUrls[0]}
											alt={option.product.name}
											sx={{ width: 50, height: 50 }}
											variant='square'
										/>
									</Grid>
									<Grid item xs zeroMinWidth>
										<Typography
											variant='menuBold'
											sx={{ display: 'block' }}
										>
											{option.product.name} ({option.itemNo})
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