import React, {useContext} from "react";
import MealDeals from "../../store/Meal-Deals";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";
const AvailableMeals = () => {
  const meals = useContext(MealDeals);
  const {mealsArr} = meals;
  return (
    <Card className={classes.meals}>
      <ul>
        {mealsArr.map((item) => (
          <MealItem
            key={item.id}
            name={item.name}
            description={item.description}
            price={item.price}
            id={item.id}
          />
        ))}
      </ul>
    </Card>
  );
};

export default AvailableMeals;
