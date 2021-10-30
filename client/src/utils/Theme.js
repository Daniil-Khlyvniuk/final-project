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
		success: { main: '# ' },
	},

	typography: {
		fontFamily: 'Mulish, Montserrat, sans-serif',
		fontSize: '16px',
		h2: {
			fontFamily: 'Abel'
		},
		h3: {},
		h4: {},
		p: {
			fontFamily: 'Mulish,',
		}
	},
})
export default theme