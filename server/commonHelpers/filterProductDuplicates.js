const _ = require("lodash");

module.exports = (products, filterParams) => {
	const exitCondition = ( //  exit condition
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
		  filterParams.category &&
      !isExist(productList, currentProduct, "color") &&
      !isExist(productList, currentProduct, "size")
    )

	  const haveJustPrice = ( // condition
		  !filterParams.size &&
		  !filterParams.color &&
		  !filterParams.category &&
		  !isExist(productList, currentProduct, "first")
	  )

	  const filterCondition = (
		  haveJustSize ||
		  haveJustColor ||
		  haveJustCategory ||
		  haveJustPrice
	  )
//_____________________________________________________________________
	  if (filterCondition) return [ ...productList, currentProduct ];
    return productList;
//_____________________________________________________________________
  }, []);
};

const isExist = (productList, currentProduct, value) => {
	const getFirst = (value === "first")

  return productList.some(
    (el) =>
	    getFirst
		    ?
      _.isEqual(el._id, currentProduct.variants.product)
		    :
	    _.isEqual(el._id, currentProduct.variants.product) &&
	    _.isEqual(el.variants[value]._id, currentProduct.variants[value]._id)
  );
};
