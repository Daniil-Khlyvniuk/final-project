module.exports.getFilterConditions = (query) => {
  return [
    { "variants.currentPrice": query.currentPrice },
    ...(query?.category ? [{ "categories.name": query.category }] : [{}]),
    ...(query?.color ? [{ "variants.color.name": query.color }] : [{}]),
    ...(query?.size ? [{ "variants.size.name": query.size }] : [{}]),
  ];
};

module.exports.getSortConditions = (sortParam) => {
  const sortParamValue = sortParam?.trim()?.replace("-", "");
  const sortType = sortParam.includes("-") ? -1 : 1;
  // -1 -> small > big
  //1 -> big > small
  return {
    ["variants." + sortParamValue]: sortType,
  };
};
