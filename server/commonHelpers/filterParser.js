const excludedParams = ["perPage", "startPage", "minPrice", "maxPrice", "sort"];

module.exports = function filterParser(filtersQueryString) {
  const mongooseQuery = {};

  mongooseQuery.currentPrice = {
    $gte: filtersQueryString?.minPrice
      ? Number(filtersQueryString.minPrice)
      : 0,
    $lte: !!filtersQueryString?.maxPrice
      ? Number(filtersQueryString.maxPrice)
      : Infinity,
  };

  return Object.keys(filtersQueryString).reduce(
    (mongooseQuery, filterParam) => {
      if (filtersQueryString[filterParam].includes(",")) {
        mongooseQuery[filterParam] = {
          $in: filtersQueryString[filterParam]
            .split(",")
            .map((item) => decodeURI(item)),
        };
      } else if (!excludedParams.includes(filterParam)) {
        mongooseQuery[filterParam] = decodeURI(filtersQueryString[filterParam]);
      }
      return mongooseQuery;
    },
    mongooseQuery
  );
};
