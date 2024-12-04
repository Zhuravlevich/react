import classes from './Price.module.css';

const Price = () => {
  return (
    <div className={classes.price_row}>
      <p className={classes.price}>Цена: 8165</p>
      <p className={classes.discount}>-90%</p>
      <p className={classes.rate}>
        Рейтинг: <span className={classes.rate_num}>4.7</span>
      </p>
    </div>
  );
};

export default Price;
