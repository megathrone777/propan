import React from "react";
import { set as setToLocalStorage } from "local-storage";

// import { TCartProduct } from "~/components";
import { TAction, TActionTypes } from "./actions";
import { TState } from "./initialState";

const setStateToLocalStorage = (currentState: TState): TState => {
  setToLocalStorage<TState>("state", currentState);

  return currentState;
};

const reducer: React.Reducer<TState, TAction> = (state, { payload, type }) => {
  const actions = {
    [TActionTypes.REMOVE_PRODUCT]: (): TState => {
      return setStateToLocalStorage({
        ...state,
      });
    },

    [TActionTypes.ADD_TO_CART]: (): TState => {
      return setStateToLocalStorage({
        ...state,
      });
    },

    DEFAULT: (): TState => {
      return state;
    },
  };

  return (actions[type] || actions["DEFAULT"])();
};

export { reducer };
