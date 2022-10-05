import { ProductList } from 'components/ProductList/ProductList';
import { getProducts } from '../../fekeAPI';

export const Products = () => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};
