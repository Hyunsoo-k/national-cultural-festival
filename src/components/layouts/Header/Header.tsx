"use client";

import Link from 'next/link';
import { CiMenuBurger } from "react-icons/ci";

import { useNavbarStore } from '@/stores/useNavbarStore';
import { Navbar } from './components/Navbar/Navbar';  

import styles from './Header.module.scss';

export const Header = () => {
  const { toggle } = useNavbarStore();

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href='/' className={styles.logoArea}>
          <h1 className={styles.logo}>전국문화축제</h1>
          <span className={styles.logoSub}>NATIONAL CULTURE FESTIVAL</span>
        </Link>
        <button onClick={toggle} className={styles.burgerBtn}>
          <CiMenuBurger className={styles.burgerIcon} />
        </button>
      </div>
      <Navbar />
    </header>
  );
};