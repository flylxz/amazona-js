import { parseRequestUrl } from '../utils';
import { getProduct } from '../api';

export const ProductScreen = {
  render: async () => {
    const request = parseRequestUrl();
    const product = await getProduct(request.id);
    if (product.error) {
      return `<div>${product.error}</div>`;
    }
    return `<h1>${product.name}</h1>`;
  },
};
