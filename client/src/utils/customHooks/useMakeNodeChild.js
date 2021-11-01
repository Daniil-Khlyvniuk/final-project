// eslint-disable-next-line no-unused-vars
import React from 'react'

const UseMakeNodeChild = (objectTree, MidChild, Child) => {
	const makeResultList = (objectTree) => objectTree.map((group, i) => {
		if (group.children) {
			return (
				<MidChild key={ i } text={ group.name }>
					{
						makeResultList(group.children)
					}
				</MidChild>
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