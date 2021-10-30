import {styled} from '@mui/material'
import Input from '@mui/material/Input'
import theme from '../../utils/Theme'

const CustomInput = styled(Input)({
	width: 448.69,
	height: 26.06,
	marginTop: 50,
	fontFamily: theme.typography.fontFamily,
	fontStyle: 'normal',
	fontWeight: 300,
	fontSize: 20,
	lineHeight: 24,
})

export default CustomInput