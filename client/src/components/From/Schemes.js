import * as yup from 'yup'
import * as regex from './regex'

export const SING_UP_SCHEMA = yup.object().shape({
	name: yup.string()
		.matches(regex.NAME_REGEX, 'Your name is invalid, input only real name')
		.required(regex.IS_REQUIRED),
	email: yup.string()
		.matches(regex.GMAIL_REGEX, 'Invalid mail address, try again')
		.required(regex.IS_REQUIRED),
	password: yup.string()
		.min(8, 'Password should be bigger then 8 characters')
		.required(regex.IS_REQUIRED),
	confirmPass: yup.string()
		.oneOf(yup.ref('password'), 'Passwords must match')
		.required(regex.IS_REQUIRED),
})

export const SHIPPING_SCHEMA = yup.object().shape({
	firstname: yup.string()
		.matches(regex.STR_REGEX, 'Use only characters'),
	lastname: yup.string()
		.matches(regex.STR_REGEX, 'Use only characters'),
	address1: yup.string()
		.matches(regex.STR_REGEX, 'Use only characters'),
	address2: yup.string()
		.matches(regex.STR_REGEX, 'Use only characters'),
	country: yup,
	city: yup,
	postcode: yup.number()
		.max(4, 'Post code can`t be bigger then 4 characters'),
	phone: yup.string()
		.matches(regex.PHONE_REGEX, 'Phone number is invalid')
})