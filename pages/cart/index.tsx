'use client'
import React from 'react';
import {age, name} from "./data";


const Cart = () => {
  return (
    <div>
      <h4 className={'title'}>Cart</h4>
      <CartItem/>
    </div>
  )
};

export default Cart;

function CartItem() {
  return (
    <div className="cart-item">
      <p>상품명 {age}</p>
      <p>$40 {name}</p>
      <p>1개</p>
    </div>
  )
}