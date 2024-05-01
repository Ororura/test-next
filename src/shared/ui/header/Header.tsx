import React, { FC } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';

interface Props {
  children: React.ReactNode;
}

const Header: FC<Props> = ({ children }) => {
  return (
    <>
      <header className={styles.container}>
        <div className={styles.linksContainer}>
          <p>Valorant boosting</p>
          <Link href='/public'>Главная страница</Link>
          <Link href='/create-user'>Создать аккаунт</Link>
        </div>
      </header>
      {children}
    </>
  );
};

export default Header;
