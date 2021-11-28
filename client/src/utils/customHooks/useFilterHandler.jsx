import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {filterSelectors, filterOperations} from '../../store/Filter'
import {productsOperations} from '../../store/Products'
import settingsApi from '../API/settingsApi'
import {returnObjectWithoutZeroVal} from '../../utils/helpers/objectHelper'

import {parseQueryStringWithNoZero, returnMode} from '../helpers/stringHelper'

const useFilterHandler = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const isLaunchedByUser = useSelector(filterSelectors.getIsLaunchedByUser())
	
	const getSettings = async () => {
		try{
			const settingsRes = await settingsApi.getSettings()
			const mode = returnMode()
			return settingsRes.data[0][mode]['settings']
		}
		catch(err)
		{
			// eslint-disable-next-line no-console
			console.log('settings request err', err)
		}
	}

	const handleFilterChange = (action,value) => {
		if(!action || !value)
		{
			return
		}
		const actionName = 'handle'+ action[0].toUpperCase() + action.slice(1)
		dispatch(filterOperations.setIsLaunchedByUser(true))
		dispatch(filterOperations.filtersHandler(actionName,value,history))
		dispatch(productsOperations.fetchProductsByFilter())
	}
	const onLoadingPage = async () => {	
		//get settings here, becouse from redux return null - async
		let settings = await getSettings()
		if(!isLaunchedByUser && settings)
		{
			const urlParams = parseQueryStringWithNoZero(history.location.search)

			//delete from object values with 0
			settings = returnObjectWithoutZeroVal(settings)

			dispatch(filterOperations.setFiltersFromUri({...settings,...urlParams}))
			dispatch(productsOperations.fetchProductsByFilter())
			// eslint-disable-next-line no-console
		}
	}
	return [handleFilterChange, onLoadingPage]
}

export default useFilterHandler
