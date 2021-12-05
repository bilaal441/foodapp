import CartItem from "./CartItem";
import MealDeals from "../../store/Meal-Deals";
import React, {useContext} from "react";
import classes from "./Cart.module.css";
import CartActions from "./CartActions";
import CartTotal from "./CartTotal";

const Cart = () => {
  const ctx = useContext(MealDeals);
  const {cartList, mealsArr, dispatchCartMeal} = ctx;

  const meals = mealsArr.filter((meal) =>
    cartList.addedMeals.some((cart) => cart.id === meal.id)
  );

  const findMeal = (meal, id) => meal.find((add) => add.id === id).numtimes;

  const totalPrice = meals
    .map((meal) => +findMeal(cartList.addedMeals, meal.id) * +meal.price)
    .reduce((occ, cur) => occ + cur, 0);

  const actionsHelper = (type, id) => {
    return {
      type: `${type}`,
      payLoad: {
        id: id,
        val: 1,
      },
    };
  };

  return (
    <ul className={classes["cart-items"]}>
      {meals.map(
        (meal) =>
          findMeal(cartList.addedMeals, meal.id) > 0 && (
            <CartItem
              price={meal.price}
              name={meal.name}
              key={meal.id}
              amount={findMeal(cartList.addedMeals, meal.id)}
              onAdd={() =>
                dispatchCartMeal(actionsHelper("USER_ONADD", meal.id))
              }
              onRemove={() =>
                dispatchCartMeal(actionsHelper("USER_ONREMOVE", meal.id))
              }
            />
          )
      )}

      <CartActions totalPrice={totalPrice} />
      <CartTotal totalPrice={totalPrice} />
    </ul>
  );
};

export default Cart;
