// BeneficiosSeccion2.jsx - Beneficios Principales Grid
import React, { useEffect, useState, useRef } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/BeneficiosSeccion2.module.css';
import { isEnglish } from '../../../data/variables';
import { translationsBeneficios } from '../../../data/translationsBeneficios.js';

const BeneficiosSeccion2 = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsBeneficios.en : translationsBeneficios.es;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleCards(prev => new Set([...prev, cardIndex]));
            }, cardIndex * 200);
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach(card => observer.observe(card));

    return () => {
      cards?.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section className={styles.benefitsSection} ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            {t.mainBenefits.title}
          </h2>
          <p className={styles.sectionSubtitle}>
            {t.mainBenefits.subtitle}
          </p>
          <div className={styles.headerDivider}></div>
        </div>

        {/* Benefits Grid */}
        <div className={styles.benefitsGrid}>
          {t.mainBenefits.benefits.map((benefit, index) => (
            <div
              key={index}
              data-index={index}
              className={`${styles.benefitCard} ${
                visibleCards.has(index) ? styles.visible : ''
              }`}
            >
              <div className={styles.cardInner}>
                <div className={styles.iconContainer}>
                  <span className={styles.benefitIcon}>{benefit.icon}</span>
                  <div className={styles.iconGlow}></div>
                </div>

                <div className={styles.cardContent}>
                  <h3 className={styles.benefitTitle}>
                    {benefit.title}
                  </h3>
                  <p className={styles.benefitDescription}>
                    {benefit.description}
                  </p>
                </div>

                <div className={styles.cardFooter}>
                  <button className={styles.learnMoreBtn}>
                    {t.common.learnMore}
                    <svg className={styles.btnIcon} viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>

                {/* Decorative elements */}
                <div className={styles.cardDecorations}>
                  <div className={styles.decoration1}></div>
                  <div className={styles.decoration2}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCta}>
          <h3 className={styles.ctaTitle}>
            ¿Quieres experimentar estos beneficios?
          </h3>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryBtn}>
              <span>{t.common.schedule}</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className={styles.secondaryBtn}>
              <span>{t.common.whatsapp}</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSeccion2;
