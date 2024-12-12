import { Product } from '@/components/types/product';
import classes from './ProductCard.module.css';
import { FC } from 'react';

type ProductProps = {
  product: Product;
};

const ProductCard: FC<ProductProps> = (props) => {
  const { product } = props;

  let favoriteIcon;
  if (product.isFavorite) {
    favoriteIcon = (
      <div className={classes.favorite_row}>
        <div>Убрать из избранного</div>
        <img
          className={classes.favorite_icon}
          src="https://img.icons8.com/fluency-systems-filled/50/like.png"
          alt="Favorite_icon"
        />
      </div>
    );
  } else {
    favoriteIcon = (
      <div className={classes.favorite_row}>
        <div>Добавить в избранное</div>
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
      <div>
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
      {favoriteIcon}
    </div>
  );
};

export default ProductCard;
