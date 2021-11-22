import {actions} from './filterSlice'

const setFiltersFromUri = (uriObject) => (dispatch,getState) => {
	if(Object.keys(uriObject).length)
	{
		const state = getState().filter.data
		const fromQuery = {}
		for(let key in uriObject)
		{
			if(state[key])
			{
				fromQuery[key] = Array.isArray(uriObject[key]) 
					? [...uriObject[key]] 
					: [uriObject[key]]
			}
		}
		dispatch(actions.setNewStore(fromQuery))
	}
}

export default {
	setFiltersFromUri,
	...actions,
}