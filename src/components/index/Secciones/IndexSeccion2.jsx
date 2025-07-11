import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/indexSeccion2.module.css";

const HomeSeccion2 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;

  const SecurityIcon = () => (
    <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
    </svg>
  );

  const SpeedIcon = () => (
    <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,16A3,3 0 0,1 9,13C9,11.88 9.61,10.9 10.5,10.39L20.21,4.77L14.68,14.35C14.18,15.33 13.17,16 12,16M12,3C13.81,3 15.5,3.5 16.97,4.32L14.87,5.53C14,5.19 13,5 12,5A8,8 0 0,0 4,13C4,15.21 4.89,17.21 6.34,18.65H6.35C6.74,19.04 6.74,19.67 6.35,20.06C5.96,20.45 5.32,20.45 4.93,20.06C3.12,18.26 2,15.76 2,13A10,10 0 0,1 12,3M22,13C22,15.76 20.88,18.26 19.07,20.07C18.68,20.46 18.05,20.46 17.66,20.07C17.27,19.68 17.27,19.05 17.66,18.66C19.11,17.21 20,15.21 20,13C20,12 19.81,11 19.47,10.13L20.68,8.03C21.5,9.5 22,11.19 22,13Z"/>
    </svg>
  );

  const TransparencyIcon = () => (
    <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/>
    </svg>
  );

  const ParticipationIcon = () => (
    <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16,4C18.21,4 20,5.79 20,8C20,10.21 18.21,12 16,12C13.79,12 12,10.21 12,8C12,5.79 13.79,4 16,4M16,13C18.67,13 24,14.33 24,17V20H8V17C8,14.33 13.33,13 16,13M8,4C10.21,4 12,5.79 12,8C12,10.21 10.21,12 8,12C5.79,12 4,10.21 4,8C4,5.79 5.79,4 8,4M8,13C10.67,13 16,14.33 16,17V20H0V17C0,14.33 5.33,13 8,13Z"/>
    </svg>
  );

  return (
    <section id="que-es" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            {/* Badge institucional */}
            <div className={styles.institutionalBadge}>
              <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M2,21H22V19H20V7.5L12,2L4,7.5V19H2V21M16,13H18V17H16V13M10,13H12V17H10V13M6,13H8V17H6V13M14,13V17H16V13H14M12,13V17H10V13H12M8,13V17H6V13H8Z"/>
              </svg>
              <span>{ingles ? "Municipal Technology" : "Tecnología Municipal"}</span>
            </div>

            <h2 className={styles.title}>{t.queEs.title}</h2>
            <p className={styles.subtitle}>{t.queEs.subtitle}</p>
            <p className={styles.description}>{t.queEs.description}</p>
            
            {/* Estadísticas clave */}
            <div className={styles.keyStats}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>15,420+</div>
                <div className={styles.statLabel}>
                  {ingles ? "Reports Processed" : "Reportes Procesados"}
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>72%</div>
                <div className={styles.statLabel}>
                  {ingles ? "Success Rate" : "Tasa de Éxito"}
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>2.5h</div>
                <div className={styles.statLabel}>
                  {ingles ? "Avg Response" : "Respuesta Promedio"}
                </div>
              </div>
            </div>
            
            {/* Beneficios mejorados */}
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIconContainer}>
                  <ParticipationIcon />
                </div>
                <div className={styles.benefitContent}>
                  <h3 className={styles.benefitTitle}>
                    {t.queEs.beneficios.participacion.title}
                  </h3>
                  <p className={styles.benefitText}>
                    {t.queEs.beneficios.participacion.description}
                  </p>
                </div>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitIconContainer}>
                  <SpeedIcon />
                </div>
                <div className={styles.benefitContent}>
                  <h3 className={styles.benefitTitle}>
                    {t.queEs.beneficios.rapidez.title}
                  </h3>
                  <p className={styles.benefitText}>
                    {t.queEs.beneficios.rapidez.description}
                  </p>
                </div>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitIconContainer}>
                  <TransparencyIcon />
                </div>
                <div className={styles.benefitContent}>
                  <h3 className={styles.benefitTitle}>
                    {t.queEs.beneficios.transparencia.title}
                  </h3>
                  <p className={styles.benefitText}>
                    {t.queEs.beneficios.transparencia.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Certificaciones/Sellos */}
            <div className={styles.certifications}>
              <div className={styles.certItem}>
                <SecurityIcon />
                <span>{ingles ? "ISO 27001 Compliant" : "Cumple ISO 27001"}</span>
              </div>
              <div className={styles.certItem}>
                <svg className={styles.certIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                </svg>
                <span>{ingles ? "Government Certified" : "Certificado Gubernamental"}</span>
              </div>
            </div>
          </div>

          <div className={styles.imageContent}>
            {/* Placeholder para imagen real */}
            <div className={styles.imageContainer}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.placeholderContent}>
                  <svg className={styles.placeholderIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19,7H18V6A2,2 0 0,0 16,4H8A2,2 0 0,0 6,6V7H5A3,3 0 0,0 2,10V19A3,3 0 0,0 5,22H19A3,3 0 0,0 22,19V10A3,3 0 0,0 19,7M8,6H16V7H8V6M20,19A1,1 0 0,1 19,20H5A1,1 0 0,1 4,19V10A1,1 0 0,1 5,9H19A1,1 0 0,1 20,10V19M10,11H14A1,1 0 0,1 15,12A1,1 0 0,1 14,13H10A1,1 0 0,1 9,12A1,1 0 0,1 10,11Z"/>
                  </svg>
                  <h3>{ingles ? "Official Municipal Platform" : "Plataforma Municipal Oficial"}</h3>
                  <p>{ingles ? "Image placeholder - Citizens using the app in Ensenada" : "Placeholder de imagen - Ciudadanos usando la app en Ensenada"}</p>
                </div>
              </div>
              
              {/* Overlay con información clave */}
              <div className={styles.imageOverlay}>
                <div className={styles.overlayCard}>
                  <div className={styles.overlayHeader}>
                    <div className={styles.statusIndicator}></div>
                    <span>{ingles ? "Live Data" : "Datos en Vivo"}</span>
                  </div>
                  <div className={styles.overlayStats}>
                    <div className={styles.overlayStat}>
                      <strong>94%</strong>
                      <span>{ingles ? "Satisfaction" : "Satisfacción"}</span>
                    </div>
                    <div className={styles.overlayStat}>
                      <strong>24/7</strong>
                      <span>{ingles ? "Available" : "Disponible"}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Características técnicas */}
            <div className={styles.technicalFeatures}>
              <h4>{ingles ? "Technical Features" : "Características Técnicas"}</h4>
              <ul className={styles.featureList}>
                <li>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                  {ingles ? "Real-time GPS tracking" : "Rastreo GPS en tiempo real"}
                </li>
                <li>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                  {ingles ? "Encrypted data transmission" : "Transmisión de datos encriptada"}
                </li>
                <li>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                  {ingles ? "Multi-platform integration" : "Integración multiplataforma"}
                </li>
                <li>
                  <svg className={styles.checkIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
                  </svg>
                  {ingles ? "Automated workflow management" : "Gestión automatizada de flujos de trabajo"}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion2;