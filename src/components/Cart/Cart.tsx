import { Product } from '@/components/types/product';
import { FC } from 'react';
import ChangeCount from '@/components/productCard/Product/components/ChangeCount/ChangeCount';
import classes from './Cart.module.css';

type ProductProps = {
  product: Product;
  onChangeCard: (product: Product) => void;
};

const Cart: FC<ProductProps> = ({ product, onChangeCard }) => {
  const handleAddCard = () => {
    onChangeCard({
      ...product,
      count: product.count ? product.count + 1 : 1,
    });
  };

  const handleDecrementCard = () => {
    onChangeCard({
      ...product,
      count: product.count && product.count > 0 ? product.count - 1 : 0,
    });
  };

  const deleteProductInCart = () => {
    onChangeCard({
      ...product,
      count: product.count && product.count > 0 ? (product.count = 0) : 0,
    });
  };
  return (
    <div>
      {product.count > 0 && (
        <div className={classes.cart_item}>
          <div>{product.id}</div>
          <div>{product.name}</div>
          <ChangeCount
            count={product.count}
            onAdd={handleAddCard}
            onDecrement={handleDecrementCard}
          />
          <div
            className={classes.cart_delete_btn}
            onClick={deleteProductInCart}
          >
            Удалить
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
