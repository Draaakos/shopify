const DEFAULT_IMG = '/static/images/products/img2.png'


const productDTO = product => {
  const priceProperty = product.price.split(' ');

  const id = product.id;
  const name = product.title;
  const url = product.image_url.length ? product.image_url : DEFAULT_IMG;
  const price = parseFloat(priceProperty[0]);
  const symbol = priceProperty[priceProperty.length - 1]

  return { id, name, url, price, symbol };
};

export {
  productDTO
}
