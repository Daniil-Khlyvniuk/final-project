// import React from 'react'
import {styled} from '@mui/material'
import Input from '@mui/material/Input'
import theme from '../../../utils/Theme'

const CustomInput = styled(Input)({
	width: 448.69,
	height: 26.06,
	fontFamily: theme.typography.fontFamily,
	fontStyle: 'normal',
	fontWeight: 300,
	fontSize: 20,
	lineHeight: 24,
	transition: '0.5s'
})

// const Input = ({field, form, ...rest}) => {
// 	const {name} = field;
// 	return (
// 		<div className={'input-place'}>
// 			<CustomInput/>
// 			<div>
// 				{form.touched[name] && form.errors[name] && (
// 					<div className="error">{form.errors[name]}</div>
// 				)}
// 			</div>
// 		</div>
// 	);
// };

export default CustomInput
