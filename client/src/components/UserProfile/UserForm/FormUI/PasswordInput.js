import React, {useState} from 'react'
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'

// eslint-disable-next-line react/prop-types
const PasswordInput = ({title}) => {
	const [values, setValues] =useState({
		password: '',
		showPassword: false,
	})

	const handleChange = (prop) => (event) => {
		setValues({ ...values, [prop]: event.target.value })
	}

	const handleClickShowPassword = () => {
		setValues({
			...values,
			showPassword: !values.showPassword,
		})
	}

	const handleMouseDownPassword = (event) => {
		event.preventDefault()
	}

	return (

		<FormControl sx={{ m: 1, width:'100%'}} variant="outlined">
			<InputLabel htmlFor="outlined-adornment-password">{title}</InputLabel>
			<OutlinedInput
				id="outlined-adornment-password"
				type={values.showPassword ? 'text' : 'password'}
				value={values.password}
				onChange={handleChange('password')}
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							onClick={handleClickShowPassword}
							onMouseDown={handleMouseDownPassword}
							edge="end"
						>
							{values.showPassword ? <VisibilityOff /> : <Visibility />}
						</IconButton>
					</InputAdornment>
				}
				label={title}
			/>
		</FormControl>

	)
}


export default PasswordInput