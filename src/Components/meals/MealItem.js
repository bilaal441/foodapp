import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>

        <div className={classes.price}>£{props.price}</div>
      </div>
      <MealItemForm id={props.id} />
    </li>
  );
};

export default MealItem;
