// BeneficiosSeccion4.jsx - Estadísticas / Confianza en números
import React, { useEffect, useState, useRef } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/BeneficiosSeccion4.module.css';
import { isEnglish } from '../../../data/variables';
import { translationsBeneficios } from '../../../data/translationsBeneficios.js';

const BeneficiosSeccion4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({});
  const [visibleStats, setVisibleStats] = useState(new Set());
  const sectionRef = useRef(null);
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsBeneficios.en : translationsBeneficios.es;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            
            // Animar estadísticas una por una
            setTimeout(() => {
              t.stats.statistics.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleStats(prev => new Set([...prev, index]));
                  startCounter(index);
                }, index * 300);
              });
            }, 500);
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

  const startCounter = (index) => {
    const stat = t.stats.statistics[index];
    const targetNumber = parseFloat(stat.number.replace(/[^\d.]/g, ''));
    const isFloat = stat.number.includes('.');
    const prefix = stat.number.match(/^\+/) ? '+' : '';
    const suffix = stat.number.includes('/5') ? '/5' : '';
    
    let current = 0;
    const increment = targetNumber / 30; // 30 steps
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        current = targetNumber;
        clearInterval(timer);
      }
      
      let displayValue;
      if (isFloat) {
        displayValue = current.toFixed(1);
      } else {
        displayValue = Math.floor(current).toLocaleString();
      }
      
      setCounters(prev => ({
        ...prev,
        [index]: `${prefix}${displayValue}${suffix}`
      }));
    }, 50);
  };

  return (
    <section className={styles.statsSection} ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.sectionTitle}>
            {t.stats.title}
          </h2>
          <p className={styles.sectionSubtitle}>
            {t.stats.subtitle}
          </p>
          <div className={styles.headerDivider}></div>
        </div>

        {/* Stats Grid */}
        <div className={styles.statsGrid}>
          {t.stats.statistics.map((stat, index) => (
            <div
              key={index}
              className={`${styles.statCard} ${
                visibleStats.has(index) ? styles.visible : ''
              }`}
            >
              <div className={styles.cardInner}>
                <div className={styles.iconContainer}>
                  <span className={styles.statIcon}>{stat.icon}</span>
                  <div className={styles.iconRing}></div>
                </div>

                <div className={styles.statContent}>
                  <div className={styles.numberContainer}>
                    <span className={styles.statNumber}>
                      {counters[index] || '0'}
                    </span>
                    <span className={styles.statTitle}>
                      {stat.title}
                    </span>
                  </div>
                  
                  <p className={styles.statDescription}>
                    {stat.description}
                  </p>
                </div>

                <div className={styles.cardGlow}></div>
                
                {/* Progress bar */}
                <div className={styles.progressBar}>
                  <div 
                    className={styles.progressFill}
                    style={{
                      animationDelay: `${index * 300}ms`
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className={`${styles.trustIndicators} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.trustGrid}>
            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.trustText}>
                <strong>Garantía Extendida</strong>
                <span>Hasta 6 meses en reparaciones</span>
              </div>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className={styles.trustText}>
                <strong>Certificación ISO</strong>
                <span>Estándares internacionales</span>
              </div>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.trustText}>
                <strong>Equipo Capacitado</strong>
                <span>Técnicos especializados</span>
              </div>
            </div>

            <div className={styles.trustItem}>
              <div className={styles.trustIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.trustText}>
                <strong>Excelencia Probada</strong>
                <span>Reconocimientos del sector</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`${styles.bottomCta} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              Los números no mienten
            </h3>
            <p className={styles.ctaDescription}>
              Únete a los miles de clientes satisfechos que han confiado en nosotros
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryCtaBtn}>
                <span>Ver Testimonios</span>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className={styles.secondaryCtaBtn}>
                <span>Solicitar Servicio</span>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSeccion4;
