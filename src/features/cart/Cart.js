import CartIcon from '../cart/icon/shopping-cart-solid.svg'
import { useSelector } from 'react-redux';
import { selectCart } from './cartSlice';
import { Link } from "react-router-dom";
import styles from './Cart.module.css';

export default function Cart() {

  const cart = useSelector(selectCart);
  
  return (
    <Link to="/cart">
      <div className={styles.cartContainer}>
        <img src={CartIcon} alt="cart-icon" style={{ height: "2em" }}/>
        {cart.length > 0 ? 
        <div className={styles.cartBadge}>{cart.length}</div>
        :
        null}
      </div>
    </Link>

  );
}