import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/indexSeccion6.module.css";

const HomeSeccion6 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;

  return (
    <section id="soporte-institucional" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.soporteInstitucional.title}</h2>
          <p className={styles.subtitle}>{t.soporteInstitucional.subtitle}</p>
        </div>

        <div className={styles.contentContainer}>
          <div className={styles.textContent}>
            <p className={styles.description}>
              {t.soporteInstitucional.description}
            </p>

            <div className={styles.featuresGrid}>
              {t.soporteInstitucional.features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>
                    {feature.icon}
                  </div>
                  <h3 className={styles.featureTitle}>{feature.title}</h3>
                  <p className={styles.featureDescription}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.officeIllustration}>
            <div className={styles.officeBg}>
              <div className={styles.officeDesk}>
                <div className={styles.computer}></div>
                <div className={styles.person}></div>
              </div>
              <div className={styles.officeDesk}>
                <div className={styles.computer}></div>
                <div className={styles.person}></div>
              </div>
              <div className={styles.incomingReports}>
                <div className={styles.reportBubble}>📍</div>
                <div className={styles.reportBubble}>🛣️</div>
                <div className={styles.reportBubble}>💡</div>
                <div className={styles.reportBubble}>🗑️</div>
              </div>
              <div className={styles.dashboardScreen}>
                <div className={styles.dashboardHeader}></div>
                <div className={styles.dashboardStats}></div>
                <div className={styles.dashboardMap}></div>
                <div className={styles.dashboardTable}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Proceso de gestión de reportes */}
        <div className={styles.processSection}>
          <h3 className={styles.processTitle}>
            {ingles ? "How we handle your reports" : "Cómo gestionamos tus reportes"}
          </h3>
          
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.processIcon}>📥</div>
              <div className={styles.processContent}>
                <h4>{ingles ? "Reception" : "Recepción"}</h4>
                <p>{ingles ? "Reports are received in real time" : "Los reportes se reciben en tiempo real"}</p>
              </div>
            </div>
            
            <div className={styles.processArrow}>→</div>
            
            <div className={styles.processStep}>
              <div className={styles.processIcon}>🔍</div>
              <div className={styles.processContent}>
                <h4>{ingles ? "Verification" : "Verificación"}</h4>
                <p>{ingles ? "An inspector validates the incident" : "Un inspector valida el incidente"}</p>
              </div>
            </div>
            
            <div className={styles.processArrow}>→</div>
            
            <div className={styles.processStep}>
              <div className={styles.processIcon}>📋</div>
              <div className={styles.processContent}>
                <h4>{ingles ? "Assignment" : "Asignación"}</h4>
                <p>{ingles ? "The case is assigned to the appropriate department" : "El caso se asigna al departamento correspondiente"}</p>
              </div>
            </div>
            
            <div className={styles.processArrow}>→</div>
            
            <div className={styles.processStep}>
              <div className={styles.processIcon}>✅</div>
              <div className={styles.processContent}>
                <h4>{ingles ? "Resolution" : "Resolución"}</h4>
                <p>{ingles ? "The problem is fixed and documented" : "El problema se resuelve y documenta"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion6;