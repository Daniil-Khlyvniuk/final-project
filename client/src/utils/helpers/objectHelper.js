export const returnObjectWithoutZeroVal = (object) => {
	const res = {}
	for (let key in object)
	{
		if(object[key] != 0)
		{
			res[key] = object[key]
		}
	}
	return res
}