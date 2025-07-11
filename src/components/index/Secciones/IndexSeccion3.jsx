import React from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/indexSeccion3.module.css";

const HomeSeccion3 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;

  const CameraIcon = () => (
    <svg className={styles.iconSvg} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 4h3l2-2h6l2 2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
      <circle cx="12" cy="13" r="4"/>
    </svg>
  );

  const LocationIcon = () => (
    <svg className={styles.iconSvg} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  );

  const NotificationIcon = () => (
    <svg className={styles.iconSvg} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
    </svg>
  );

  const TrackingIcon = () => (
    <svg className={styles.iconSvg} viewBox="0 0 24 24" fill="currentColor">
      <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
    </svg>
  );

  const MapIcon = () => (
    <svg className={styles.iconSvg} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.5,3L20.34,3.03L15,5.1L9,3L3.36,4.9C3.15,4.97 3,5.15 3,5.38V20.5A0.5,0.5 0 0,0 3.5,21L3.66,20.97L9,18.9L15,21L20.64,19.1C20.85,19.03 21,18.85 21,18.62V3.5A0.5,0.5 0 0,0 20.5,3M10,5.47L14,6.87V18.53L10,17.13V5.47M5,6.46L8,5.45V17.15L5,18.31V6.46M19,17.54L16,18.55V6.86L19,5.7V17.54Z"/>
    </svg>
  );

  const HistoryIcon = () => (
    <svg className={styles.iconSvg} viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5,8H12V13L16.28,15.54L17,14.33L13.5,12.25V8M13,3A9,9 0 0,0 4,12H1L4.96,16.03L9,12H6A7,7 0 0,1 13,5A7,7 0 0,1 20,12A7,7 0 0,1 13,19C11.07,19 9.32,18.21 8.06,16.94L6.64,18.36C8.27,20 10.5,21 13,21A9,9 0 0,0 22,12A9,9 0 0,0 13,3"/>
    </svg>
  );

  const ValidationIcon = () => (
    <svg className={styles.iconSvg} viewBox="0 0 24 24" fill="currentColor">
      <path d="M9,20.42L2.79,14.21L5.62,11.38L9,14.77L18.88,4.88L21.71,7.71L9,20.42Z"/>
    </svg>
  );

  const SOSIcon = () => (
    <svg className={styles.iconSvg} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17.5,17.5L16,19L12,15L8,19L6.5,17.5L10.5,13.5L6.5,9.5L8,8L12,12L16,8L17.5,9.5L13.5,13.5L17.5,17.5Z"/>
    </svg>
  );

  const features = [
    {
      icon: <CameraIcon />,
      title: t.caracteristicas.features[0].title,
      description: t.caracteristicas.features[0].description,
      technical: ingles ? "Support for photos, videos, and audio attachments up to 50MB per report" : "Soporte para fotos, videos y audios de hasta 50MB por reporte"
    },
    {
      icon: <LocationIcon />,
      title: t.caracteristicas.features[1].title,
      description: t.caracteristicas.features[1].description,
      technical: ingles ? "GPS accuracy within 3 meters, manual location selection available" : "Precisión GPS de hasta 3 metros, selección manual de ubicación disponible"
    },
    {
      icon: <NotificationIcon />,
      title: t.caracteristicas.features[2].title,
      description: t.caracteristicas.features[2].description,
      technical: ingles ? "Real-time push notifications with delivery confirmation" : "Notificaciones push en tiempo real con confirmación de entrega"
    },
    {
      icon: <TrackingIcon />,
      title: t.caracteristicas.features[3].title,
      description: t.caracteristicas.features[3].description,
      technical: ingles ? "Multi-stage workflow tracking with detailed progress updates" : "Seguimiento de flujo de trabajo multi-etapa con actualizaciones detalladas"
    },
    {
      icon: <MapIcon />,
      title: t.caracteristicas.features[4].title,
      description: t.caracteristicas.features[4].description,
      technical: ingles ? "Interactive heat map showing incident density and resolution rates" : "Mapa de calor interactivo mostrando densidad de incidentes y tasas de resolución"
    },
    {
      icon: <HistoryIcon />,
      title: t.caracteristicas.features[5].title,
      description: t.caracteristicas.features[5].description,
      technical: ingles ? "Complete audit trail with timestamps and status changes" : "Registro de auditoría completo con marcas de tiempo y cambios de estado"
    },
    {
      icon: <ValidationIcon />,
      title: t.caracteristicas.features[6].title,
      description: t.caracteristicas.features[6].description,
      technical: ingles ? "Unique QR codes and reference numbers for each report" : "Códigos QR únicos y números de referencia para cada reporte"
    },
    {
      icon: <SOSIcon />,
      title: t.caracteristicas.features[7].title,
      description: t.caracteristicas.features[7].description,
      technical: ingles ? "Emergency contacts and automatic location sharing with authorities" : "Contactos de emergencia y compartición automática de ubicación con autoridades"
    }
  ];

  return (
    <section id="caracteristicas" className={styles.section}>
      <div className={styles.container}>
        {/* Header mejorado */}
        <div className={styles.header}>
          <div className={styles.headerBadge}>
            <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
            </svg>
            <span>{ingles ? "Advanced Technology Platform" : "Plataforma Tecnológica Avanzada"}</span>
          </div>
          
          <h2 className={styles.title}>{t.caracteristicas.title}</h2>
          <p className={styles.subtitle}>{t.caracteristicas.subtitle}</p>
          
          <div className={styles.headerStats}>
            <div className={styles.statItem}>
              <strong>8</strong>
              <span>{ingles ? "Core Features" : "Funciones Principales"}</span>
            </div>
            <div className={styles.statItem}>
              <strong>24/7</strong>
              <span>{ingles ? "Availability" : "Disponibilidad"}</span>
            </div>
            <div className={styles.statItem}>
              <strong>99.9%</strong>
              <span>{ingles ? "Uptime" : "Tiempo Activo"}</span>
            </div>
          </div>
        </div>

        {/* Grid de características mejorado */}
        <div className={styles.featuresGrid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                {feature.icon}
              </div>
              <div className={styles.featureContent}>
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDescription}>{feature.description}</p>
                <div className={styles.technicalSpec}>
                  <span className={styles.techLabel}>
                    {ingles ? "Technical Details:" : "Detalles Técnicos:"}
                  </span>
                  <span className={styles.techText}>{feature.technical}</span>
                </div>
              </div>
              <div className={styles.featureAccent}></div>
            </div>
          ))}
        </div>

        {/* Sección de imagen y especificaciones técnicas */}
        <div className={styles.technicalSection}>
          <div className={styles.technicalContent}>
            <div className={styles.technicalText}>
              <h3 className={styles.technicalTitle}>
                {ingles ? "Enterprise-Grade Infrastructure" : "Infraestructura de Nivel Empresarial"}
              </h3>
              <p className={styles.technicalDescription}>
                {ingles 
                  ? "Our platform is built on cutting-edge technology with enterprise-grade security, scalability, and reliability. Designed specifically for municipal governments to handle high volumes of citizen interactions."
                  : "Nuestra plataforma está construida sobre tecnología de vanguardia con seguridad, escalabilidad y confiabilidad de nivel empresarial. Diseñada específicamente para gobiernos municipales para manejar grandes volúmenes de interacciones ciudadanas."
                }
              </p>
              
              <div className={styles.specsList}>
                <h4>{ingles ? "Technical Specifications" : "Especificaciones Técnicas"}</h4>
                <ul>
                  <li>
                    <span className={styles.specIcon}>🔐</span>
                    {ingles ? "AES-256 end-to-end encryption" : "Encriptación de extremo a extremo AES-256"}
                  </li>
                  <li>
                    <span className={styles.specIcon}>☁️</span>
                    {ingles ? "Cloud-native architecture with 99.9% uptime" : "Arquitectura nativa en la nube con 99.9% de tiempo activo"}
                  </li>
                  <li>
                    <span className={styles.specIcon}>📊</span>
                    {ingles ? "Real-time analytics and reporting dashboard" : "Dashboard de análisis y reportes en tiempo real"}
                  </li>
                  <li>
                    <span className={styles.specIcon}>🔄</span>
                    {ingles ? "Automated workflow management system" : "Sistema automatizado de gestión de flujos de trabajo"}
                  </li>
                  <li>
                    <span className={styles.specIcon}>📱</span>
                    {ingles ? "Cross-platform mobile and web compatibility" : "Compatibilidad multiplataforma móvil y web"}
                  </li>
                  <li>
                    <span className={styles.specIcon}>🌐</span>
                    {ingles ? "Multi-language support with real-time translation" : "Soporte multiidioma con traducción en tiempo real"}
                  </li>
                </ul>
              </div>
            </div>

            <div className={styles.technicalImage}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.placeholderContent}>
                  <svg className={styles.placeholderIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13,9H18.5L13,3.5V9M6,2H14L20,8V20A2,2 0 0,1 18,22H6C4.89,22 4,21.1 4,20V4C4,2.89 4.89,2 6,2M15,18V16H6V18H15M18,14V12H6V14H18Z"/>
                  </svg>
                  <h4>{ingles ? "System Architecture Diagram" : "Diagrama de Arquitectura del Sistema"}</h4>
                  <p>{ingles ? "Image placeholder - Technical infrastructure overview" : "Placeholder de imagen - Resumen de infraestructura técnica"}</p>
                </div>
              </div>

              {/* Overlay con métricas */}
              <div className={styles.imageOverlay}>
                <div className={styles.metricCard}>
                  <div className={styles.metricValue}>2.5s</div>
                  <div className={styles.metricLabel}>
                    {ingles ? "Avg Response Time" : "Tiempo Promedio"}
                  </div>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricValue}>15TB</div>
                  <div className={styles.metricLabel}>
                    {ingles ? "Data Processed" : "Datos Procesados"}
                  </div>
                </div>
                <div className={styles.metricCard}>
                  <div className={styles.metricValue}>256</div>
                  <div className={styles.metricLabel}>
                    {ingles ? "Bit Encryption" : "Encriptación Bit"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de integraciones */}
        <div className={styles.integrationsSection}>
          <h3 className={styles.integrationsTitle}>
            {ingles ? "Government System Integrations" : "Integraciones con Sistemas Gubernamentales"}
          </h3>
          <p className={styles.integrationsDesc}>
            {ingles 
              ? "Seamlessly integrates with existing municipal systems and databases for unified operations."
              : "Se integra perfectamente con sistemas y bases de datos municipales existentes para operaciones unificadas."
            }
          </p>
          
          <div className={styles.integrationsGrid}>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🏛️</div>
              <span>{ingles ? "Municipal ERP" : "ERP Municipal"}</span>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>📋</div>
              <span>{ingles ? "Work Order System" : "Sistema de Órdenes"}</span>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>🗺️</div>
              <span>{ingles ? "GIS Mapping" : "Mapeo GIS"}</span>
            </div>
            <div className={styles.integrationCard}>
              <div className={styles.integrationIcon}>📊</div>
              <span>{ingles ? "Analytics Platform" : "Plataforma Análisis"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion3;