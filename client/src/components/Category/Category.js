import React, { memo } from 'react'
import UseCategoryTree from '../../utils/customHooks/useCategoryTree'
import UseMakeNodeChild from '../../utils/customHooks/useMakeNodeChild'
import { Child, Menu, Parent } from './categoryElems'

const Category = () => {
	const categoryTree = UseCategoryTree()
	const categoryList = UseMakeNodeChild(categoryTree, Parent, Child)
	// eslint-disable-next-line no-console
	console.log('categoryList', categoryList)
	return (
		<Menu>
			{ categoryList }
		</Menu>
	)
}

export default memo(Category)