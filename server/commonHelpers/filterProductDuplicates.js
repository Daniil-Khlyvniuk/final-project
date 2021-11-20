const _ = require("lodash");

module.exports = (products, filterParams) => {
	const exitCondition = ( //  exit condition
		(!filterParams.color && !filterParams.size && !filterParams.category) ||
		(filterParams.color && filterParams.size)
	)

  if (exitCondition) return products;

  return products.reduce((productList, currentProduct) => {
    const haveJustSize = ( // condition
      !filterParams.color &&
      filterParams.size &&
      !isExist(productList, currentProduct, "size")
  )
    const haveJustColor = ( // condition
      !filterParams.size &&
      filterParams.color &&
      !isExist(productList, currentProduct, "color")
    )
	  const haveJustCategory = ( // condition
      !filterParams.size &&
      !filterParams.color &&
      !isExist(productList, currentProduct, "color") &&
      !isExist(productList, currentProduct, "size") &&
		  filterParams.category
    )


    if (haveJustSize || haveJustColor || haveJustCategory) return [ ...productList, currentProduct ];
    return productList;
  }, []);
};

const isExist = (productList, currentProduct, value) => {
  return productList.some(
    (el) =>
      _.isEqual(el._id, currentProduct.variants.product) &&
      _.isEqual(el.variants[value]._id, currentProduct.variants[value]._id)
  );
};
