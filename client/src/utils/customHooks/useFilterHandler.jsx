//set filters to store + update query string + make new product request by filters
import queryString from 'query-string'
import {useHistory} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import {filterSelectors, filterOperations} from '../../store/Filter'
import {productsOperations} from '../../store/Products'

const useFilterHandler = () => {
	const dispatch = useDispatch()
	const history = useHistory()
	const isLaunchedByUser = useSelector(filterSelectors.getIsLaunchedByUser())
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
	const onLoadingPage = () => {
		// eslint-disable-next-line no-console
		console.log('HOHOHO',history.location.search)
		if(!isLaunchedByUser)
		{
			const urlParams = queryString.parse(history.location.search,{arrayFormat: 'comma'})
			dispatch(filterOperations.setFiltersFromUri(urlParams))
			dispatch(productsOperations.fetchProductsByFilter())
		}
	}
	return [handleFilterChange,onLoadingPage]
}

export default useFilterHandler
