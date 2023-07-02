"use client";
import CartItemCard from "@/components/CartItemCard";
import React from "react";
import { TotalPriceSelector } from "@/store/features/shoppingCartSlice";
import { useAppSelector } from "@/store/store";

const CartPage = () => {
  const cartItems = useAppSelector((state) => state.ShoppingCart.cartItems);

  const totalPrice = useAppSelector(TotalPriceSelector);

  return (
  
  <div className="p-2">
  
      {cartItems.map((item) => (
        <CartItemCard cartItem={item} />
      ))}

      <p className="text-slate-600 text-right">
        Total Price:{" "}
        <span className="text-slate-900 font-bold">
          {totalPrice} $
        </span>
      </p>
    </div>
  );
};

export default CartPage;