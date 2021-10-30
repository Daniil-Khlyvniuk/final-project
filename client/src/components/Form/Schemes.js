import * as yup from 'yup'
import {
	STR_REGEX,
	PHONE_REGEX,
	GMAIL_REGEX,
	IS_REQUIRED
} from './regex'

export const SING_UP_SCHEMA = yup.object().shape({
	name: yup.string()
		.matches(STR_REGEX, 'Your name is invalid, input only real name')
		.required(IS_REQUIRED),
	email: yup.string()
		.matches(GMAIL_REGEX, 'Invalid mail address, try again')
		.required(IS_REQUIRED),
	password: yup.string()
		.min(8, 'Password should be bigger then 8 characters')
		.required(IS_REQUIRED),
	confirmPass: yup.string()
		// .oneOf(yup.ref('password'), 'Passwords must match')
		.required(IS_REQUIRED),
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
		.matches(PHONE_REGEX, 'Phone number is invalid')
})
