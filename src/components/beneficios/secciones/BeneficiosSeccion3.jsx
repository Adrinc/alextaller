// BeneficiosSeccion3.jsx - Sección Comparativa
import React, { useEffect, useState, useRef } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/BeneficiosSeccion3.module.css';
import { isEnglish } from '../../../data/variables';
import { translationsBeneficios } from '../../../data/translationsBeneficios.js';

const BeneficiosSeccion3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleBenefits, setVisibleBenefits] = useState(new Set());
  const sectionRef = useRef(null);
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsBeneficios.en : translationsBeneficios.es;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Animar beneficios uno por uno
            setTimeout(() => {
              const benefits = entry.target.querySelectorAll('[data-benefit-index]');
              benefits.forEach((benefit, index) => {
                setTimeout(() => {
                  setVisibleBenefits(prev => new Set([...prev, index]));
                }, index * 200);
              });
            }, 300);
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

  return (
    <section className={styles.comparisonSection} ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            {t.comparison.title}
          </h2>
          <p className={styles.sectionSubtitle}>
            {t.comparison.subtitle}
          </p>
        </div>

        <div className={styles.comparisonGrid}>
          {/* Left Column - Benefits List */}
          <div className={`${styles.benefitsList} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.listContainer}>
              <h3 className={styles.listTitle}>
                ¿Por qué elegir Taller Alex?
              </h3>
              
              <div className={styles.benefitsContainer}>
                {t.comparison.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    data-benefit-index={index}
                    className={`${styles.benefitItem} ${
                      visibleBenefits.has(index) ? styles.visible : ''
                    }`}
                  >
                    <div className={styles.checkIcon}>
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className={styles.benefitContent}>
                      <h4 className={styles.benefitTitle}>
                        {benefit.title}
                      </h4>
                      <p className={styles.benefitDescription}>
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={styles.guarantee}>
                <div className={styles.guaranteeIcon}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.guaranteeText}>
                  <strong>Garantía Total</strong>
                  <span>Respaldamos cada trabajo con nuestra garantía</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className={`${styles.imageColumn} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.imageContainer}>
              <div className={styles.imageWrapper}>
                <img 
                  src="/image/global/grupoti.jpg" 
                  alt={t.comparison.imageAlt}
                  className={styles.comparisonImage}
                />
                <div className={styles.imageOverlay}></div>
              </div>

              {/* Floating Stats */}
              <div className={styles.floatingStats}>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>30+</span>
                  <span className={styles.statLabel}>Años</span>
                </div>
                <div className={styles.statCard}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Satisfacción</span>
                </div>
              </div>

              {/* Trust Badge */}
              <div className={styles.trustBadge}>
                <div className={styles.badgeIcon}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="2"/>
                    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <div className={styles.badgeText}>
                  <strong>Certificado</strong>
                  <span>Taller Especializado</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Action */}
        <div className={styles.bottomAction}>
          <div className={styles.actionContent}>
            <h3 className={styles.actionTitle}>
              ¿Convencido de nuestros beneficios?
            </h3>
            <p className={styles.actionDescription}>
              Agenda tu cita ahora y experimenta la diferencia de trabajar con profesionales
            </p>
            <button className={styles.actionButton}>
              <span>Solicitar Cotización Gratuita</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSeccion3;
