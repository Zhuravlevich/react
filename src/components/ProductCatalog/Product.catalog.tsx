import { ProductCard, Cart } from '@/components';
import classes from './Product.module.css';
import { Product } from '../types/product';

type ProductCatalogProps = {
  products: Array<Product>;
  setProducts: React.Dispatch<React.SetStateAction<Product[]>>;
};

const ProductCatalog = ({ products, setProducts }: ProductCatalogProps) => {
  const handleChangeCard = (product: Product) => {
    setProducts((prev) => {
      return prev.map((item) => {
        if (item.id == product.id) {
          return product;
        }
        return { ...item };
      });
    });
  };
  return (
    <div className={classes.container}>
      <div>
        {products.map((product) => (
          <Cart
            key={product.id}
            product={product}
            onChangeCard={handleChangeCard}
          />
        ))}
      </div>
      <div className={classes.row}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onChangeCard={handleChangeCard}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCatalog;
