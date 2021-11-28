import {actions} from './filterSlice'
import {makeQueryStringFromObject} from '../../utils/helpers/stringHelper'
import {returnObjectWithoutZeroVal} from '../../utils/helpers/objectHelper'

const setFiltersFromUri = (uriObject) => (dispatch,getState) => {
	
	//чтобы множественные фильтры всегда были массивом
	const arrayTypeFields = ['category','size','color'] 

	if(Object.keys(uriObject).length)
	{
		const state = getState().filter.data
		const fromQuery = {}
		for(let key in uriObject)
		{
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
		dispatch(actions.setNewStore(fromQuery))
	}
}

//sets filter value to store + update url search params
const filtersHandler = (action, value, history) => (dispatch, getState) =>  {
	if(actions[action] || action === 'handlePriceRange')
	{
		if(action !== 'handlePriceRange')
		{
			dispatch(actions[action](value))
		}
		else
		{
			const [minPrice, maxPrice] = value
			dispatch(actions.handleMinPrice(minPrice))
			dispatch(actions.handleMaxPrice(maxPrice))
		}
		//delete from object values with 0
		const filters = returnObjectWithoutZeroVal(getState().filter.data)

		history.push({
			pathname: history.location.pathname,
			search: makeQueryStringFromObject(filters), //make query string from object
		})
	}	
}


export default {
	setFiltersFromUri,
	filtersHandler,
	...actions,
}