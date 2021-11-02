import React, { memo } from 'react'
import UseCategoryTree from '../../utils/customHooks/useCategoryTree'
import UseMakeNodeChild from '../../utils/customHooks/useMakeNodeChild'
import { Child, Menu, Parent } from './categoryElems'

const Category = () => {
	const categoryTree = UseCategoryTree()
	const categoryList = UseMakeNodeChild(categoryTree, Parent, Child)

	return (
		<Menu>
			{ categoryList }
		</Menu>
	)
}

export default memo(Category)