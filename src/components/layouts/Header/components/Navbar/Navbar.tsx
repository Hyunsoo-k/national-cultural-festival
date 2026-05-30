"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

import { Category } from '@/types/category';
import { useNavbarStore } from '@/stores/useNavbarStore';

import styles from './Navbar.module.scss';

type NavItem = {
  category: Category;
  name: '지역별' | '기간별';
};

const NAV_ITEMS: NavItem[] = [
  {
    category: 'area',
    name: "지역별",
  },
  {
    category: 'period',
    name: '기간별'
  }
];

export const Navbar = () => {
  const { isOpen, close } = useNavbarStore();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    close();
  }, [pathname, searchParams, close]); 

  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.open : styles.close}`}>
      <ul className={styles.list}>
        {NAV_ITEMS.map((item: NavItem) => (
          <li key={item.category} className={styles.item}>
            <Link href={`/${item.category}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};