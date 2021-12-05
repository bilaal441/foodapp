import classes from "./Cart.module.css";
import React, {useContext} from "react";
import MealDeals from "../../store/Meal-Deals";
import Button from "../UI/Button";
const CartActions = (props) => {
  const ctx = useContext(MealDeals);
  const {closeModal, OrderHandler} = ctx;
  return (
    <>
      {props.totalPrice > 0 && (
        <div className={classes.actions}>
          <Button
            type="button"
            className={classes["button--alt"]}
            onClick={closeModal}
          >
            Close
          </Button>
          <Button
            className={classes.button}
            type="button"
            onClick={OrderHandler}
          >
            Order
          </Button>
        </div>
      )}
    </>
  );
};

export default CartActions;
