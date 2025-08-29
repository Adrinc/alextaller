// IndexSeccion1.jsx - Hero Section con video de fondo y carrusel de textos
import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import styles from '../css/indexSeccion1.module.css';

const IndexSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en : translationsIndex.es;
  const [isVisible, setIsVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Textos del carrusel
  const carouselTexts = [
    {
      title: ingles ? "Your Car in the Best Hands" : "Tu Auto en las Mejores Manos",
      subtitle: ingles ? "Professional automotive service since 2017" : "Servicio automotriz profesional desde 2017"
    },
    {
      title: ingles ? "Advanced Technology" : "Tecnología Avanzada", 
      subtitle: ingles ? "Computer diagnostics and modern equipment" : "Diagnósticos computarizados y equipo moderno"
    },
    {
      title: ingles ? "Certified Technicians" : "Técnicos Certificados",
      subtitle: ingles ? "Expert team with proven experience" : "Equipo experto con experiencia comprobada"
    },
    {
      title: ingles ? "Quality Guarantee" : "Garantía de Calidad",
      subtitle: ingles ? "All our services include warranty" : "Todos nuestros servicios incluyen garantía"
    }
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Carrusel automático cada 4 segundos
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % carouselTexts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAppointments = () => {
    window.location.href = '/citas';
  };

  return (
    <section className={styles.hero} id="hero">
      {/* Video de fondo */}
      <div className={styles.videoContainer}>
        <video
          className={styles.backgroundVideo}
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/ojociudadano.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Contenido principal con carrusel */}
          <div className={`${styles.mainContent} ${isVisible ? styles.fadeInUp : ''}`}>
            
            {/* Carrusel de textos */}
            <div className={styles.textCarousel}>
              {carouselTexts.map((text, index) => (
                <div
                  key={index}
                  className={`${styles.carouselItem} ${
                    index === currentTextIndex ? styles.active : ''
                  }`}
                >
                  <h1 className={styles.title}>
                    {text.title}
                  </h1>
                  <p className={styles.subtitle}>
                    {text.subtitle}
                  </p>
                </div>
              ))}
            </div>

            <p className={styles.description}>
              {t.hero.description}
            </p>
            
            <div className={styles.ctaButtons}>
              <button 
                className={styles.ctaPrimary}
                onClick={scrollToAppointments}
              >
                <span>{t.hero.ctaPrimary}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className={styles.ctaSecondary}
                onClick={scrollToServices}
              >
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>

          {/* Estadísticas */}
          <div className={`${styles.statsContainer} ${isVisible ? styles.slideInRight : ''}`}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>7+</div>
              <div className={styles.statLabel}>
                {ingles ? "Years Experience" : "Años de Experiencia"}
              </div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>2000+</div>
              <div className={styles.statLabel}>
                {ingles ? "Happy Customers" : "Clientes Felices"}
              </div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>95%</div>
              <div className={styles.statLabel}>
                {ingles ? "Satisfaction Rate" : "Satisfacción"}
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores del carrusel */}
        <div className={styles.carouselIndicators}>
          {carouselTexts.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentTextIndex ? styles.active : ''
              }`}
              onClick={() => setCurrentTextIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <span>{ingles ? "Scroll to see more" : "Desliza para ver más"}</span>
      </div>
    </section>
  );
};

export default IndexSeccion1;