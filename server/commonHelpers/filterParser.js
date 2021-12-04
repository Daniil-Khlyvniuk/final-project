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

  const test = Object.keys(filtersQueryString).reduce(
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

	if (isProducts) return test

	return {
		variantQuery: {
			currentPrice: test.currentPrice,
			...(!!test.color ? {color: test.color} : {}),
			...(!!test.size ? {size: test.size} : {}),
		},
		productQuery: {
			...(!!test.brand ? {brand: test.brand,} : {}),
			...(!!test.category ? {category: test.category,} : {}),
			...(!!test.manufacturer ? {manufacturer: test.manufacturer,} : {}),
			...(!!test.manufacturerCountry ? {manufacturerCountry: test.manufacturerCountry,} : {}),
			...(!!test.seller ? {seller: test.seller,} : {}),
		}
	}
};
