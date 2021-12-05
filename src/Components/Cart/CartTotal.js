import classes from "./Cart.module.css";

const CartTotal = (props) => {
  return (
    <>
      {props.totalPrice > 0 && (
        <div className={classes.total}>
          <p> Total Amount</p>

          <p>£{props.totalPrice.toFixed(2)}</p>
        </div>
      )}
    </>
  );
};

export default CartTotal;
