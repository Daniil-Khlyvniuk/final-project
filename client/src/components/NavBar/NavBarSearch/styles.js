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
	'& .css-y2vtlc-MuiFormLabel-root-MuiInputLabel-root': {
		fontWeight: 600,
		fontSize: '16px',
		color: '#373F41',
	}
}))