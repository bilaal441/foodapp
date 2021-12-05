const mealNumtimes = (meal, id) =>
  meal.addedMeals.find((mel) => mel.id?.includes(id)).numtimes;

const checkIfAnyMeals = (meal, id) =>
  meal.addedMeals.some((mel) => mel.id?.includes(id));

const addOrSub = (op) => {
  if (op.includes("ADD")) return (a, b) => a + b;

  return (a, b) => a - b;
};

const addItemObj = (state, action, value) => {
  return {
    ...state,
    addedMeals: [
      {
        id: action.payLoad.id,
        numtimes: addOrSub(action.type)(value, action.payLoad.val),
      },
      ...state.addedMeals,
    ],
    totalMeals: addOrSub(action.type)(state.totalMeals, action.payLoad.val),
    userAddItem: action.type === "USER_ADD_ITEM" ? false : state.userAddItem,
  };
};

const updateShowmodal = (state, value) => {
  return {
    ...state,
    showModal: value,
  };
};

const firstnumtimes = (state, action) => {
  return checkIfAnyMeals(state, action.payLoad.id)
    ? mealNumtimes(state, action.payLoad.id)
    : 0;
};

const cartReducer = (state, action) => {
  if (action.type === "USER_ADD_ITEM")
    return addItemObj(state, action, firstnumtimes(state, action));

  if (action.type === "USER_ONADD")
    return addItemObj(state, action, mealNumtimes(state, action.payLoad.id));

  if (action.type === "USER_ONREMOVE")
    return addItemObj(state, action, mealNumtimes(state, action.payLoad.id));

  if (action.type === "USER_CLICK_CART")
    return updateShowmodal(state, state.totalMeals > 0);

  if (action.type === "USER_MODAL_CLOSSES")
    return updateShowmodal(state, false);

  if (action.type === "USER_Del_ALLITEMS")
    return updateShowmodal(state, action.payLoad.val);
  if (action.type === "USER_bump")
    return {
      ...state,
      userAddItem: action.payLoad.val,
    };

  return state;
};

export default cartReducer;
