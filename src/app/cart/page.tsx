import React from "react";
import Header from "../components/header";
import styles from "../styles/cart.module.css";

interface Item {
  name: string;
  price: number;
}

interface CartPageProps {
  items?: Item[];
}

const CartPage: React.FC<CartPageProps> = ({ items }) => {
  return (
    <div>
      <Header />
      {items && items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.cartItem}>
          <img src="/images/empty-cart.svg" alt="Empty Cart" className={styles.cartImg} />
          <p>سبد خرید شما خالی است</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
