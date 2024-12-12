import { products, ProductCard } from '@/components';
import classes from './Product.module.css';

const ProductCatalog = () => {
  return (
    <div className={classes.container}>
      <div className={classes.row}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
