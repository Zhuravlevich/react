import classes from './ChangeCount.module.css';

type ChangeCountProps = {
  onAdd: () => void;
  onDecrement: () => void;
  count: number;
};

const ChangeCount = ({ onAdd, onDecrement, count }: ChangeCountProps) => {
  return (
    <div className={classes.counter}>
      <div className={classes.counter_btn} onClick={onDecrement}>
        -
      </div>
      <div>{count}</div>
      <div className={classes.counter_btn} onClick={onAdd}>
        +
      </div>
    </div>
  );
};

export default ChangeCount;
