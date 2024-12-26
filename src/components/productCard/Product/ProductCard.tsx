import { Product } from '@/components/types/product';
import classes from './ProductCard.module.css';
import { FC } from 'react';
import ChangeCount from '@/components/productCard/Product/components/ChangeCount/ChangeCount';

type ProductProps = {
  product: Product;
  onChangeCard: (product: Product) => void;
};

const ProductCard: FC<ProductProps> = ({ product, onChangeCard }) => {
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

  const handleClick = () => {
    onChangeCard({
      ...product,
      isFavorite: !product.isFavorite,
    });
  };

  let favoriteIcon;
  if (product.isFavorite) {
    favoriteIcon = (
      <div onClick={handleClick}>
        <img
          className={classes.favorite_icon}
          src="https://img.icons8.com/fluency-systems-filled/50/like.png"
          alt="Favorite_icon"
        />
      </div>
    );
  } else {
    favoriteIcon = (
      <div onClick={handleClick} className={classes.favorite_icon_row}>
        <img
          className={classes.favorite_icon}
          src="https://img.icons8.com/fluency-systems-regular/48/like--v1.png"
          alt="Favorite_icon"
        />
      </div>
    );
  }

  return (
    <div className={classes.product}>
      <div className={classes.name}>{product.name}</div>
      <div className={classes.product_img_container}>
        <img
          className={classes.product_img}
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className={classes.price_row}>
        <div className={classes.price}>{product.price}</div>
        <div className={classes.discount}>-{product.discount}%</div>
        <div className={classes.rate}>
          Рейтинг: <span className={classes.rate_num}>{product.rating}</span>
        </div>
      </div>
      <div className={classes.favorite_row}>
        <div onClick={handleAddCard} className={classes.favorite_button}>
          Добавить в корзину
        </div>
        {product.count && product.count > 0 ? (
          <ChangeCount
            count={product.count}
            onAdd={handleAddCard}
            onDecrement={handleDecrementCard}
          />
        ) : null}
        {favoriteIcon}
      </div>
    </div>
  );
};

export default ProductCard;
