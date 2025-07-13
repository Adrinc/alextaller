import React, { useEffect, useState } from "react";
import { isEnglish, colors, appConfig } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import { translations } from '../../../data/translations';
import styles from "../css/indexSeccion1.module.css";
import DemoApp from '../components/DemoApp';

const HomeSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translations.en : translations.es;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [anim, setAnim] = useState("fadeInUp");
  const [stats, setStats] = useState({
    reports: 0,
    satisfaction: 0,
    responseTime: 0,
    coverage: 0
  });

  const heroSlides = [
    {
      title: t.hero.slides.slide1.title,
      subtitle: t.hero.slides.slide1.subtitle,
      icon: "👁️",
      bgGradient: "from-blue-600 to-green-500"
    },
    {
      title: t.hero.slides.slide2.title,
      subtitle: t.hero.slides.slide2.subtitle,
      icon: "📱",
      bgGradient: "from-green-500 to-blue-600"
    },
    {
      title: t.hero.slides.slide3.title,
      subtitle: t.hero.slides.slide3.subtitle,
      icon: "🆘",
      bgGradient: "from-red-500 to-yellow-500"
    }
  ];

  // Animación de contadores para métricas
  useEffect(() => {
    const timer = setTimeout(() => {
      setStats({
        reports: 15420,
        satisfaction: 94,
        responseTime: 2.5,
        coverage: 98
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnim("fadeOutUp");
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setAnim("fadeInUp");
      }, 500);
    }, 5000); // Cambiado a 5 segundos para mayor profesionalismo

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const GooglePlayIcon = () => (
    <svg className={styles.storeIcon} viewBox="0 0 24 24" fill="currentColor">
      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
    </svg>
  );

  const AppStoreIcon = () => (
    <svg className={styles.storeIcon} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
    </svg>
  );

  const SecurityShield = () => (
    <svg className={styles.securityIcon} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"/>
    </svg>
  );

  const GovernmentIcon = () => (
    <svg className={styles.governmentIcon} viewBox="0 0 24 24" fill="currentColor">
      <path d="M2,21H22V19H20V7.5L12,2L4,7.5V19H2V21M16,13H18V17H16V13M10,13H12V17H10V13M6,13H8V17H6V13M14,13V17H16V13H14M12,13V17H10V13H12M8,13V17H6V13H8Z"/>
    </svg>
  );

  return (
    <section id="hero" className={styles.heroSection}>
      {/* Video de fondo */}
      <div className={styles.videoBackground}>
        <video autoPlay muted loop playsInline>
          <source src="/videos/ojociudadano.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      {/* Partículas flotantes sutiles */}
{/*       <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {i % 4 === 0 ? '💡' : i % 4 === 1 ? '🏛️' : i % 4 === 2 ? '📊' : '🔒'}
          </div>
        ))}
      </div> */}

      {/* Contenido principal */}
      <div className={styles.heroContainer}>
        <div className={`${styles.heroContent} ${styles[anim]}`}>
          {/* Badge gubernamental */}
          <div className={styles.governmentBadge}>
            <GovernmentIcon />
            <span>{ingles ? "Official Government Solution" : "Solución Oficial del Gobierno"}</span>
          </div>

          <div className={styles.heroIcon}>
            {heroSlides[currentSlide].icon}
          </div>
          
          <h1 className={styles.heroTitle}>
            {heroSlides[currentSlide].title}
          </h1>
          
          <p className={styles.heroSubtitle}>
            {heroSlides[currentSlide].subtitle}
          </p>
          
          <p className={styles.heroDescription}>
            {t.hero.description}
          </p>

          {/* Métricas de confianza */}
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{stats.reports.toLocaleString()}+</div>
              <div className={styles.statLabel}>
                {ingles ? "Reports Processed" : "Reportes Procesados"}
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{stats.satisfaction}%</div>
              <div className={styles.statLabel}>
                {ingles ? "Citizen Satisfaction" : "Satisfacción Ciudadana"}
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{stats.responseTime}h</div>
              <div className={styles.statLabel}>
                {ingles ? "Avg Response Time" : "Tiempo Promedio"}
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{stats.coverage}%</div>
              <div className={styles.statLabel}>
                {ingles ? "City Coverage" : "Cobertura Ciudad"}
              </div>
            </div>
          </div>

          {/* Certificaciones/Sellos de seguridad */}
          <div className={styles.certifications}>
            <div className={styles.certItem}>
              <SecurityShield />
              <span>{ingles ? "Secure & Encrypted" : "Seguro y Encriptado"}</span>
            </div>
            <div className={styles.certItem}>
              <GovernmentIcon />
              <span>{ingles ? "Government Certified" : "Certificado Gubernamental"}</span>
            </div>
          </div>

          {/* Botones de descarga mejorados */}
          <div className={styles.downloadButtons}>
            <a 
              href={appConfig.playStoreUrl} 
              className={styles.downloadBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GooglePlayIcon />
              <div className={styles.storeText}>
                <span className={styles.storeLabel}>
                  {ingles ? "Get it on" : "Descárgala en"}
                </span>
                <span className={styles.storeName}>Google Play</span>
              </div>
              <div className={styles.newBadge}>
                {ingles ? "Free" : "Gratis"}
              </div>
            </a>
            <a 
              href={appConfig.appStoreUrl} 
              className={styles.downloadBtnSecondary}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AppStoreIcon />
              <div className={styles.storeText}>
                <span className={styles.storeLabel}>
                  {ingles ? "Download on the" : "Descargar en"}
                </span>
                <span className={styles.storeName}>App Store</span>
              </div>
              <div className={styles.newBadge}>
                {ingles ? "Free" : "Gratis"}
              </div>
            </a>
          </div>

          {/* Call to action profesional */}
          <div className={styles.ctaContainer}>
            <button className={styles.primaryCta}>
              {ingles ? "Request Demo for Your Municipality" : "Solicitar Demo para tu Municipio"}
            </button>
            <button className={styles.secondaryBtn}>
              {t.hero.ctaSecondary}
            </button>
          </div>
        </div>

        {/* Demo interactiva del teléfono mejorada */}
        <div className={styles.demoContainer}>
          <div className={styles.demoHeader}>
            <h3>{ingles ? "See it in action" : "Míralo en acción"}</h3>
            <p>{ingles ? "Interactive demo of the citizen app" : "Demo interactiva de la app ciudadana"}</p>
          </div>
          <DemoApp />
          <div className={styles.demoFeatures}>
            <div className={styles.demoFeature}>
              <span className={styles.featureIcon}>📱</span>
              <span>{ingles ? "Real-time reporting" : "Reportes en tiempo real"}</span>
            </div>
            <div className={styles.demoFeature}>
              <span className={styles.featureIcon}>🔔</span>
              <span>{ingles ? "Instant notifications" : "Notificaciones instantáneas"}</span>
            </div>
            <div className={styles.demoFeature}>
              <span className={styles.featureIcon}>📊</span>
              <span>{ingles ? "Progress tracking" : "Seguimiento de progreso"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Indicadores de slides mejorados */}
      <div className={styles.slideIndicators}>
        {heroSlides.map((slide, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${
              index === currentSlide ? styles.active : ''
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`${ingles ? 'Slide' : 'Diapositiva'} ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator profesional */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>
          {t.hero.scrollText}
        </span>
        <div className={styles.scrollArrow}>⬇️</div>
      </div>
    </section>
  );
};

export default HomeSeccion1;