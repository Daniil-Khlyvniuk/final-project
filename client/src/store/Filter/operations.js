import queryString from 'query-string'
import {actions} from './filterSlice'

const setFiltersFromUri = (uriObject) => (dispatch,getState) => {
	
	//чтобы множественные фильтры всегда были массивом
	const arrayTypeFields = ['category','size','color'] 

	if(Object.keys(uriObject).length)
	{
	
		const state = getState().filter.data
		const fromQuery = {}
		for(let key in uriObject)
		{
			// if(state[key])
			if(key in state)
			{
				if(arrayTypeFields.includes(key))
				{
					fromQuery[key] = Array.isArray(uriObject[key]) 
						? [...uriObject[key]] 
						: [uriObject[key]]
				}
				else 
				{
					fromQuery[key] = uriObject[key]
				}
			}
		}
		// eslint-disable-next-line no-console
		// console.log('uri obj', fromQuery)
		dispatch(actions.setNewStore(fromQuery))
	}
}

//sets filter value to store + update url search params
const filtersHandler = (action, value, history) => (dispatch, getState) =>  {
	if(actions[action])
	{
		dispatch(actions[action](value))
		const filters = getState().filter.data
		history.push({
			pathname: history.location.pathname,
			search: queryString.stringify(filters,{
				arrayFormat: 'comma',
				skipNull: true,
				skipEmptyString: true,
				parseNumbers: true
			}),
		})
	}	
}

export default {
	setFiltersFromUri,
	filtersHandler,
	...actions,
}