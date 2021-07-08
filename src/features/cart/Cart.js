import React from 'react';
import CartIcon from '../cart/icon/shopping-cart-solid.svg'
import { useSelector, useDispatch } from 'react-redux';
import {
  selectCart
} from './cartSlice';
import styles from './Cart.module.css';

export default function Cart() {
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  return (
    <div className={styles.cartContainer}>
      <img src={CartIcon} alt="cart-icon" style={{ height: "2em" }}/>
      {cart.length > 0 ? 
      <div className={styles.cartBadge}>{cart.length}</div>
      :
      null}
    </div>
  );
}