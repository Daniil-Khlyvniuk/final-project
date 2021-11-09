import { styled } from '@mui/material/styles'
import { Box } from '@mui/system'
import Autocomplete from '@mui/material/Autocomplete'

export const StyledBox = styled(Box)(() => ({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))

export const StyledAutocomplete = styled(Autocomplete)(() => ({
	width: 380,
	position: 'relative',
	'& .css-y2vtlc-MuiFormLabel-root-MuiInputLabel-root': {
		fontWeight: 600,
		fontSize: '16px',
		color: '#373F41',
		left: 30
	},
	'& .MuiAutocomplete-inputRoot': {
		paddingLeft: 30
	}
}))

export const Search = styled('div')(() => ({
	position: 'relative',
}))

export const SearchIconWrapper = styled('div')(() => ({
	height: '100%',
	position: 'absolute',
	top: 5,
	pointerEvents: 'none',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}))
