import * as yup from 'yup'
import {
	STR_REGEX,
	PHONE_REGEX,
	STR_REGEX_LATIN_ONLY,
	NUMBERS
} from './regex'
import { phoneRegExp } from '../../UserProfile/UserForm/data/Regex'

//default required field error
const isRequiredError = 'This field is required'
const isNotTrimmedError = 'This field must have no spaces before and after'
const isNotLowerCaseError = 'This field must be written in lowercase'


export const SING_UP_SCHEMA = yup.object().shape({
	firstName: yup.string()
		.strict(true)
		.trim(isNotTrimmedError)
		.min(3, 'Must be longer than 3 characters')
		.max(20, 'Nice try, nobody has a last name that long')
		.required(isRequiredError)
		.matches(STR_REGEX, 'Invalid symbols, use only character'),
	lastName: yup.string()
		.strict(true)
		.trim(isNotTrimmedError)
		.min(3, 'Must be longer than 3 characters')
		.max(20, 'Nice try, nobody has a second name that long')
		.required(isRequiredError)
		.matches(STR_REGEX, 'Invalid symbols, use only character'),
	login: yup.string()
		.strict(true)
		.lowercase(isNotLowerCaseError)
		.trim(isNotTrimmedError)
		.required(isRequiredError)
		.matches(STR_REGEX_LATIN_ONLY, 'Invalid symbols, use only character'),
	email: yup.string()
		.strict(true)
		.trim(isNotTrimmedError)
		.required(isRequiredError)
		.email('Enter correct email'),
	password: yup.string()
		.required(isRequiredError)
		.min(7, 'Password must be 7 digits minimum')
		.max(30, 'Password must be 30 digits maximum'),
	confirmPass: yup.string()
		.required(isRequiredError)
		.oneOf([yup.ref('password')], 'Passwords do not match'),
	subscribe: yup.bool(),
	rememberMe: yup.bool(),
})

export const LOGIN_SCHEMA = yup.object().shape({
	loginOrEmail: yup.string()
		.strict(true)
		.lowercase(isNotLowerCaseError)
		.required(isRequiredError),
	password: yup.string()
		.required(isRequiredError)
		.min(7, 'Password must be 7 digits minimum')
		.max(30, 'Password must be 30 digits maximum'),
	// subscribe: yup.bool(),
	rememberMe: yup.bool(),
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


export const CHECKOUT_FORM = yup.object().shape({
	firstName: yup
		.string()
		.min(4, 'Write Real Name')
		.max(50, 'Too Long')
		.typeError('Write Real Name')
		.required(isRequiredError)
		.matches(STR_REGEX, 'Invalid symbols, use only character'),
	lastName: yup
		.string()
		.min(4, 'Write Real Name')
		.max(50, 'Too Long')
		.typeError('Write Real Name')
		.required(isRequiredError)
		.matches(STR_REGEX, 'Invalid symbols, use only character'),
	phone: yup.string()
		.matches(phoneRegExp, 'Please enter a valid phone number')
		.required(isRequiredError)
	,
	email: yup
		.string()
		.email('Invalid email')
		.strict(true)
		.required(isRequiredError)
		.email('Enter correct email'),
	address: yup
		.string()
		.min(10, 'Write Real Address')
		.max(50, 'Too Long')
		.required(isRequiredError),
	city: yup
		.string()
		.max(10, 'Write Real city')
		.required(isRequiredError),
	zip: yup
		.string()
		.matches(NUMBERS, 'Must be only numbers')
		.max(6, 'Not valid zip code')
		.min(4, 'Not valid zip code')
		.required(isRequiredError),
	country: yup
		.string()
		.nullable()
		.required(isRequiredError),
})