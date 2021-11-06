const uuid = require("uuid")
const path = require("path")

const createFileName = () => {
	return uuid.v4() + ".jpg"
}

module.exports.saveFile = (file) => {
	console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
	try {
		return file.map(img => {
			const fileName = createFileName()
			const filePath = path.resolve("static", fileName)
			img.mv(filePath)
			return fileName
		})
		// console.log("[saveFile]:files", file);

	} catch (err) {
		console.log("[saveFile]:err", err)
	}
}

