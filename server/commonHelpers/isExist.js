module.exports = (object, objectName) => {
	if (!!object) {
		throw new Error(`The ${objectName} already exist`);
	}
};
