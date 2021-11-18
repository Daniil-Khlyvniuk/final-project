module.exports.getFilterConditions = (query) => {
  return [
    { "variants.currentPrice": query.currentPrice },
    ...(query?.category ? [{ "categories.name": query.category }] : [{}]),
    ...(query?.color ? [{ "variants.color.name": query.color }] : [{}]),
    ...(query?.size ? [{ "variants.size.name": query.size }] : [{}]),
  ];
};

module.exports.getSortConditions = (sortParam) => {
  console.log(sortParam);
  const sortType = sortParam?.includes("-") ? -1 : 1;
  const sortParamValue = sortParam?.trim()?.replace("-", "");
  // -1 -> small > big
  //1 -> big > small
  return {
    ...(sortParam
      ? { $sort: { ["variants." + sortParamValue]: sortType } }
      : {}),
  };

  // return {
  // 	...(sortParam
  // 		? { $sort: { ["variants." + sortParamValue]: sortType } }
  // 		: {}),
  // };
  //
  // {
  //   $sort: {
  //     ...(!!sortParam ? { ["variants." + sortParamValue]: sortType } : {}),
  //   },
  // };
};
