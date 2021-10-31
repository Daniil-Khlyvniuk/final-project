// eslint-disable-next-line no-unused-vars
import React from 'react'

const UseMakeNodeChild = (objectTree, Root, MidChild, Child) => {
	// const categoryList = categoryTree.reduce(() => {
	//
	// }, [])

	const makeNodeData = (node) => {
		return <Child>{ node.name }</Child>
	}

	const makeDeepNodes = (node) => {
		const { children, name } = node

		if (!children) {
			return makeNodeData(node)
		}

		return (
			<MidChild Label={ makeNodeData(node, Child) }>
				{ name }
				{ children.map(makeDeepNodes(node)).flat(1) }
			</MidChild>
		)
	}

	const makeResultList = () => {
		// eslint-disable-next-line no-console
		console.log('makeResultList', objectTree)
		return objectTree.map((group, i) => <Root key={ i } group={ group }>
			{ group?.children?.map(makeDeepNodes(group.children)) }
		</Root>)
	}

	return makeResultList()
}

export default UseMakeNodeChild