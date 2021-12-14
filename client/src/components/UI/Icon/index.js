import Icons from '../../../utils/Icons'

const Icon = ({type, ...rest}) => {
	const iconJsx = Icons[type]

	if (!iconJsx) {
		return null
	}

	return (
		iconJsx({...rest})
	)
}

export default Icon
