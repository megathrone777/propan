import { get as getFromLocalStorage } from "local-storage";

export interface TState {
  cart: {
    products: [];
  };
}

const initialState: TState = getFromLocalStorage("state")
  ? getFromLocalStorage<TState>("state")
  : {
      cart: {
        products: [],
      },
    };

export { initialState };
