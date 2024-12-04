import classes from './Favorite.module.css';

const Favorite = () => {
  const isFavorite = false;
  let content;
  if (isFavorite) {
    content = (
      <img
        className={classes.img}
        src="https://img.icons8.com/fluency-systems-filled/50/like.png"
        alt="Favorite_icon"
      />
    );
  } else {
    content = (
      <img
        className={classes.img}
        src="https://img.icons8.com/fluency-systems-regular/48/like--v1.png"
        alt="Favorite_icon"
      />
    );
  }
  return (
    <div className={classes.favorite_row}>
      <p>Добавить в избранное</p>
      {content}
    </div>
  );
};

export default Favorite;
