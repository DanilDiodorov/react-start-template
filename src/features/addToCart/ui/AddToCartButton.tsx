import React from 'react';
import styles from './AddToCartButton.module.css';

export interface IAddToCartButton {
  count: number;
}

const AddToCartButton = ({ count }: IAddToCartButton) => {
  if (count > 0) {
    return (
      <div className={styles.count_button}>
        <button className={styles.count_side_buttons}>-</button>
        {count}
        <button className={styles.count_side_buttons}>+</button>
      </div>
    );
  } else {
    return <button className={styles.button}>Добавить в корзину</button>;
  }
};

export default AddToCartButton;
