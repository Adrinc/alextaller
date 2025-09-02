// BeneficiosSeccion1.jsx - Hero Section
import React, { useEffect, useState } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/BeneficiosSeccion1.module.css';
import { isEnglish } from '../../../data/variables';
import { translationsBeneficios } from '../../../data/translationsBeneficios.js';

const BeneficiosSeccion1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsBeneficios.en : translationsBeneficios.es;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.heroSection}>
      {/* Background overlay */}
      <div className={styles.overlay}></div>
      
      {/* Animated particles */}
      <div className={styles.particles}>
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className={styles.heroContainer}>
        <div className={`${styles.heroContent} ${isVisible ? styles.visible : ''}`}>
          <h1 className={styles.heroTitle}>
            {t.hero.title}
          </h1>
          
          <div className={styles.divider}></div>
          
          <p className={styles.heroSubtitle}>
            {t.hero.subtitle}
          </p>

          <div className={styles.heroStats}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>30+</span>
              <span className={styles.statLabel}>{t.common.years}</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>12,500+</span>
              <span className={styles.statLabel}>autos atendidos</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>4.9/5</span>
              <span className={styles.statLabel}>satisfacción</span>
            </div>
          </div>

          <div className={styles.heroActions}>
            <button className={styles.ctaButton}>
              <span className={styles.buttonText}>{t.common.schedule}</span>
              <svg className={styles.buttonIcon} viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollWheel}></div>
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSeccion1;
