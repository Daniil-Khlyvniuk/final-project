// eslint-disable-next-line max-len
const NAME_REGEX = /^(([A-Za-z]+[-']?)*([A-Za-z]+)?\s)+([A-Za-z]+[-']?)*([A-Za-z]+)?$/
const IS_REQUIRED = 'This field is required'
// eslint-disable-next-line max-len
const GMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const STR_REGEX = /[A-Za-z]/
// eslint-disable-next-line max-len
const PHONE_REGEX = /^(\+)?(\(\d{2,3}\) ?\d|\d)(([-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/

export {
	STR_REGEX, 
	GMAIL_REGEX,
	IS_REQUIRED,
	NAME_REGEX,
	PHONE_REGEX
}