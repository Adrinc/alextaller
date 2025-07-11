import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/indexSeccion7.module.css";

const HomeSeccion7 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;

  return (
    <section id="descarga" className={styles.section}>
      <div className={styles.backgroundPattern}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>{t.cta.title}</h2>
        <h3 className={styles.subtitle}>{t.cta.subtitle}</h3>
        <p className={styles.description}>{t.cta.description}</p>
        
        <div className={styles.ctaContainer}>
          <a href="#download" className={styles.primaryButton}>
            {t.cta.buttons.primary}
          </a>
          <a href="#reports" className={styles.secondaryButton}>
            {t.cta.buttons.secondary}
          </a>
        </div>
        
        <a href="#contact" className={styles.contactButton}>
          {t.cta.buttons.contact}
        </a>
        
        <div className={styles.appStatsContainer}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>15k+</div>
            <div className={styles.statText}>{ingles ? "Active Users" : "Usuarios Activos"}</div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>72%</div>
            <div className={styles.statText}>{ingles ? "Problems Solved" : "Problemas Resueltos"}</div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>250+</div>
            <div className={styles.statText}>{ingles ? "Neighborhoods" : "Colonias"}</div>
          </div>
        </div>
        
        <div className={styles.appPreviewsContainer}>
          <div className={styles.appScreenshotWrapper}>
            <div className={styles.appScreenshot}>
              <div className={styles.appInterface}>
                <div className={styles.appHeader}></div>
                <div className={styles.appContent}>
                  <div className={styles.reportItem}></div>
                  <div className={styles.reportItem}></div>
                  <div className={styles.reportItem}></div>
                </div>
                <div className={styles.appBottomNav}></div>
              </div>
            </div>
          </div>
          <div className={styles.appScreenshotWrapper}>
            <div className={styles.appScreenshot}>
              <div className={styles.appInterface}>
                <div className={styles.appHeader}></div>
                <div className={styles.appMapContent}></div>
                <div className={styles.appBottomNav}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion7;