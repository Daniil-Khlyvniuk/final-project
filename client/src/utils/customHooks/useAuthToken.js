import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import { userOperations, userSelectors} from '../../store/User'

const useAuthToken = () => {
	const dispatch = useDispatch()
	const token = useSelector(userSelectors.getToken())
	const checkToken = () => 
	{
		if (token) {
			axios.defaults.headers.common['Authorization'] = token
			dispatch(userOperations.fetchUser())
		} else {
			axios.defaults.headers.common['Authorization'] = null
			/*if setting null does not remove `Authorization` header then try     
					delete axios.defaults.headers.common['Authorization'];
				*/
		}
		return token
	}

	return [checkToken]
}

export default useAuthToken