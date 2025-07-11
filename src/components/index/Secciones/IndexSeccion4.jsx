import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/indexSeccion4.module.css";

const HomeSeccion4 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;

  return (
    <section id="como-funciona" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.comoFunciona.title}</h2>
          <p className={styles.subtitle}>{t.comoFunciona.subtitle}</p>
        </div>

        <div className={styles.stepsContainer}>
          {t.comoFunciona.steps.map((step, index) => (
            <div key={index} className={styles.stepWrapper}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>
                  {step.number}
                </div>
                <div className={styles.stepIcon}>
                  {step.icon}
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              
              {/* Conector visual entre pasos */}
              {index < t.comoFunciona.steps.length - 1 && (
                <div className={styles.stepConnector}>
                  <div className={styles.connectorLine}></div>
                  <div className={styles.connectorArrow}>→</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Sección visual del flujo de trabajo */}
        <div className={styles.workflowVisualization}>
          <div className={styles.phoneDemo}>
            <div className={styles.phoneMockup}>
              <div className={styles.phoneScreen}>
                <div className={styles.demoStep1}>
                  <div className={styles.categoryGrid}>
                    <div className={styles.categoryItem}>💡</div>
                    <div className={styles.categoryItem}>🛣️</div>
                    <div className={styles.categoryItem}>🗑️</div>
                    <div className={styles.categoryItem}>🚨</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.flowArrow}>
            <span>📱</span>
          </div>

          <div className={styles.resultDemo}>
            <div className={styles.reportCard}>
              <div className={styles.reportHeader}>
                <span className={styles.reportId}>#RC-2024-001</span>
                <span className={styles.reportStatus}>En proceso</span>
              </div>
              <div className={styles.reportContent}>
                <div className={styles.reportIcon}>💡</div>
                <div className={styles.reportDetails}>
                  <h4>Luminaria dañada</h4>
                  <p>Av. Principal #123</p>
                  <div className={styles.progressBar}>
                    <div className={styles.progress}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion4;