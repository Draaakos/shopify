import http from '../utils/http.js';

const productService = {
  fetchProductList() {
    const url = `/api/v1/products?page=1&page_size=8`;
    return http.get(url);
  }
};

export default productService;
