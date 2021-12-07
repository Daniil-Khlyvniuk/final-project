const GlobalConfig = require("../models/GlobalConfig");

module.exports = async () => {
	return GlobalConfig.findOne({ customId: "global-configs" })
};
