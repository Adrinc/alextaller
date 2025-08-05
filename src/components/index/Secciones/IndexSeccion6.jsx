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
        {/* Header principal con elementos decorativos */}
        <div className={styles.header}>
          <div className={styles.headerBadge}>
            <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C15.4,11.9 16,12.4 16,13V16C16,17 15,18 14,18H10C9,18 8,17 8,16V13C8,12.4 8.4,11.9 9,11.5V10C9,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.2,9.2 10.2,10V11.5H13.8V10C13.8,9.2 12.8,8.2 12,8.2Z"/>
            </svg>
            <span>{ingles ? "Institutional Support" : "Respaldo Institucional"}</span>
          </div>
          <h2 className={styles.title}>{t.soporteInstitucional.title}</h2>
          <p className={styles.subtitle}>{t.soporteInstitucional.subtitle}</p>
        </div>

        {/* Sección principal con imagen y contenido */}
        <div className={styles.mainContent}>
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <img 
                src="/image/global/grupoti.jpg" 
                alt={ingles ? "City administration office" : "Oficina de administración municipal"}
                className={styles.mainImage}
              />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <div className={styles.statsGroup}>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>24/7</span>
                      <span className={styles.statLabel}>
                        {ingles ? "Monitoring" : "Monitoreo"}
                      </span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statNumber}>72%</span>
                      <span className={styles.statLabel}>
                        {ingles ? "Resolution Rate" : "Tasa de Resolución"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.textContent}>
            <div className={styles.contentCard}>
              <p className={styles.description}>
                {t.soporteInstitucional.description}
              </p>

              <div className={styles.featuresGrid}>
                {t.soporteInstitucional.features.map((feature, index) => (
                  <div key={index} className={styles.featureCard}>
                    <div className={styles.featureIconContainer}>
                      <span className={styles.featureIcon}>{feature.icon}</span>
                    </div>
                    <div className={styles.featureContent}>
                      <h3 className={styles.featureTitle}>{feature.title}</h3>
                      <p className={styles.featureDescription}>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certificaciones y credenciales */}
              <div className={styles.credentialsSection}>
                <h4 className={styles.credentialsTitle}>
                  {ingles ? "Certified Quality" : "Calidad Certificada"}
                </h4>
                <div className={styles.credentialsBadges}>
                  <div className={styles.credentialBadge}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                    </svg>
                    <span>ISO 9001</span>
                  </div>
                  <div className={styles.credentialBadge}>
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1Z"/>
                    </svg>
                    <span>{ingles ? "Gov Certified" : "Certificado Gob"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proceso de gestión mejorado */}
        <div className={styles.processSection}>
          <div className={styles.processHeader}>
            <h3 className={styles.processTitle}>
              {ingles ? "How we handle your reports" : "Cómo gestionamos tus reportes"}
            </h3>
            <p className={styles.processSubtitle}>
              {ingles 
                ? "A professional workflow designed for maximum efficiency" 
                : "Un flujo de trabajo profesional diseñado para máxima eficiencia"
              }
            </p>
          </div>
          
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>01</div>
              <div className={styles.processIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M19,19V5H5V19H19Z"/>
                </svg>
              </div>
              <div className={styles.processContent}>
                <h4>{ingles ? "Reception" : "Recepción"}</h4>
                <p>{ingles ? "Reports are received in real time through our monitoring center" : "Los reportes se reciben en tiempo real en nuestro centro de monitoreo"}</p>
              </div>
            </div>
            
            <div className={styles.processArrow}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
              </svg>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>02</div>
              <div className={styles.processIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14Z"/>
                </svg>
              </div>
              <div className={styles.processContent}>
                <h4>{ingles ? "Verification" : "Verificación"}</h4>
                <p>{ingles ? "A certified inspector validates the incident and assesses priority" : "Un inspector certificado valida el incidente y evalúa la prioridad"}</p>
              </div>
            </div>
            
            <div className={styles.processArrow}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
              </svg>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>03</div>
              <div className={styles.processIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
              </div>
              <div className={styles.processContent}>
                <h4>{ingles ? "Assignment" : "Asignación"}</h4>
                <p>{ingles ? "The case is assigned to the specialized municipal department" : "El caso se asigna al departamento municipal especializado"}</p>
              </div>
            </div>
            
            <div className={styles.processArrow}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
              </svg>
            </div>
            
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>04</div>
              <div className={styles.processIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                </svg>
              </div>
              <div className={styles.processContent}>
                <h4>{ingles ? "Resolution" : "Resolución"}</h4>
                <p>{ingles ? "The problem is resolved and documented with photographic evidence" : "El problema se resuelve y documenta con evidencia fotográfica"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Equipo de trabajo */}
        <div className={styles.teamSection}>
          <div className={styles.teamHeader}>
            <h3 className={styles.teamTitle}>
              {ingles ? "Our Professional Team" : "Nuestro Equipo Profesional"}
            </h3>
            <p className={styles.teamSubtitle}>
              {ingles 
                ? "Specialized personnel committed to your community" 
                : "Personal especializado comprometido con tu comunidad"
              }
            </p>
          </div>

          <div className={styles.teamGrid}>
            <div className={styles.teamCard}>
              <div className={styles.teamImageContainer}>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80" 
                  alt="Team member"
                  className={styles.teamImage}
                />
                <div className={styles.teamBadge}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                  </svg>
                </div>
              </div>
              <div className={styles.teamInfo}>
                <h4>{ingles ? "Report Coordinators" : "Coordinadores de Reportes"}</h4>
                <p>{ingles ? "15+ certified professionals" : "15+ profesionales certificados"}</p>
              </div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamImageContainer}>
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80" 
                  alt="Team member"
                  className={styles.teamImage}
                />
                <div className={styles.teamBadge}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                  </svg>
                </div>
              </div>
              <div className={styles.teamInfo}>
                <h4>{ingles ? "Field Inspectors" : "Inspectores de Campo"}</h4>
                <p>{ingles ? "25+ field specialists" : "25+ especialistas de campo"}</p>
              </div>
            </div>

            <div className={styles.teamCard}>
              <div className={styles.teamImageContainer}>
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                  alt="Team member"
                  className={styles.teamImage}
                />
                <div className={styles.teamBadge}>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                  </svg>
                </div>
              </div>
              <div className={styles.teamInfo}>
                <h4>{ingles ? "Technical Support" : "Soporte Técnico"}</h4>
                <p>{ingles ? "24/7 monitoring center" : "Centro de monitoreo 24/7"}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action mejorado */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1M11,7H13A2,2 0 0,1 15,9V10.5H13V9H11V15H13V13.5H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7Z"/>
              </svg>
            </div>
            <h3 className={styles.ctaTitle}>
              {ingles 
                ? "Join the digital municipal transformation" 
                : "Únete a la transformación municipal digital"
              }
            </h3>
            <p className={styles.ctaDescription}>
              {ingles 
                ? "With institutional backing and a professional team, your reports make a real difference." 
                : "Con respaldo institucional y un equipo profesional, tus reportes marcan una diferencia real."
              }
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaPrimary}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                </svg>
                {ingles ? "Contact Support" : "Contactar Soporte"}
              </button>
              <button className={styles.ctaSecondary}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.09,8.59L17.5,10L11,16.5Z"/>
                </svg>
                {ingles ? "View Documentation" : "Ver Documentación"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion6;