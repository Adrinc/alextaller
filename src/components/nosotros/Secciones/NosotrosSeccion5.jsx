// NosotrosSeccion5.jsx - Testimonio institucional con diseño épico
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/NosotrosSeccion5.module.css';
import { isEnglish } from '../../../data/variables.js';
import { translationsNosotros } from '../../../data/translationsNosotros.js';

const NosotrosSeccion5 = () => {
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
      id="testimonio-institucional"
      ref={sectionRef}
      className={`${styles.testimonioSection} ${isVisible ? styles.visible : ''}`}
      onMouseMove={handleMouseMove}
    >
      {/* Background Video/Image */}
      <div className={styles.backgroundContainer}>
        <div className={styles.backgroundImage}></div>
        <div className={styles.overlay}></div>
        <div 
          className={styles.parallaxOverlay}
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
      </div>

      {/* Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Pre-title */}
          <div className={styles.preTitle}>
            <span className={styles.preTitleText}>Testimonio Institucional</span>
          </div>

          {/* Main Quote */}
          <div className={styles.mainQuote}>
            <div className={styles.quoteIcon}>"</div>
            <blockquote className={styles.quoteText}>
              No solo reparamos autos, construimos confianza con cada cliente que nos visita
            </blockquote>
            <div className={styles.quoteAuthor}>
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>Alejandro Martínez</span>
                <span className={styles.authorTitle}>Fundador y Director General</span>
              </div>
            </div>
          </div>

          {/* Supporting Content */}
          <div className={styles.supportingContent}>
            <div className={styles.supportCard}>
              <div className={styles.cardIcon}>🏆</div>
              <h3 className={styles.cardTitle}>Reconocimiento</h3>
              <p className={styles.cardDescription}>
                Tres décadas de excelencia nos han posicionado como el taller de confianza 
                para miles de familias en Tijuana.
              </p>
            </div>

            <div className={styles.supportCard}>
              <div className={styles.cardIcon}>🤝</div>
              <h3 className={styles.cardTitle}>Compromiso</h3>
              <p className={styles.cardDescription}>
                Cada reparación es una promesa cumplida, cada diagnóstico una muestra 
                de nuestra dedicación profesional.
              </p>
            </div>

            <div className={styles.supportCard}>
              <div className={styles.cardIcon}>⚡</div>
              <h3 className={styles.cardTitle}>Innovación</h3>
              <p className={styles.cardDescription}>
                Combinamos la experiencia tradicional con la tecnología más avanzada 
                para brindar el mejor servicio.
              </p>
            </div>
          </div>

          {/* Stats Row */}
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>8+</span>
              <span className={styles.statLabel}>Años de experiencia</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>15K+</span>
              <span className={styles.statLabel}>Clientes satisfechos</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>50K+</span>
              <span className={styles.statLabel}>Reparaciones exitosas</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>100%</span>
              <span className={styles.statLabel}>Garantía en el trabajo</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingGear1}>⚙️</div>
        <div className={styles.floatingGear2}>🔧</div>
        <div className={styles.floatingGear3}>⚙️</div>
        <div className={styles.floatingWrench}>🔧</div>
      </div>

      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.glow1}></div>
        <div className={styles.glow2}></div>
        <div className={styles.glow3}></div>
      </div>
    </section>
  );
};

export default NosotrosSeccion5;
