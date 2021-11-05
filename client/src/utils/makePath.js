import PropTypes from 'prop-types'

const makePath = (str) => {
	/*
  * на случай если каждая категория будет ссылкой
	* srt - например название категории
  * сейчас не актуально
	*/
	const res = str.trim().replace(' ', '-').toLowerCase()
	return '/' + res
}

makePath.propTypes = {
	str: PropTypes.string.isRequired
}

export default makePath