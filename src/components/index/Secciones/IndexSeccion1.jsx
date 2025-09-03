// IndexSeccion1.jsx - Hero Section ÉPICO con video de fondo para Alex Taller Mecánico
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import styles from '../css/indexSeccion1.module.css';

const IndexSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en : translationsIndex.es;
  const [isVisible, setIsVisible] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [particles, setParticles] = useState([]);
  const videoRef = useRef(null);

  // Textos del carrusel simplificados y más impactantes
  const carouselTexts = [
    {
      badge: ingles ? "TRUSTED SINCE 1993" : "CONFIANZA DESDE 1993",
      title: ingles ? "Your Car Deserves the Best" : "Tu Auto Merece lo Mejor",
      subtitle: ingles ? "8+ years of automotive excellence in Tijuana" : "8+ años de excelencia automotriz en Tijuana",
      icon: "🏆"
    },
    {
      badge: ingles ? "ADVANCED TECHNOLOGY" : "TECNOLOGÍA AVANZADA",
      title: ingles ? "Precise Computerized Diagnostics" : "Diagnósticos Computarizados Precisos", 
      subtitle: ingles ? "State-of-the-art equipment for accurate results" : "Equipos de última generación para resultados exactos",
      icon: "⚡"
    },
    {
      badge: ingles ? "CERTIFIED EXPERTS" : "EXPERTOS CERTIFICADOS",
      title: ingles ? "ASE Certified Technicians" : "Técnicos Certificados ASE",
      subtitle: ingles ? "Professional team with proven experience" : "Equipo profesional con experiencia comprobada",
      icon: "👨‍🔧"
    },
    {
      badge: ingles ? "QUALITY GUARANTEE" : "GARANTÍA DE CALIDAD",
      title: ingles ? "100% Satisfaction Guaranteed" : "100% Satisfacción Garantizada",
      subtitle: ingles ? "All services backed by our written warranty" : "Todos los servicios respaldados con garantía escrita",
      icon: "✅"
    }
  ];

  // Crear partículas flotantes (reducidas)
  useEffect(() => {
    const createParticles = () => {
      const newParticles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1
      }));
      setParticles(newParticles);
    };

    createParticles();
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

  const handleVideoLoad = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section className={styles.hero} id="hero">
      {/* Partículas flotantes sutiles */}
      <div className={styles.particlesContainer}>
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={styles.particle}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: particle.opacity,
              animationDuration: `${particle.speed * 4}s`,
              animationDelay: `${particle.id * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Video de fondo */}
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          className={`${styles.backgroundVideo} ${isVideoLoaded ? styles.loaded : ''}`}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-car-repair-shop-with-various-vehicles-1115-large.mp4" type="video/mp4" />
          <source src="/videos/taller.mp4" type="video/mp4" />
        </video>
        <div className={styles.videoOverlay}></div>
      </div>

      <div className={styles.container}>
        
       
        {/* Contenido principal centrado */}
        <div className={styles.content}>
          <div className={`${styles.mainContent} ${isVisible ? styles.fadeInUp : ''}`}>
            
            {/* Carrusel de textos simplificado */}
            <div className={styles.textCarousel}>
              {carouselTexts.map((text, index) => (
                <div
                  key={index}
                  className={`${styles.carouselItem} ${
                    index === currentTextIndex ? styles.active : ''
                  }`}
                >
                  {/* Badge */}
                  <div className={styles.heroBadge}>
                    <span className={styles.badgeIcon}>{text.icon}</span>
                    <span className={styles.badgeText}>{text.badge}</span>
                  </div>

                  <h1 className={styles.title}>
                    {text.title}
                  </h1>
                  <p className={styles.subtitle}>
                    {text.subtitle}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Botones CTA */}
            <div className={styles.ctaButtons}>
              <button 
                className={styles.ctaPrimary}
                onClick={scrollToAppointments}
              >
                <span className={styles.buttonText}>{t.hero.ctaPrimary}</span>
                <div className={styles.buttonIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className={styles.buttonShine}></div>
              </button>
              
              <button 
                className={styles.ctaSecondary}
                onClick={scrollToServices}
              >
                <span className={styles.buttonText}>{t.hero.ctaSecondary}</span>
                <div className={styles.buttonIcon}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Estadísticas simplificadas */}
          <div className={`${styles.statsContainer} ${isVisible ? styles.slideInRight : ''}`}>
            <div className={styles.statsGrid}>
              <div className={styles.stat}>
                <div className={styles.statIcon}>🏆</div>
                <div className={styles.statNumber}>8+</div>
                <div className={styles.statLabel}>
                  {ingles ? "Years" : "Años"}
                </div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statIcon}>😊</div>
                <div className={styles.statNumber}>5K+</div>
                <div className={styles.statLabel}>
                  {ingles ? "Customers" : "Clientes"}
                </div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statIcon}>⭐</div>
                <div className={styles.statNumber}>4.9</div>
                <div className={styles.statLabel}>
                  {ingles ? "Rating" : "Rating"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores del carrusel */}
        <div className={styles.carouselIndicators}>
          {carouselTexts.map((text, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${
                index === currentTextIndex ? styles.active : ''
              }`}
              onClick={() => setCurrentTextIndex(index)}
              title={text.badge}
            >
              <span className={styles.indicatorIcon}>{text.icon}</span>
            </button>
          ))}
        </div>



        {/* Indicador de scroll */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollMouse}>
            <div className={styles.scrollWheel}></div>
          </div>
          <span>{ingles ? "Explore" : "Explora"}</span>
        </div>
      </div>
    </section>
  );
};

export default IndexSeccion1;