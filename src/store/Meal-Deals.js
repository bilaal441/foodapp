import React, {useReducer} from "react";
import {DUMMY_MEALS as meals} from "./DUMMY_MEALS";
import cartReducer from "./cartReducer";
import intialState from './intialState'
const MealDeals = React.createContext({
  mealsArr: [],
});

// provider

export const MealDealsProvider = (props) => {
  const [CartMealList, dispatchCartMeal] = useReducer(cartReducer, intialState);

  const closeModal = (e) => {
    dispatchCartMeal({type: "USER_MODAL_CLOSSES"});
  };

  const OrderHandler = (e) => {
    console.log("ordering....");
  };

  return (
    <MealDeals.Provider
      value={{
        mealsArr: meals,
        cartList: CartMealList,
        dispatchCartMeal: dispatchCartMeal,
        closeModal: closeModal,
        OrderHandler: OrderHandler,
      }}
    >
      {props.children}
    </MealDeals.Provider>
  );
};

export default MealDeals;
