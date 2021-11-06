/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { categoryOperations, categorySelectors } from '../../store/Category'
// import { setCategory } from '../../store/Category/categorySlice'

// const dataTest = [
// 	{
// 		// id: 2,
// 		name: 'Bedroom',
// 		parentId: null,
// 		// date: Date.now()
// 	},
// 	{
// 		// id: 3,
// 		name: 'Bedroom--children-1',
// 		parentId: 2,
// 		// date: Date.now()
// 	},
// 	{
// 		id: 33,
// 		name: 'Bedroom--children-222',
// 		parentId: 2,
// 		date: Date.now()
// 	},
// 	{
// 		id: 34,
// 		name: 'Bedroom--children-3',
// 		parentId: 2,
// 		date: Date.now()
// 	},
// 	{
// 		id: 4,
// 		name: 'Bedroom--children-1--children--children',
// 		parentId: 3,
// 		date: Date.now()
// 	},
// 	{
// 		id: 55,
// 		name: 'Bedroom--children-1--children-11',
// 		parentId: 33,
// 		date: Date.now()
// 	},
// 	{
// 		id: 555,
// 		name: 'Bedroom--children-1--children-11',
// 		parentId: 3,
// 		date: Date.now()
// 	},
// 	{
// 		id: 56,
// 		name: 'Bedroom--children-1--children-22',
// 		parentId: 3,
// 		date: Date.now()
// 	},
// 	{
// 		// id: 5,
// 		name: 'Bed linen',
// 		parentId: null,
// 		// date: Date.now()
// 	},
// 	{
// 		id: 6,
// 		name: 'test-2',
// 		parentId: 4,
// 		date: Date.now()
// 	},
// 	{
// 		// id: 7,
// 		name: 'Kitchen',
// 		parentId: null,
// 		// date: Date.now()
// 	},
// 	{
// 		// id: 8,
// 		name: 'Bathroom',
// 		parentId: null,
// 		// date: Date.now()
// 	},
// 	{
// 		// id: 9,
// 		name: 'Loungewear',
// 		parentId: null,
// 		// date: Date.now()
// 	},
// 	{
// 		// id: 10,
// 		name: 'Sale',
// 		parentId: null,
// 		// date: Date.now()
// 	},
// 	{
// 		// id: 11,
// 		name: 'Shop All',
// 		parentId: null,
// 		// date: Date.now()
// 	},
// ]

const UseCategoryTree = () => {
	// const [categoryTree, setCategoryTree] = useState([])
	const [category, setCategory] = useState([])
	const categoryTree = useSelector(categorySelectors.getCategoryTree())
	// const category = useSelector(categorySelectors.getCategory())
	const dispatch = useDispatch()

	// eslint-disable-next-line no-console
	console.log('category_____category', category)

	const getParent = (parentId, curArray) => {
		return curArray.find(el => el._id === parentId)
	}

	const addChildren = (curElem, curArray) => {
		const parent = getParent(curElem.parentId, curArray)
		if (parent.children){
			return {
				...parent,
				children: [
					...parent.children,
					curElem
				]
			}
		} else {
			return {
				...parent,
				children: [
					curElem
				]
			}
		}








		// parent.children = [...parent.children || [], curElem]
	}

	const setTree = (tree, elem) => {
		let res = [...tree]
		// eslint-disable-next-line no-console
		console.log(res)
		if (res.includes(elem)) {
			res = res.filter(el => el._id !== elem._id)
			res.push(elem)
		} else {
			res.push(elem)
		}
		return res
	}

	const sortTreeByChildren = (tree) => {
		return tree.filter(el => !el.parentId)
	}

	const makeCategoryTree = (arr) => {
		// eslint-disable-next-line no-debugger
		// debugger
		// eslint-disable-next-line no-console
		console.log('arr', arr)
		return arr.reduce((tree, curElem, index, curArray) => {
			if (!curElem.parentId) {
				tree.push(curElem)
			} else {
				const parentWithChildren = addChildren(curElem, curArray)
				tree = setTree(tree, parentWithChildren)
			}
			return sortTreeByChildren(tree)
		}, [])
	}

	useEffect(() => {
		// setCategory(dataTest)
		dispatch(categoryOperations.fetchCategories())

		// eslint-disable-next-line no-console
		// console.log('categoryTree111111111', categoryTree)
		// const test = makeCategoryTree(categoryTree)
		// setCategoryTree(makeCategoryTree(category))
		// setCategory(test)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const test = makeCategoryTree(categoryTree)
		// setCategoryTree(makeCategoryTree(category))
		setCategory(test)
	}, [categoryTree])

	return category
}

export default UseCategoryTree