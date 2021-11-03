import React from 'react'

const UseMakeNodeChild = (objectTree, Parent, Child) => {
	if (objectTree.length < 1) return

	const makeResultList = (objectTree) => objectTree.map((group, i) => {
		if (group.children) {
			return (
				<Parent key={ i } text={ group.name }>
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

export default UseMakeNodeChild