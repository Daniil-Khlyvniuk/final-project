import React from 'react'
import PropTypes from 'prop-types'

const UseMakeNodeChild = (objectTree, Parent, Child) => {
	if (objectTree.length < 1) return

	const makeResultList = (objectTree) => objectTree.map((group, i) => {
		if (group.children) {
			return (
				<Parent parent key={ i } text={ group.name }>
					{
						makeResultList(group.children)
					}
				</Parent>
			)
		} else {
			return (
				<Child key={ i } text={ group.name }/>
			)
		}
	})

	return makeResultList(objectTree)
}

UseMakeNodeChild.propTypes = {
	objectTree: PropTypes.array.isRequired,
	Parent: PropTypes.object.isRequired,
	Child: PropTypes.object.isRequired
}

export default UseMakeNodeChild