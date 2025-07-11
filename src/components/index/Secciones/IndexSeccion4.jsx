import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/indexSeccion4.module.css";

const HomeSeccion4 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;

  const DownloadIcon = () => (
    <svg className={styles.stepIconSvg} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19,9H15V3H9V9H5L12,16L19,9M5,18V20H19V18H5Z"/>
    </svg>
  );

  const ReportIcon = () => (
    <svg className={styles.stepIconSvg} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
    </svg>
  );

  const TrackIcon = () => (
    <svg className={styles.stepIconSvg} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M12,6A6,6 0 0,1 18,12A6,6 0 0,1 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6M12,8A4,4 0 0,0 8,12A4,4 0 0,0 12,16A4,4 0 0,0 16,12A4,4 0 0,0 12,8Z"/>
    </svg>
  );

  const SolutionIcon = () => (
    <svg className={styles.stepIconSvg} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
    </svg>
  );

  const steps = [
    {
      number: "01",
      icon: <DownloadIcon />,
      title: ingles ? "Download & Register" : "Descarga y Registro",
      description: ingles ? "Download the official app and create your citizen account with government verification" : "Descarga la app oficial y crea tu cuenta ciudadana con verificación gubernamental",
      technical: ingles ? "Available on Google Play and App Store" : "Disponible en Google Play y App Store",
      time: ingles ? "2 minutes" : "2 minutos"
    },
    {
      number: "02",
      icon: <ReportIcon />,
      title: ingles ? "Create Report" : "Crear Reporte",
      description: ingles ? "Submit your incident with photos, location, and detailed description through our secure platform" : "Envía tu incidencia con fotos, ubicación y descripción detallada a través de nuestra plataforma segura",
      technical: ingles ? "GPS precision within 3 meters" : "Precisión GPS de 3 metros",
      time: ingles ? "5 minutes" : "5 minutos"
    },
    {
      number: "03",
      icon: <TrackIcon />,
      title: ingles ? "Real-time Tracking" : "Seguimiento en Tiempo Real",
      description: ingles ? "Monitor the progress of your report with automated updates and direct communication with municipal departments" : "Monitorea el progreso de tu reporte con actualizaciones automáticas y comunicación directa con departamentos municipales",
      technical: ingles ? "24/7 status monitoring" : "Monitoreo de estado 24/7",
      time: ingles ? "Ongoing" : "Continuo"
    },
    {
      number: "04",
      icon: <SolutionIcon />,
      title: ingles ? "Resolution & Feedback" : "Resolución y Retroalimentación",
      description: ingles ? "Receive confirmation when your issue is resolved and provide feedback to improve municipal services" : "Recibe confirmación cuando tu problema se resuelva y proporciona retroalimentación para mejorar los servicios municipales",
      technical: ingles ? "QR verification system" : "Sistema de verificación QR",
      time: ingles ? "Variable" : "Variable"
    }
  ];

  return (
    <section id="como-funciona" className={styles.section}>
      <div className={styles.container}>
        {/* Header profesional */}
        <div className={styles.header}>
          <div className={styles.headerBadge}>
            <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
            </svg>
            <span>{ingles ? "Streamlined Process" : "Proceso Optimizado"}</span>
          </div>

          <h2 className={styles.title}>{t.comoFunciona.title}</h2>
          <p className={styles.subtitle}>{t.comoFunciona.subtitle}</p>

          {/* Estadísticas del proceso */}
          <div className={styles.processStats}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>4</div>
              <div className={styles.statLabel}>
                {ingles ? "Simple Steps" : "Pasos Simples"}
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>10min</div>
              <div className={styles.statLabel}>
                {ingles ? "Average Time" : "Tiempo Promedio"}
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>95%</div>
              <div className={styles.statLabel}>
                {ingles ? "Success Rate" : "Tasa de Éxito"}
              </div>
            </div>
          </div>
        </div>

        {/* Pasos mejorados */}
        <div className={styles.stepsContainer}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepWrapper}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.number}</div>
                
                <div className={styles.stepIconContainer}>
                  {step.icon}
                </div>
                
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDescription}>{step.description}</p>
                  
                  <div className={styles.stepDetails}>
                    <div className={styles.stepTechnical}>
                      <span className={styles.techIcon}>⚙️</span>
                      <span>{step.technical}</span>
                    </div>
                    <div className={styles.stepTime}>
                      <span className={styles.timeIcon}>⏱️</span>
                      <span>{step.time}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Conector mejorado */}
              {index < steps.length - 1 && (
                <div className={styles.stepConnector}>
                  <div className={styles.connectorLine}></div>
                  <svg className={styles.connectorArrow} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Demostración visual del proceso */}
        <div className={styles.processDemo}>
          <div className={styles.demoContent}>
            <div className={styles.demoText}>
              <h3 className={styles.demoTitle}>
                {ingles ? "See the Process in Action" : "Ve el Proceso en Acción"}
              </h3>
              <p className={styles.demoDescription}>
                {ingles 
                  ? "Our streamlined platform ensures efficient communication between citizens and municipal departments, with real-time updates and transparent tracking throughout the entire process."
                  : "Nuestra plataforma optimizada asegura comunicación eficiente entre ciudadanos y departamentos municipales, con actualizaciones en tiempo real y seguimiento transparente durante todo el proceso."
                }
              </p>

              <div className={styles.processFeatures}>
                <div className={styles.processFeature}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.41,10.09L6,11.5L11,16.5Z"/>
                  </svg>
                  <span>{ingles ? "Instant notifications" : "Notificaciones instantáneas"}</span>
                </div>
                <div className={styles.processFeature}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                  </svg>
                  <span>{ingles ? "GPS location tracking" : "Rastreo de ubicación GPS"}</span>
                </div>
                <div className={styles.processFeature}>
                  <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17,12C17,14.42 15.28,16.44 13,16.9V21H11V16.9C8.72,16.44 7,14.42 7,12C7,9.58 8.72,7.56 11,7.1V2H13V7.1C15.28,7.56 17,9.58 17,12M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"/>
                  </svg>
                  <span>{ingles ? "Department integration" : "Integración departamental"}</span>
                </div>
              </div>
            </div>

            <div className={styles.demoVisual}>
              {/* Placeholder para imagen de demostración */}
              <div className={styles.imagePlaceholder}>
                <div className={styles.placeholderContent}>
                  <svg className={styles.placeholderIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                  </svg>
                  <h4>{ingles ? "Process Flow Demo" : "Demo del Flujo de Proceso"}</h4>
                  <p>{ingles ? "Image placeholder - Citizens and municipal workers using the platform" : "Placeholder de imagen - Ciudadanos y trabajadores municipales usando la plataforma"}</p>
                </div>
              </div>

              {/* Overlay con métricas en tiempo real */}
              <div className={styles.demoOverlay}>
                <div className={styles.overlayCard}>
                  <div className={styles.overlayHeader}>
                    <div className={styles.statusIndicator}></div>
                    <span>{ingles ? "Live System Status" : "Estado del Sistema en Vivo"}</span>
                  </div>
                  <div className={styles.overlayMetrics}>
                    <div className={styles.metric}>
                      <strong>127</strong>
                      <span>{ingles ? "Active Reports" : "Reportes Activos"}</span>
                    </div>
                    <div className={styles.metric}>
                      <strong>8.2s</strong>
                      <span>{ingles ? "Avg Response" : "Respuesta Prom."}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de beneficios del proceso */}
        <div className={styles.processBenefits}>
          <h3 className={styles.benefitsTitle}>
            {ingles ? "Why Our Process Works" : "Por Qué Funciona Nuestro Proceso"}
          </h3>
          
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🔐</div>
              <h4>{ingles ? "Secure & Verified" : "Seguro y Verificado"}</h4>
              <p>{ingles ? "Government-grade security with citizen verification" : "Seguridad de nivel gubernamental con verificación ciudadana"}</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>📊</div>
              <h4>{ingles ? "Data-Driven" : "Basado en Datos"}</h4>
              <p>{ingles ? "Analytics and insights for better municipal planning" : "Análisis e insights para mejor planificación municipal"}</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>🤝</div>
              <h4>{ingles ? "Collaborative" : "Colaborativo"}</h4>
              <p>{ingles ? "Direct communication between citizens and government" : "Comunicación directa entre ciudadanos y gobierno"}</p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitIcon}>⚡</div>
              <h4>{ingles ? "Fast Response" : "Respuesta Rápida"}</h4>
              <p>{ingles ? "Automated routing to appropriate departments" : "Enrutamiento automático a departamentos apropiados"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion4;