import React from 'react';
import { useStore } from '@nanostores/react';
import { currentLanguage } from '../../data/signals.jsx';
import { translationsServicios } from '../../data/translationsServicios.js';
import styles from '../servicios/css/ServiciosSeccion1.module.css';

const ServiciosSeccion1 = () => {
  const lang = useStore(currentLanguage);
  const t = translationsServicios[lang];

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBackground}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <div className={styles.container}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                {t.hero.title}
              </h1>
              <p className={styles.heroSubtitle}>
                {t.hero.subtitle}
              </p>
              <p className={styles.heroDescription}>
                {t.hero.description}
              </p>
              <div className={styles.heroButtons}>
                <button className={styles.ctaButton}>
                  {t.common.schedule}
                </button>
                <button className={styles.secondaryButton}>
                  {t.common.freeEstimate}
                </button>
              </div>
            </div>
            <div className={styles.heroFeatures}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🔧</div>
                <h3>Tecnología Avanzada</h3>
                <p>Equipos de diagnóstico modernos</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>⭐</div>
                <h3>7 Años de Experiencia</h3>
                <p>Especialistas certificados</p>
              </div>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>🛡️</div>
                <h3>Garantía Total</h3>
                <p>En todos nuestros servicios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSeccion1;
