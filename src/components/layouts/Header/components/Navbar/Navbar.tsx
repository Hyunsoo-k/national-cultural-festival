"use client";

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';

import { useNavbarStore } from '@/stores/useNavbarStore';
import { ScreenPaddingWrapper } from '@/components/layouts/ScreenPaddingWrapper/ScreenPaddingWrapper';

import styles from './Navbar.module.scss';

export const Navbar = () => {
  const { isOpen, close } = useNavbarStore();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    close();
  }, [pathname, searchParams, close]); 

  return (
    <nav className={`${styles.navbar} ${isOpen ? styles.open : styles.close}`}>
      <ScreenPaddingWrapper>
        <div className={styles.inner}>
          <Link href={`/items?category=area`} className={styles.link}>
            지역별 문화∙축제
          </Link>
          <div className={styles.boundary}>/</div>
          <Link href={`/items?category=realm`} className={styles.link}>
            분야별 문화∙축제
          </Link>
        </div>
      </ScreenPaddingWrapper>
    </nav>
  );
};