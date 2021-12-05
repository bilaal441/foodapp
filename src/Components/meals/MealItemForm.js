import React, {useRef, useContext, useEffect} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input/input";
import MealItem from "../../store/Meal-Deals";

const MealItemForm = (props) => {
  const ctx = useContext(MealItem);
  const {dispatchCartMeal, DUMMY_MEALS: meal} = ctx;

  const inputRef = useRef();

  const mealsSumitHandler = (e) => {
    e.preventDefault();

    dispatchCartMeal({
      type: `USER_ADD_ITEM`,
      payLoad: {
        val: inputRef.current.val(),
        id: inputRef.current.currentId(),
        meals: meal,
      },
    });
  };

  return (
    <form className={classes.form} onSubmit={mealsSumitHandler}>
      <Input type={"number"} text={"Amount"} id={props.id} ref={inputRef} />
      <button type="submit">+add</button>
    </form>
  );
};

export default MealItemForm;
