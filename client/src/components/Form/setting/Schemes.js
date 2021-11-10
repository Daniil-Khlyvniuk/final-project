import * as yup from 'yup'
import {
	STR_REGEX,
	PHONE_REGEX,
	IS_REQUIRED
} from './regex'

//default required field error
const isRequiredError = 'This field is required'


export const SING_UP_SCHEMA = yup.object().shape({
	name: yup.string()
		.required(IS_REQUIRED)
		.matches(STR_REGEX, 'Invalid symbols, use only character'),
	email: yup.string()
		.required(IS_REQUIRED)
		.email('Enter correct email'),
	password: yup.string()
		.required(IS_REQUIRED),
	confirmPass: yup.string()
		.required(IS_REQUIRED)
		.oneOf([yup.ref('password')], 'Passwords do not match'),

})

export const SHIPPING_SCHEMA = yup.object().shape({
	firstname: yup.string()
		.matches(STR_REGEX, 'Use only characters'),
	lastname: yup.string()
		.matches(STR_REGEX, 'Use only characters'),
	address1: yup.string()
		.matches(STR_REGEX, 'Use only characters'),
	address2: yup.string()
		.matches(STR_REGEX, 'Use only characters'),
	country: yup,
	city: yup,
	postcode: yup.number()
		.max(4, 'Post code can`t be bigger then 4 characters'),
	phone: yup.string()
		.matches(PHONE_REGEX, 'Phone need to be in format +38(0xx) XXX-XX-XX')
})

export const SUBSCRIBE_SCHEMA = yup.object().shape({
	email: yup.string().required(isRequiredError).email('Enter correct email'),
})
