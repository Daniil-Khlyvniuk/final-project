// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import API from '../API/categoriesApi'

const UseCategoryTree = () => {
	const [categoryTree, setCategoryTree] = useState([])
	const [category, setCategory] = useState([])

	const getParent = (parentId, curArray) => {
		return curArray.find(el => el._id === parentId)
	}

	const addChildren = (curElem, curArray) => {
		const parent = getParent(curElem.parentId, curArray)
		parent.children = [...parent.children || [], curElem]
		return parent
	}

	const setTree = (tree, elem) => {
		let res = [...tree]
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
		if (category.length) return
		API.getCategories().then(res => {
			setCategory(res.data)
		})
	}, [])

	useEffect(() => {
		setCategoryTree(makeCategoryTree(category))
	}, [category])

	return categoryTree
}

export default UseCategoryTree