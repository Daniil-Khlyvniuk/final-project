import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

export const StyledTypography = styled(Typography)(() => ({
	fontSize: '32px',
	textTransform: 'uppercase',
	fontWeight: 400,
	margin: 'auto',
	alignSelf: 'center',
}))