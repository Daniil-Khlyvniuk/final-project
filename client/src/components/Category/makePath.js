const makePath = (str) => {
	/*
	* srt - например название категории
  * на случай если каждая категория будет ссылкой
  * сейчас не актуально
	*/
	const res = str.trim().replace(' ', '-')
	return '/' + res
}

export default makePath