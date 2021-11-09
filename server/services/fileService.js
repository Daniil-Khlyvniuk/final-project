const uuid = require("uuid")
const path = require("path")
const fs = require("fs")

const createFileName = () => {
	return `${ uuid.v4() }.jpg`
}

const createPath = (img, folderName) => {
	const way = `static/upload/images/${ folderName }/`
	try {
		const fileName = createFileName()
		const filePath = path.resolve(way, fileName)

		!fs.existsSync(way) && fs.mkdirSync(way, { recursive: true })
		img.mv(filePath)
		return `upload/images/${ folderName }/${ fileName }`
	} catch (err) {
		console.log("[saveFile]:err", err)
	}
}

module.exports.saveFile = (file, folderName) => {
	if (!Array.isArray(file)) return createPath(file, folderName)

	return file.map(img => {
		return createPath(img, folderName)
	})
}

