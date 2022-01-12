const IS_REQUIRED = 'This field is required'
const STR_REGEX = /^[a-zа-яё]+$/i
const STR_REGEX_LATIN_ONLY = /[a-z]/
const PHONE_REGEX =	/\+38\([\d]{3}\)\s[\d]{3}-[\d]{2}-[\d]{2}/
const NUMBERS =	/^[0-9]+$/

export {
	STR_REGEX, 
	IS_REQUIRED,
	PHONE_REGEX,
	STR_REGEX_LATIN_ONLY,
	NUMBERS
}