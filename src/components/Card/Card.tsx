import { Name, Img, Price, Favorite } from '@/components';
import classes from './Card.module.css';
const Card = () => {
  return (
    <div className={classes.card}>
      <Name />
      <Img />
      <Price />
      <Favorite />
    </div>
  );
};

export default Card;
