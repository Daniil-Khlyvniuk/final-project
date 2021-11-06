import React, { memo } from 'react'
import UseCategoryTree from '../../utils/customHooks/useCategoryTree'
import UseMakeNodeChild from '../../utils/customHooks/useMakeNodeChild'
import { Child, Parent } from './categoryElems'

const Category = () => {
	const categoryTree = UseCategoryTree()
	// eslint-disable-next-line no-console
	// console.log('categoryTree', categoryTree)
	const categoryList = UseMakeNodeChild(categoryTree, Parent, Child)
	return (
		<Parent root>
			{ categoryList }
		</Parent>
	)
}

export default memo(Category)