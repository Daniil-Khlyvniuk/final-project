const uuid = require("uuid")
const path = require("path")

const createFileName = () => {
	return `${ uuid.v4() }.jpg`
}

const createPath = (img) => {
	try {
		const fileName = createFileName()
		const filePath = path.resolve("static/upload/images", fileName)
		img.mv(filePath)
		return `upload/images/${ fileName }`
	} catch (err) {
		console.log("[saveFile]:err", err)
	}
}

module.exports.saveFile = (file) => {
	if (!Array.isArray(file)) return createPath(file)

	return file.map(img => {
		return createPath(img)
	})
}

