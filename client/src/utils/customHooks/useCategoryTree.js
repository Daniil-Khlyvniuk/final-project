// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

const dataTest = [
	{
		id: 2,
		name: 'Bedroom',
		parentId: null,
		date: Date.now()
	},
	{
		id: 3,
		name: 'Bedroom--children-1',
		parentId: 2,
		date: Date.now()
	},
	{
		id: 33,
		name: 'Bedroom--children-222',
		parentId: 2,
		date: Date.now()
	},
	{
		id: 34,
		name: 'Bedroom--children-3',
		parentId: 2,
		date: Date.now()
	},
	{
		id: 4,
		name: 'Bedroom--children-1--children--children',
		parentId: 3,
		date: Date.now()
	},
	{
		id: 55,
		name: 'Bedroom--children-1--children-11',
		parentId: 33,
		date: Date.now()
	},
	{
		id: 555,
		name: 'Bedroom--children-1--children-11',
		parentId: 3,
		date: Date.now()
	},
	{
		id: 56,
		name: 'Bedroom--children-1--children-22',
		parentId: 3,
		date: Date.now()
	},
	{
		id: 5,
		name: 'Bed linen',
		parentId: null,
		date: Date.now()
	},
	{
		id: 6,
		name: 'test-2',
		parentId: 4,
		date: Date.now()
	},
	{
		id: 7,
		name: 'Kitchen',
		parentId: null,
		date: Date.now()
	},
	{
		id: 8,
		name: 'Bathroom',
		parentId: null,
		date: Date.now()
	},
	{
		id: 9,
		name: 'Loungewear',
		parentId: null,
		date: Date.now()
	},
	{
		id: 10,
		name: 'Sale',
		parentId: null,
		date: Date.now()
	},
	{
		id: 11,
		name: 'Shop All',
		parentId: null,
		date: Date.now()
	},
]


const UseCategoryTree = () => {
	const [categoryTree, setCategoryTree] = useState([])
	const [category, setCategory] = useState([])


	const getParent = (parentId, curArray) => {
		return curArray.find(el => el.id === parentId)
	}

	const addChildren = (curElem, curArray) => {
		const parent = getParent(curElem.parentId, curArray)
		parent.children = [...parent.children || [], curElem]
		return parent
	}

	const setTree = (tree, elem) => {
		let res = [...tree]
		if (res.includes(elem)) {
			res = res.filter(el => el.id !== elem.id)
			res.push(elem)
		} else {
			res.push(elem)
		}
		return res
	}

	const sortTreeByChildren = (tree) => {
		return tree.filter(el => !el.parentId)
	}

	const makeCategoryTree = (arr) => (
		arr.reduce((tree, curElem, index, curArray) => {
			if (!curElem.parentId) {
				tree.push(curElem)
			} else {
				const parentWithChildren = addChildren(curElem, curArray)
				tree = setTree(tree, parentWithChildren)
			}
			return sortTreeByChildren(tree)
		}, [])
	)

	useEffect(() => {
		setTimeout(() => {
			setCategory(dataTest)
			setCategoryTree(makeCategoryTree(category))
		}, 500)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category])

	return categoryTree
}

export default UseCategoryTree