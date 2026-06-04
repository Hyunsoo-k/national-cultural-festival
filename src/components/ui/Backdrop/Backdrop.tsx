'use client';

import { createPortal } from 'react-dom';

import { useBackdropStore } from '@/stores/useBackdropStore';

import styles from './Backdrop.module.scss';
import { useEffect } from 'react';

export const Backdrop = () => {
  const { isOpen, close } = useBackdropStore();

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div onClick={close} className={styles.backdrop} />,
    document.body
  );
};