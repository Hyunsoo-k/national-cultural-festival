import { HeroSection } from '@/components/HeroSection/HeroSection';
import { SectionDivider } from '@/components/ui/SectionDivider/SectionDivider';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <HeroSection />
        <SectionDivider label='AREA' />
      </main>
    </div>
  );
}
