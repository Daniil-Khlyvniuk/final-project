// import React, { useEffect } from 'react'
// import UseCategoryTree from '../../utils/customHooks/useCategoryTree'
// import UseMakeNodeChild from '../../utils/customHooks/useMakeNodeChild'
// import PositionedMenu from './Menu'
// import { MenuItem } from '@mui/material'
// // import PositionedMenu from './Menu'
//
// const Category = () => {
// 	// eslint-disable-next-line no-unused-vars
// 	const categoryTree = UseCategoryTree()
// eslint-disable-next-line no-console
// 	// eslint-disable-next-line no-console
// 	console.log(categoryTree)
// 	const test = UseMakeNodeChild(
// 		// categoryTree, , , MenuItem)
// 	// eslint-disable-next-line no-console
// 	// console.log(test)
// 	// const makeNodeChildren = (catTree, Children, Root) => {
// 	// 	catTree.forEach(el => {
// 	// 		el.children
// 	// 			?
// 	// 			(<Root>{ makeNodeChildren(el.children, Children, Root) }</Root>)
// 	// 			:
// 	// 			()
// 	// 	})
// 	// 	// eslint-disable-next-line no-console
// 	// 	console.log(categoryTree)
// 	// }
// 	const makeCalcResults = (catTree, Root, MidChild, Child) => {
// 		return catTree.map(group => (
//
// eslint-disable-next-line max-len
// <Root group={ group }> { group?.children?.map(makeDeepNodes(allRows, MidChild, Child)) }</Root> // long string
// ))
// }
//
// 	// useEffect(() => {
// 	// 	// makeNodeChildren()
// 	// }, [])
//
// 	return (
// 		<div>
// 			{/*<PositionedMenu/>*/ }
// 		</div>
// 	)
// }
//
// export default Category