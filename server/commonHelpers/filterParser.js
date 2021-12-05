const excludedParams = ["perPage", "startPage", "minPrice", "maxPrice", "sort"];

module.exports = function filterParser(filtersQueryString, isProducts = false) {
  const mongooseQuery = {};

  mongooseQuery.currentPrice = {
    $gte: filtersQueryString?.minPrice
      ? Number(filtersQueryString.minPrice)
      : 0,
    $lte: !!filtersQueryString?.maxPrice
      ? Number(filtersQueryString.maxPrice)
      : Infinity,
  };

  const queryParams = Object.keys(filtersQueryString).reduce(
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

	if (isProducts) return queryParams


	const createQuery = createQueryParam(queryParams)

	return {
		variantQuery: {
			currentPrice: queryParams.currentPrice,
			...createQuery("color"),
			...createQuery("size"),
 		},
		productQuery: {
			...createQuery("brand"),
			...createQuery("category"),
			...createQuery("manufacturer"),
			...createQuery("manufacturerCountry"),
			...createQuery("seller"),
		}
	}
};

const createQueryParam = (queryParams) => (value) => {
		return (!!queryParams[value] ? {[value]: queryParams[value]} : {})
}
