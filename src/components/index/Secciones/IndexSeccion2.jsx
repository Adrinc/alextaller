import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/indexSeccion2.module.css";

const HomeSeccion2 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;

  return (
    <section id="que-es" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>{t.queEs.title}</h2>
            <p className={styles.subtitle}>{t.queEs.subtitle}</p>
            <p className={styles.description}>{t.queEs.description}</p>
            
            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  {t.queEs.beneficios.participacion.icon}
                </div>
                <h3 className={styles.benefitTitle}>
                  {t.queEs.beneficios.participacion.title}
                </h3>
                <p className={styles.benefitText}>
                  {t.queEs.beneficios.participacion.description}
                </p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  {t.queEs.beneficios.rapidez.icon}
                </div>
                <h3 className={styles.benefitTitle}>
                  {t.queEs.beneficios.rapidez.title}
                </h3>
                <p className={styles.benefitText}>
                  {t.queEs.beneficios.rapidez.description}
                </p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>
                  {t.queEs.beneficios.transparencia.icon}
                </div>
                <h3 className={styles.benefitTitle}>
                  {t.queEs.beneficios.transparencia.title}
                </h3>
                <p className={styles.benefitText}>
                  {t.queEs.beneficios.transparencia.description}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.imageContent}>
            <div className={styles.citizenIllustration}>
              <div className={styles.cityBackground}>
                <div className={styles.building}></div>
                <div className={styles.building}></div>
                <div className={styles.building}></div>
              </div>
              <div className={styles.citizenFigure}>
                <div className={styles.phoneInHand}>📱</div>
                <div className={styles.reportBubble}>
                  <span>💡</span>
                  <span>Reportando...</span>
                </div>
              </div>
              <div className={styles.floatingIcons}>
                <div className={styles.icon}>🚨</div>
                <div className={styles.icon}>🛣️</div>
                <div className={styles.icon}>🗑️</div>
                <div className={styles.icon}>🚦</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion2;