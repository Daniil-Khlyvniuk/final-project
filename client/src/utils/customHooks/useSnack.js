import { useDispatch } from 'react-redux'
import {snackBarOperations} from '../../store/SnackBar'

const UseSnack = () => 
{
	const dispatch = useDispatch()
	const handleSnack = ({message, style = 'info'}) => dispatch(snackBarOperations.snackSettings({message, severity: style}))
	return {handleSnack}
}

export default UseSnack
