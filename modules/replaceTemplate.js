module.exports = (temp, product) => {
  let output = temp
    .replace(/{%IMAGE%}/g, product.image)
    .replace(/{%PRODUCTNAME%}/g, product.productName)
    .replace(/{%PRICE%}/g, product.price)
    .replace(/{%ID%}/g, product.id)
    .replace(/{%NUTRIENTS%}/g, product.nutrients)
    .replace(/{%FROM%}/g, product.from)
    .replace(/{%QUANTITY%}/g, product.quantity)
    .replace(/{%DESCRIPTION%}/g, product.description);

  if (!product.organic) {
    output = output.replace(/{%NOT_ORGANIC%}/g, `not-organic`);
  }

  return output;
};
