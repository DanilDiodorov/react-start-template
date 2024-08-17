import React from 'react';
import styles from './AddToCartButton.module.css';
import { useTranslation } from 'react-i18next';

export interface IAddToCartButton {
  count: number;
}

const AddToCartButton = ({ count }: IAddToCartButton) => {
  return <>{count ? <WithCountButton count={count} /> : <DefaultButton />}</>;
};

const DefaultButton = () => {
  const { t } = useTranslation();

  return <button className={styles.button}>{t('addToCart')}</button>;
};

const WithCountButton = ({ count }: IAddToCartButton) => {
  return (
    <div className={styles.count_button}>
      <button className={styles.count_side_buttons}>-</button>
      {count}
      <button className={styles.count_side_buttons}>+</button>
    </div>
  );
};

export default AddToCartButton;
