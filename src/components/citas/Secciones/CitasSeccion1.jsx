// CitasSeccion1.jsx - Hero Section para página de citas
import React, { useEffect, useState, useRef } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/CitasSeccion1.module.css';
import { isEnglish } from '../../../data/variables';
import { translationsCitas } from '../../../data/translationsCitas.js';

const CitasSeccion1 = ({ onStartBooking = null }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsCitas.en : translationsCitas.es;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleStartBooking = () => {
    if (onStartBooking) {
      onStartBooking();
    } else {
      // Scroll to stepper section
      const stepperSection = document.getElementById('booking-stepper');
      if (stepperSection) {
        stepperSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`${styles.heroSection} ${isVisible ? styles.visible : ''}`}
    >
      {/* Background Image with Overlay */}
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
      </div>

      {/* Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {t.hero.title}
          </h1>
          
          <p className={styles.subtitle}>
            {t.hero.subtitle}
          </p>

          <button 
            className={styles.ctaButton}
            onClick={handleStartBooking}
          >
            <span className={styles.buttonText}>{t.hero.button}</span>
            <span className={styles.buttonIcon}>📅</span>
            <div className={styles.buttonGlow}></div>
          </button>

          {/* Floating Icons */}
          <div className={styles.floatingIcons}>
            <div className={`${styles.floatingIcon} ${styles.icon1}`}>🔧</div>
            <div className={`${styles.floatingIcon} ${styles.icon2}`}>⚡</div>
            <div className={`${styles.floatingIcon} ${styles.icon3}`}>🚗</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className={styles.trustIndicators}>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>⭐</div>
            <div className={styles.trustText}>
              <span className={styles.trustNumber}>4.9/5</span>
              <span className={styles.trustLabel}>Satisfacción</span>
            </div>
          </div>
          
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>🔧</div>
            <div className={styles.trustText}>
              <span className={styles.trustNumber}>30+</span>
              <span className={styles.trustLabel}>Años</span>
            </div>
          </div>
          
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>🚗</div>
            <div className={styles.trustText}>
              <span className={styles.trustNumber}>12,500+</span>
              <span className={styles.trustLabel}>Autos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollIcon}>↓</div>
        <span className={styles.scrollText}>Desliza para agendar</span>
      </div>

      {/* Background Particles */}
      <div className={styles.backgroundParticles}>
        {Array.from({ length: 8 }).map((_, i) => (
          <div 
            key={i}
            className={styles.particle}
            style={{
              left: `${10 + (i * 12)}%`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CitasSeccion1;
