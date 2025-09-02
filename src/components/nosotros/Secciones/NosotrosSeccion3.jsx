// NosotrosSeccion3.jsx - Nuestros Valores con grid neumórfico épico
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/NosotrosSeccion3.module.css';
import { isEnglish } from '../../../data/variables.js';
import { translationsNosotros } from '../../../data/translationsNosotros.js';

const NosotrosSeccion3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredValue, setHoveredValue] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsNosotros.en : translationsNosotros.es;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
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

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    }
  };

  return (
    <section 
      id="nuestros-valores"
      ref={sectionRef}
      className={`${styles.valoresSection} ${isVisible ? styles.visible : ''}`}
      onMouseMove={handleMouseMove}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.tagline}>
            <span className={styles.tagIcon}>⭐</span>
            <span className={styles.tagText}>Nuestros Fundamentos</span>
          </div>
          <h2 className={styles.sectionTitle}>{t.valores.title}</h2>
          <p className={styles.sectionSubtitle}>{t.valores.subtitle}</p>
        </div>

        {/* Values Grid */}
        <div className={styles.valuesGrid}>
          {t.valores.values.map((value, index) => (
            <div
              key={value.id}
              className={`${styles.valueCard} ${
                hoveredValue === value.id ? styles.hovered : ''
              }`}
              onMouseEnter={() => setHoveredValue(value.id)}
              onMouseLeave={() => setHoveredValue(null)}
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Card Background Effect */}
              <div className={styles.cardBackground}></div>
              
              {/* Card Glow */}
              <div className={styles.cardGlow}></div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                {/* Icon */}
                <div className={styles.iconContainer}>
                  <span className={styles.valueIcon}>{value.icon}</span>
                  <div className={styles.iconGlow}></div>
                </div>

                {/* Title */}
                <h3 className={styles.valueTitle}>{value.title}</h3>

                {/* Description */}
                <p className={styles.valueDescription}>
                  {value.description}
                </p>

                {/* Details (appears on hover) */}
                <div className={styles.valueDetails}>
                  <p className={styles.detailsText}>
                    {value.details}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className={styles.decorativeElements}>
                  <div className={styles.cornerDot}></div>
                  <div className={styles.sideLine}></div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className={styles.hoverOverlay}>
                <div className={styles.overlayPattern}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomSection}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaIcon}>🏆</div>
            <h3 className={styles.ctaTitle}>
              Estos valores nos han convertido en líderes
            </h3>
            <p className={styles.ctaDescription}>
              Durante más de 30 años, hemos aplicado estos principios en cada reparación, 
              construyendo la confianza de miles de familias tijuanenses.
            </p>
            <div className={styles.ctaStats}>
              <div className={styles.ctaStatItem}>
                <span className={styles.ctaStatNumber}>100%</span>
                <span className={styles.ctaStatLabel}>Confiabilidad</span>
              </div>
              <div className={styles.ctaStatItem}>
                <span className={styles.ctaStatNumber}>30+</span>
                <span className={styles.ctaStatLabel}>Años de experiencia</span>
              </div>
              <div className={styles.ctaStatItem}>
                <span className={styles.ctaStatNumber}>15K+</span>
                <span className={styles.ctaStatLabel}>Clientes satisfechos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Background */}
      <div className={styles.interactiveBackground}>
        <div 
          className={styles.followCursor}
          style={{
            left: `${mousePosition.x}%`,
            top: `${mousePosition.y}%`
          }}
        ></div>
      </div>

      {/* Floating Symbols */}
      <div className={styles.floatingSymbols}>
        {['🔧', '⚙️', '🚗', '🛡️', '⚡', '🎯'].map((symbol, index) => (
          <div
            key={index}
            className={styles.floatingSymbol}
            style={{
              left: `${15 + (index * 12)}%`,
              top: `${20 + (index % 3) * 25}%`,
              animationDelay: `${index * 2}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb1}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.gradientOrb3}></div>
      </div>
    </section>
  );
};

export default NosotrosSeccion3;
