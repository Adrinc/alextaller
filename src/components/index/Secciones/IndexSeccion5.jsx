import React, { useState } from "react";
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/indexSeccion5.module.css";

const HomeSeccion5 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryHover = (index) => {
    setSelectedCategory(index);
  };

  const handleCategoryLeave = () => {
    setSelectedCategory(null);
  };

  return (
    <section id="categorias" className={styles.section}>
      <div className={styles.container}>
        {/* Header institucional */}
        <div className={styles.header}>
          <div className={styles.platformBadge}>
            <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21C5,22.11 5.89,23 7,23H17C18.11,23 19,22.11 19,21V3C19,1.89 18.11,1 17,1Z"/>
            </svg>
            <span>{ingles ? "Mobile Platform Features" : "Características de la Plataforma Móvil"}</span>
          </div>

          <h2 className={styles.title}>
            {ingles 
              ? "Comprehensive Municipal Issue Reporting System" 
              : "Sistema Integral de Reporte de Incidencias Municipales"
            }
          </h2>
          <p className={styles.subtitle}>
            {ingles 
              ? "Our mobile application provides citizens with specialized tools to report municipal issues across multiple categories, ensuring efficient communication with local government departments in Ensenada, Baja California."
              : "Nuestra aplicación móvil proporciona a los ciudadanos herramientas especializadas para reportar incidencias municipales en múltiples categorías, asegurando comunicación eficiente con los departamentos de gobierno local en Ensenada, Baja California."
            }
          </p>

          {/* Indicadores de la plataforma */}
          <div className={styles.platformIndicators}>
            <div className={styles.indicator}>
              <svg className={styles.indicatorIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.41,10.09L6,11.5L11,16.5Z"/>
              </svg>
              <div className={styles.indicatorText}>
                <strong>{ingles ? "Citizen App" : "App Ciudadana"}</strong>
                <span>{ingles ? "iOS & Android" : "iOS y Android"}</span>
              </div>
            </div>
            
            <div className={styles.indicator}>
              <svg className={styles.indicatorIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
              </svg>
              <div className={styles.indicatorText}>
                <strong>{ingles ? "Admin Dashboard" : "Panel Administrativo"}</strong>
                <span>{ingles ? "Web Platform" : "Plataforma Web"}</span>
              </div>
            </div>
            
            <div className={styles.indicator}>
              <svg className={styles.indicatorIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
              </svg>
              <div className={styles.indicatorText}>
                <strong>{ingles ? "Real-time Tracking" : "Seguimiento en Tiempo Real"}</strong>
                <span>{ingles ? "GPS Integration" : "Integración GPS"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Grid de categorías mejorado */}
        <div className={styles.categoriesSection}>
          <div className={styles.categoriesHeader}>
            <h3 className={styles.categoriesTitle}>
              {ingles ? "Municipal Issue Categories" : "Categorías de Incidencias Municipales"}
            </h3>
            <p className={styles.categoriesDescription}>
              {ingles 
                ? "Citizens can report issues across specialized categories, each with customized forms and priority levels for optimal municipal response."
                : "Los ciudadanos pueden reportar incidencias en categorías especializadas, cada una con formularios personalizados y niveles de prioridad para una respuesta municipal óptima."
              }
            </p>
          </div>

          <div className={styles.categoriesGrid}>
            {t.categorias.items.map((category, index) => (
              <div 
                key={index} 
                className={`${styles.categoryCard} ${selectedCategory === index ? styles.active : ''}`}
                onMouseEnter={() => handleCategoryHover(index)}
                onMouseLeave={handleCategoryLeave}
              >
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIcon}>
                    {category.icon}
                  </div>
                  <div className={styles.categoryBadge}>
                    <span className={styles.categoryCode}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                
                <div className={styles.categoryContent}>
                  <h4 className={styles.categoryTitle}>{category.title}</h4>
                  <p className={styles.categoryDescription}>{category.description}</p>
                  
                  <div className={styles.categoryFeatures}>
                    <div className={styles.feature}>
                      <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9,11H15L13,9L15,7H9V9L11,11L9,13V11M7,9V7H5V9H7M7,13V11H5V13H7M7,17V15H5V17H7M19,7V9H17V7H19M19,11V13H17V11H19M19,15V17H17V15H19Z"/>
                      </svg>
                      <span>{ingles ? "Custom forms" : "Formularios personalizados"}</span>
                    </div>
                    <div className={styles.feature}>
                      <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
                      </svg>
                      <span>{ingles ? "GPS location" : "Ubicación GPS"}</span>
                    </div>
                    <div className={styles.feature}>
                      <svg className={styles.featureIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z"/>
                      </svg>
                      <span>{ingles ? "Priority levels" : "Niveles de prioridad"}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.categoryFooter}>
                  <div className={styles.departmentTag}>
                    <svg className={styles.departmentIcon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25Z"/>
                    </svg>
                    <span>
                      {ingles ? "Municipal Dept." : "Depto. Municipal"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Estadísticas de rendimiento del sistema */}
        <div className={styles.performanceSection}>
          <div className={styles.performanceHeader}>
            <div className={styles.performanceBadge}>
              <svg className={styles.performanceBadgeIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L19.71,9.71L22,12V6H16Z"/>
              </svg>
              <span>{ingles ? "System Performance" : "Rendimiento del Sistema"}</span>
            </div>
            
            <h3 className={styles.performanceTitle}>
              {ingles ? "Municipal Impact Metrics" : "Métricas de Impacto Municipal"}
            </h3>
            <p className={styles.performanceSubtitle}>
              {ingles 
                ? "Real data from municipal implementations demonstrating the platform's effectiveness in improving citizen-government communication."
                : "Datos reales de implementaciones municipales que demuestran la efectividad de la plataforma en mejorar la comunicación ciudadano-gobierno."
              }
            </p>
          </div>

          <div className={styles.performanceGrid}>
            <div className={styles.performanceCard}>
              <div className={styles.performanceIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
              </div>
              <div className={styles.performanceValue}>15,347</div>
              <div className={styles.performanceLabel}>
                {ingles ? "Reports Processed" : "Reportes Procesados"}
              </div>
              <div className={styles.performanceContext}>
                {ingles ? "Last 12 months" : "Últimos 12 meses"}
              </div>
            </div>

            <div className={styles.performanceCard}>
              <div className={styles.performanceIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.41,10.09L6,11.5L11,16.5Z"/>
                </svg>
              </div>
              <div className={styles.performanceValue}>94.2%</div>
              <div className={styles.performanceLabel}>
                {ingles ? "Resolution Rate" : "Tasa de Resolución"}
              </div>
              <div className={styles.performanceContext}>
                {ingles ? "Average completion" : "Completado promedio"}
              </div>
            </div>

            <div className={styles.performanceCard}>
              <div className={styles.performanceIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,7A5,5 0 0,0 7,12A5,5 0 0,0 12,17A5,5 0 0,0 17,12A5,5 0 0,0 12,7Z"/>
                </svg>
              </div>
              <div className={styles.performanceValue}>3.2hrs</div>
              <div className={styles.performanceLabel}>
                {ingles ? "Avg Response Time" : "Tiempo Promedio de Respuesta"}
              </div>
              <div className={styles.performanceContext}>
                {ingles ? "First contact" : "Primer contacto"}
              </div>
            </div>

            <div className={styles.performanceCard}>
              <div className={styles.performanceIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z"/>
                </svg>
              </div>
              <div className={styles.performanceValue}>4.7/5</div>
              <div className={styles.performanceLabel}>
                {ingles ? "Citizen Satisfaction" : "Satisfacción Ciudadana"}
              </div>
              <div className={styles.performanceContext}>
                {ingles ? "User ratings" : "Calificaciones de usuarios"}
              </div>
            </div>
          </div>
        </div>

        {/* Mapa interactivo de demostración */}
        <div className={styles.mapSection}>
          <div className={styles.mapHeader}>
            <h3 className={styles.mapTitle}>
              {ingles ? "Real-time Municipal Dashboard" : "Panel Municipal en Tiempo Real"}
            </h3>
            <p className={styles.mapDescription}>
              {ingles 
                ? "Administrative view showing active reports, department assignments, and geographic distribution of municipal issues across Ensenada."
                : "Vista administrativa mostrando reportes activos, asignaciones departamentales y distribución geográfica de incidencias municipales en Ensenada."
              }
            </p>
          </div>

          <div className={styles.mapContainer}>
            <div className={styles.mapMockup}>
              {/* Pins de demostración con categorías específicas */}
              <div className={styles.mapPin} style={{top: '25%', left: '35%'}} data-category="lighting">
                <div className={styles.pinIcon}>💡</div>
                <div className={styles.pinTooltip}>
                  <strong>{ingles ? "Street Lighting" : "Alumbrado Público"}</strong>
                  <span>{ingles ? "Priority: High" : "Prioridad: Alta"}</span>
                </div>
              </div>
              
              <div className={styles.mapPin} style={{top: '55%', right: '25%'}} data-category="roads">
                <div className={styles.pinIcon}>🛣️</div>
                <div className={styles.pinTooltip}>
                  <strong>{ingles ? "Road Infrastructure" : "Infraestructura Vial"}</strong>
                  <span>{ingles ? "Priority: Medium" : "Prioridad: Media"}</span>
                </div>
              </div>
              
              <div className={styles.mapPin} style={{bottom: '30%', left: '20%'}} data-category="waste">
                <div className={styles.pinIcon}>🗑️</div>
                <div className={styles.pinTooltip}>
                  <strong>{ingles ? "Waste Management" : "Gestión de Residuos"}</strong>
                  <span>{ingles ? "Priority: Low" : "Prioridad: Baja"}</span>
                </div>
              </div>
              
              <div className={styles.mapPin} style={{top: '40%', right: '15%'}} data-category="security">
                <div className={styles.pinIcon}>🚨</div>
                <div className={styles.pinTooltip}>
                  <strong>{ingles ? "Public Safety" : "Seguridad Pública"}</strong>
                  <span>{ingles ? "Priority: Critical" : "Prioridad: Crítica"}</span>
                </div>
              </div>

              {/* Overlay de controles administrativos */}
              <div className={styles.mapControls}>
                <div className={styles.controlPanel}>
                  <div className={styles.controlHeader}>
                    <svg className={styles.controlIcon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z"/>
                    </svg>
                    <span>{ingles ? "Active Reports" : "Reportes Activos"}</span>
                  </div>
                  
                  <div className={styles.controlStats}>
                    <div className={styles.controlStat}>
                      <span className={styles.statNumber}>47</span>
                      <span className={styles.statLabel}>{ingles ? "Today" : "Hoy"}</span>
                    </div>
                    <div className={styles.controlStat}>
                      <span className={styles.statNumber}>12</span>
                      <span className={styles.statLabel}>{ingles ? "Urgent" : "Urgentes"}</span>
                    </div>
                  </div>
                </div>

                <div className={styles.departmentFilters}>
                  <button className={styles.filterButton}>
                    {ingles ? "All Departments" : "Todos los Departamentos"}
                  </button>
                  <button className={styles.filterButton}>
                    {ingles ? "Public Works" : "Obras Públicas"}
                  </button>
                  <button className={styles.filterButton}>
                    {ingles ? "Safety" : "Seguridad"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSeccion5;