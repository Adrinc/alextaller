// ServiciosSeccion1.jsx - Hero Section ÉPICO para Alex Taller Mecánico
import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables.js';
import { translationsServicios } from '../../../data/translationsServicios.js';
import styles from './css/ServiciosSeccion1.module.css';

const ServiciosSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsServicios.en : translationsServicios.es;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.heroSection}>
      {/* Fondo con imagen del mecánico trabajando */}
      <div className={styles.heroBackground}>
        <div className={styles.backgroundImage}></div>
        <div className={styles.overlay}></div>
        
        {/* Efectos de partículas */}
        <div className={styles.particleEffects}>
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className={styles.particle}
              style={{
                '--delay': `${i * 0.3}s`,
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`
              }}
            />
          ))}
        </div>
      </div>

      {/* Contenido principal centrado */}
      <div className={styles.heroContent}>
        <div className={styles.container}>
          <div className={`${styles.heroText} ${isVisible ? styles.fadeInUp : ''}`}>
            {/* Título principal */}
            <h1 className={styles.heroTitle}>
              <span className={styles.titleMain}>Servicios</span>
              <span className={styles.titleSub}>Automotrices</span>
            </h1>
            
            {/* Subtítulo */}
            <p className={styles.heroSubtitle}>
              Mantenimiento, reparación y diagnóstico con la mejor tecnología
            </p>
            
            {/* Línea divisoria neumórfica */}
            <div className={styles.dividerLine}>
              <div className={styles.dividerGlow}></div>
            </div>
            
            {/* Descripción adicional */}
            <p className={styles.heroDescription}>
              {ingles 
                ? "Professional automotive service with cutting-edge technology and certified technicians"
                : "Servicio automotriz profesional con tecnología de vanguardia y técnicos certificados"
              }
            </p>

            {/* Estadísticas neumórficas */}
            <div className={styles.statsContainer}>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>30+</div>
                <div className={styles.statLabel}>
                  {ingles ? "Years Experience" : "Años de Experiencia"}
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>5000+</div>
                <div className={styles.statLabel}>
                  {ingles ? "Cars Serviced" : "Autos Atendidos"}
                </div>
              </div>
              <div className={styles.statCard}>
                <div className={styles.statNumber}>99%</div>
                <div className={styles.statLabel}>
                  {ingles ? "Satisfaction" : "Satisfacción"}
                </div>
              </div>
            </div>

            {/* Botones CTA neumórficos */}
            <div className={styles.heroButtons}>
              <button className={styles.primaryButton}>
                <span>{ingles ? "Schedule Service" : "Agendar Servicio"}</span>
                <div className={styles.buttonGlow}></div>
              </button>
              <button className={styles.secondaryButton}>
                <span>{ingles ? "Free Quote" : "Cotización Gratis"}</span>
                <div className={styles.buttonGlow}></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Indicador de scroll */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollArrow}>
          <span>↓</span>
        </div>
        <div className={styles.scrollText}>
          {ingles ? "Explore Services" : "Explorar Servicios"}
        </div>
      </div>
    </section>
  );
};

export default ServiciosSeccion1;
