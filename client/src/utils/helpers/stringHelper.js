import queryString from 'query-string'

export const parseQueryStringWithNoZero = (string) => queryString.parse(
	queryString.exclude(string, (name, val) => val == 0, { parseNumbers: true }),
	{
		arrayFormat: 'comma',
		skipNull: true,
		skipEmptyString: true,
		parseNumbers: true
	})

export const makeQueryStringFromObject = (object) => queryString.stringify(
	object,
	{
		arrayFormat: 'comma',
		skipNull: true,
		skipEmptyString: true,
		parseNumbers: true
	})

// eslint-disable-next-line no-undef
export const returnMode = () => process.env.NODE_ENV ? process.env.NODE_ENV : 'development'

export const stringSlice = (title, length) => {
	const stringLength = length - 3
	
	return title.length >= length
		? title.slice(0, stringLength) + '...'
		: title
}
