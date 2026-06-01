import { RefObject, useRef } from 'react';
import { TfiArrowLeft } from "react-icons/tfi";
import { TfiArrowRight } from "react-icons/tfi";

import styles from './SliderControls.module.scss';

type Props = {
  trackRef: RefObject<HTMLUListElement | null>;
};

export const SliderControls = ({ trackRef }: Props) => {
  const currentX = useRef<number>(0);

  const handleTrackControl = (direction: 'left' | 'right') => {
    const trackEle = trackRef.current;

    if (!trackEle) {
      return;
    }

    const remToPx = (rem: number) => {
      return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
    };

    const offset = remToPx(18) + remToPx(1);
    const delta = direction === 'left' ? offset : -offset;
    
    const maxX = -(trackEle.scrollWidth - trackEle.parentElement!.offsetWidth);
    
    currentX.current = Math.min(0, Math.max(maxX, currentX.current + delta));
    trackEle.style.transform = `translateX(${currentX.current}px)`;
  };

  return (
    <div className={styles.sliderControls}>
      <button onClick={() => handleTrackControl('left')} className={styles.btn}>
        <TfiArrowLeft className={styles.icon} />
      </button>
      <button onClick={() => handleTrackControl('right')} className={styles.btn}>
        <TfiArrowRight className={styles.icon} />
      </button>
    </div>
  )
}