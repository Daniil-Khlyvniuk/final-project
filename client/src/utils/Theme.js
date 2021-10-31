import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	breakpoints: {
		keys: ['xs', 'sm', 'md', 'lg', 'xl'],
		values: {
			xl: 1440,
			lg: 1000,
			md: 768,
			sm: 480,
			xs: 320,
		},
	},
	palette: {
		primary: { main: '#373F41' },
		secondary: { main: '#5C5E60' },
		error: { main: '#8C8C8C' },
		success: { main: '#388e3c' },
	},
	typography: {
		// fontFamily: 'Mulish, Montserrat, sans-serif',
		fontSize: 16,
		h2: {
			// fontFamily: 'Abel'
		},
		h3: {},
		h4: {},
		p: {
			fontFamily: 'Mulish',
		},
		menuBold: {
			textTransform: 'capitalize',
			color: '#373F41',
			fontFamily: 'Mulish',
			fontWeight: 700,
			fontSize: '16px',
			lineHeight: 'normal'
		},
		footerTextMedium: {
			textTransform: 'capitalize',
			color: '#373F41',
			fontFamily: 'Mulish',
			fontWeight: 400,
			fontSize: '16px',
			lineHeight: 'normal'
		},
		footerTextLight: {
			textTransform: 'capitalize',
			color: '#8A9394',
			fontFamily: 'Mulish',
			fontWeight: 200,
			fontSize: '14px',
			lineHeight: 'normal'
		},
	},
})
export default theme