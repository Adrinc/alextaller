import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/indexSeccion3.module.css";

const HomeSeccion3 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;

  return (
    <section id="caracteristicas" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.caracteristicas.title}</h2>
          <p className={styles.subtitle}>{t.caracteristicas.subtitle}</p>
        </div>

        <div className={styles.featuresGrid}>
          {t.caracteristicas.features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <span className={styles.iconEmoji}>{feature.icon}</span>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              <div className={styles.featureAccent}></div>
            </div>
          ))}
        </div>

        {/* Sección de características de seguridad adicionales */}
        <div className={styles.securitySection}>
          <h3 className={styles.securityTitle}>
            {ingles ? "Advanced Security Features" : "Características de Seguridad Avanzadas"}
          </h3>
          <div className={styles.securityGrid}>
            {(ingles ? translations.en.seguridad.features : translations.es.seguridad.features).map((security, index) => (
              <div key={index} className={styles.securityCard}>
                <div className={styles.securityIcon}>
                  {security.icon}
                </div>
                <h4 className={styles.securityName}>{security.title}</h4>
                <p className={styles.securityDesc}>{security.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion3;