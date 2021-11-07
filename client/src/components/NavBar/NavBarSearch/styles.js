import { styled } from '@mui/material/styles'
import { Alert, InputBase } from '@mui/material'
import { Box } from '@mui/system'
import Autocomplete from '@mui/material/Autocomplete'

export const Search = styled('div')(() => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	padding: 0,
	width: 380,
}))

export const StyledInputBase = styled(InputBase)(() => ({
	width: 380,
	fontFamily: 'Mulish',
	fontWeight: 600,
	fontSize: '16px',
	color: '#373F41',
	display: 'block'
}))

export const StyledAlert = styled(Alert)(() => ({
	color: '#373F41',
	marginLeft: 27,
	padding: 0,
	backgroundColor: 'unset',
	'& .css-acap47-MuiAlert-message, & .MuiAlert-icon': {
		padding: '5px 0',
	}
}))

export const StyledBox = styled(Box)(() => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

export const StyledAutocomplete = styled(Autocomplete)(() => ({
	width: 380,
	'& .css-1i7vg6k-MuiFormLabel-root-MuiInputLabel-root': {
		fontWeight: 600,
		fontSize: '16px',
		color: '#373F41',
	}
}))