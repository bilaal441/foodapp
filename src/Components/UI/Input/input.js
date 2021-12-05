import React, {useRef, useImperativeHandle} from "react";

import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const id = () => {
    return inputRef.current.id;
  };

  const val = () => {
    return +inputRef.current.value;
  };
  useImperativeHandle(ref, () => {
    return {
      currentId: id,
      val: val,
    };
  });

  return (
    <div className={classes.input}>
      <label htmlFor={props.type}>{props.text}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onchange}
        ref={inputRef}
        min="0"
      />
    </div>
  );
});

export default Input;
