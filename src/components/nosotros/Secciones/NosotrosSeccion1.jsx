// NosotrosSeccion1.jsx - Hero Section sobria y elegante
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/NosotrosSeccion1.module.css';
import { isEnglish } from '../../../data/variables.js';
import { translationsNosotros } from '../../../data/translationsNosotros.js';

const NosotrosSeccion1 = () => {
  const [isVisible, setIsVisible] = useState(false);
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
      id="nosotros-hero"
      ref={sectionRef}
      className={`${styles.heroSection} ${isVisible ? styles.visible : ''}`}
      onMouseMove={handleMouseMove}
    >
      {/* Background Image with Parallax */}
      <div className={styles.backgroundContainer}>
        <div 
          className={styles.backgroundImage}
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div className={styles.overlay}></div>
      </div>

      {/* Floating Elements */}
      <div className={styles.floatingElements}>
        <div className={styles.gear1}>⚙️</div>
        <div className={styles.gear2}>🔧</div>
        <div className={styles.gear3}>⚙️</div>
        <div className={styles.wrench}>🔧</div>
      </div>

      {/* Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Pre-title */}
          <div className={styles.preTitle}>
            <span className={styles.line}></span>
            <span className={styles.preTitleText}>Alex Taller Mecánico</span>
            <span className={styles.line}></span>
          </div>

          {/* Main Title */}
          <h1 className={styles.title}>
            <span className={styles.titleWord} data-text={t.hero.title}>
              {t.hero.title}
            </span>
          </h1>

          {/* Subtitle */}
          <p className={styles.subtitle}>
            {t.hero.subtitle}
          </p>

          {/* Description */}
          <p className={styles.description}>
            {t.hero.description}
          </p>

          {/* Divider Line */}
          <div className={styles.divider}>
            <div className={styles.dividerLine}></div>
            <div className={styles.dividerIcon}>🚗</div>
            <div className={styles.dividerLine}></div>
          </div>

          {/* Stats Preview */}
          <div className={styles.statsPreview}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>30+</span>
              <span className={styles.statLabel}>Años</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>15K+</span>
              <span className={styles.statLabel}>Clientes</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>50K+</span>
              <span className={styles.statLabel}>Reparaciones</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className={styles.scrollIndicator}>
            <div className={styles.scrollText}>Conoce nuestra historia</div>
            <div className={styles.scrollArrow}>
              <span>↓</span>
            </div>
          </div>
        </div>
      </div>

      {/* Particle Effects */}
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

      {/* Background Glow Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.glow1}></div>
        <div className={styles.glow2}></div>
        <div className={styles.glow3}></div>
      </div>
    </section>
  );
};

export default NosotrosSeccion1;
