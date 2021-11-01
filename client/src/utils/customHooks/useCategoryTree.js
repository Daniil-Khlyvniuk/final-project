// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

const dataTest = [
	{
		id: 2,
		name: 'Kitchen',
		parentId: null,
		date: Date.now()
	},
	{
		id: 3,
		name: 'Kitchen--test--children',
		parentId: 2,
		date: Date.now()
	},
	{
		id: 4,
		name: 'Kitchen--children--children',
		parentId: 3,
		date: Date.now()
	},
	{
		id: 4,
		name: 'Kitchen--children',
		parentId: 3,
		date: Date.now()
	},
	{
		id: 5,
		name: 'Kitchen-2',
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
		name: 'aaaaaaa',
		parentId: null,
		date: Date.now()
	},
	{
		id: 8,
		name: 'sssssss',
		parentId: null,
		date: Date.now()
	},
]

const UseCategoryTree = () => {
	const [categoryTree, setCategoryTree] = useState([])
	const [category, setCategory] = useState([])

	const makeCategoryTree = (arr) => (
		arr.reduce((tree, curElem, index, curArray) => {
			if (!curElem.parentId) {
				tree.push(curElem)
			} else {
				const parent = curArray
					.find(parentElem => parentElem.id === curElem.parentId)

				parent.children = [...parent.children || [], curElem]
				tree.push(parent)
			}
			return tree.filter(el => !el.parentId)
		}, [])
	)

	useEffect(() => {
		setTimeout(() => {
			setCategory(dataTest)
			setCategoryTree(makeCategoryTree(category))
		}, 500)
	}, [category])

	return categoryTree
}

export default UseCategoryTree