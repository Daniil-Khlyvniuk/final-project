import React, { memo } from 'react'
import UseCategoryTree from '../../utils/customHooks/useCategoryTree'
import UseMakeNodeChild from '../../utils/customHooks/useMakeNodeChild'
import { Child, Parent } from './categoryElems'

const Category = () => {
	const categoryTree = UseCategoryTree()
	const categoryList = UseMakeNodeChild(categoryTree, Parent, Child)

	return (
		<Parent root>
			{categoryList}
		</Parent>
	)
}

export default memo(Category)