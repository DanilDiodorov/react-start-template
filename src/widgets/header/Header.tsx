import React from 'react';
import styles from './Header.module.css';
import Logo from '../../shared/logo/Logo';

const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  );
};

export default Header;
