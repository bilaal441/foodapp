import reactDom from "react-dom";
import React, {useContext, useEffect} from "react";
import classes from "./Modal.module.css";

import Cart from "../Cart/Cart";
import Card from "../UI/Card";
import MealDeals from "../../store/Meal-Deals";

const Modal = () => {
  const ctx = useContext(MealDeals);
  const {cartList, closeModal, dispatchCartMeal} = ctx;
  const {showModal, totalMeals} = cartList;

  useEffect(() => {
    dispatchCartMeal({
      type: "USER_Del_ALLITEMS",
      payLoad: {
        val: totalMeals > 0 && showModal,
      },
    });
  }, [dispatchCartMeal, totalMeals, showModal]);

  return (
    <>
      {showModal &&
        reactDom.createPortal(
          <div className={classes.backdrop} onClick={closeModal}></div>,
          document.getElementById("backdrop-root")
        )}
      {showModal &&
        reactDom.createPortal(
          <Card className={classes.modal}>
            <Cart />
          </Card>,
          document.getElementById("modal-root")
        )}
    </>
  );
};

export default Modal;
