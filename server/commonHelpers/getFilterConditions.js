const filterParser = require("../commonHelpers/filterParser")
module.exports.getFilterConditions = (query) => {
	const { variantQuery, productQuery } = query

	return {
		productQuery: [
			...((!!productQuery?.category && productQuery?.category !== "shop all") ? [{ "categories.name": productQuery.category }] : [{}]),
			...(!!productQuery?.brand ? [{ "brand": productQuery.brand }] : [{}]),
		],
		variantQuery: [
			{ "currentPrice": variantQuery.currentPrice },
			...(!!variantQuery?.color ? [{ "color.name": variantQuery.color }] : [{}]),
			...(!!variantQuery?.size ? [{ "size.name": variantQuery.size }] : [{}]),
		]
	}
};

module.exports.getSortConditions = (sortParam) => {
  const sortType = sortParam?.includes("-") ? 1 : -1;
  const sortParamValue = sortParam?.trim()?.replace("-", "");
  // -1 -> small > big
  //1 -> big > small
  return {
		...(
			sortParam
				?
					{ $sort: { ["variants." + sortParamValue]: sortType } }
				:
					{
						$sort: {
							_id: 1,
						},
					}
			),
  };
};
