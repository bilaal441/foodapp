import React, {useContext, useEffect} from "react";
import MealDeals from "../../store/Meal-Deals";
import CartIcon from "./CartIcon";

import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const ctx = useContext(MealDeals);
  const {cartList, dispatchCartMeal} = ctx;
  const {userAddItem, totalMeals} = cartList;
  useEffect(() => {
    dispatchCartMeal({
      type: "USER_bump",
      payLoad: {
        val: totalMeals > 0,
      },
    });
  }, [totalMeals, dispatchCartMeal, userAddItem]);

  const clickHandler = (e) => {
    dispatchCartMeal({type: "USER_CLICK_CART"});
  };

  return (
    <button
      type="button"
      className={`${classes.button} ${userAddItem ? classes.bump : ""}`}
      onClick={clickHandler}
    >
      <CartIcon className={classes.icon} />
      <span>Your Cart</span>
      <span className={classes.badge}>{cartList.totalMeals}</span>
    </button>
  );
};

export default HeaderCartButton;
