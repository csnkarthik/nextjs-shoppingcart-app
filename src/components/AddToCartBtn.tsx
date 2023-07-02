'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/store/store'
import { productQtyInCartSelector, increment, decrement } from '@/store/features/shoppingCartSlice'
import Product from '@/interfaces/product';
import { Button } from './UIElements/Button';
import QtyButton from './UIElements/QtyButton';

interface Props {
  product: Product;
}

export default function AddToCartBtn(props: Props) {

  console.log('ProductId: ', props.product.id);

  const qty = useAppSelector((state) => productQtyInCartSelector(state, props.product.id)) || 0;

  console.log('ProductId: ', props.product.id, qty);

  const dispatch = useAppDispatch();

   if (!qty)
    return (
      <div className="flex justify-center">
        <Button
          onClick={() => dispatch(increment(props.product))}
        >
          Add To Cart
        </Button>
      </div>
    );
  return (
    <QtyButton
      onDecrease={() => dispatch(decrement(props.product))}
      onIncrease={() => dispatch(increment(props.product))}
      qty={qty}
    />
  );
}
