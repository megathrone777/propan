export enum TActionTypes {
  REMOVE_FROM_CART = "REMOVE_FROM_CART",
  ADD_TO_CART = "ADD_TO_CART",
}

export interface TAction {
  payload: any;
  type: TActionTypes;
}

export const addToCart = (product): TAction => ({
  payload: product,
  type: TActionTypes.ADD_TO_CART,
});

export const removeFromCart = (id: string): TAction => ({
  payload: id,
  type: TActionTypes.REMOVE_FROM_CART,
});
