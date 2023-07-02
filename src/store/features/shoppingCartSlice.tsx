'use client';

import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'
import Product from '@/interfaces/product';
import CartItem from '@/interfaces/CartItem';

export interface ShoppingCartState {
  cartItems: CartItem[];
}

const getCartItemFromLocalStore = () => {
  return JSON.parse(localStorage.getItem('shoppingCart') || '[]') || [];
};

const setCartItemToLocalStore = (shoppingCartState: ShoppingCartState)  => {
  return localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartState.cartItems));
};

const initalState : ShoppingCartState = {
    cartItems: getCartItemFromLocalStore()
}

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: initalState,
    reducers: {
        increment: (state, action: PayloadAction<Product>) => {
            const cartItem = state.cartItems.find(item => item.product.id == action.payload.id);

            if(cartItem){
                cartItem.qty++;
            }
            else{
                state.cartItems.push({
                    product: action.payload,
                    qty: 1,
                  });
            }

            setCartItemToLocalStore(state);
        },
        decrement: (state, action: PayloadAction<Product>) => {
            const cartItem = state.cartItems.find(
              (el) => el.product.id === action.payload.id
            );

            if (cartItem) {
              cartItem.qty--;
            
                if (cartItem.qty === 0) {
                state.cartItems = state.cartItems.filter(
                  (el) => el.product.id !== action.payload.id
                );
              }
            }
            setCartItemToLocalStore(state);
        },
    }
});

export const { increment, decrement } = shoppingCartSlice.actions;
  
export default shoppingCartSlice.reducer;

const cartItems = (state: RootState) => state.ShoppingCart.cartItems;

export const productQtyInCartSelector = createSelector(
    [cartItems, (cartItems, productId: number) => productId],
    (cartItems, productId) =>
      cartItems.find((item) => item.product.id === productId)?.qty
);
  
export const totalCartItemsSelector = createSelector(
    [cartItems],
    (cartItems) =>
      cartItems.reduce(
        (total: number, curr: CartItem) =>
          (total += curr.qty),
        0
      )
);

export const TotalPriceSelector = createSelector(
    [cartItems],
    (cartItems) =>
      cartItems.reduce(
        (total: number, curr: CartItem) =>
          (total += curr.qty * curr.product.price),
        0
      )
);
  
  
