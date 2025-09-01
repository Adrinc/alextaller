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

  // Textos del carrusel épicos para Alex Taller Mecánico
  const carouselTexts = [
    {
      badge: ingles ? "SINCE 1993" : "DESDE 1993",
      title: ingles ? "Your Car in the Best Hands" : "Tu Auto en las Mejores Manos",
      subtitle: ingles ? "Over 30 years of automotive excellence in Tijuana" : "Más de 30 años de excelencia automotriz en Tijuana",
      description: ingles ? "Trusted by thousands of families for quality service and fair prices" : "Confianza de miles de familias por servicio de calidad y precios justos",
      icon: "🏆"
    },
    {
      badge: ingles ? "TECHNOLOGY" : "TECNOLOGÍA",
      title: ingles ? "Advanced Computerized Diagnostics" : "Diagnósticos Computarizados Avanzados", 
      subtitle: ingles ? "State-of-the-art equipment for precise detection" : "Equipos de última generación para detección precisa",
      description: ingles ? "Professional scanners and modern tools for accurate diagnosis" : "Escáneres profesionales y herramientas modernas para diagnóstico certero",
      icon: "💻"
    },
    {
      badge: ingles ? "CERTIFIED" : "CERTIFICADOS",
      title: ingles ? "Expert ASE Certified Technicians" : "Técnicos Expertos Certificados ASE",
      subtitle: ingles ? "Professional team with proven experience" : "Equipo profesional con experiencia comprobada",
      description: ingles ? "Continuous training and specialization in modern vehicles" : "Capacitación continua y especialización en vehículos modernos",
      icon: "👨‍🔧"
    },
    {
      badge: ingles ? "GUARANTEE" : "GARANTÍA",
      title: ingles ? "Quality and Warranty Included" : "Calidad y Garantía Incluida",
      subtitle: ingles ? "All our services backed by written warranty" : "Todos nuestros servicios respaldados con garantía por escrito",
      description: ingles ? "Peace of mind with every service and repair performed" : "Tranquilidad total con cada servicio y reparación realizada",
      icon: "🛡️"
    }
  ];

  // Crear partículas flotantes
  useEffect(() => {
    const createParticles = () => {
      const newParticles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2
      }));
      setParticles(newParticles);
    };

    createParticles();
    setIsVisible(true);
    
    // Carrusel automático cada 5 segundos
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % carouselTexts.length);
    }, 5000);

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
      {/* Partículas flotantes */}
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
              animationDuration: `${particle.speed * 3}s`,
              animationDelay: `${particle.id * 0.1}s`
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
        <div className={styles.content}>
          {/* Logo flotante del taller */}
          <div className={`${styles.logoSection} ${isVisible ? styles.fadeInDown : ''}`}>
            <div className={styles.logoContainer}>
              <div className={styles.logoIcon}>🔧</div>
              <h2 className={styles.logoText}>Alex Taller Mecánico</h2>
            </div>
          </div>

          {/* Contenido principal con carrusel épico */}
          <div className={`${styles.mainContent} ${isVisible ? styles.fadeInUp : ''}`}>
            
            {/* Carrusel de textos épico */}
            <div className={styles.textCarousel}>
              {carouselTexts.map((text, index) => (
                <div
                  key={index}
                  className={`${styles.carouselItem} ${
                    index === currentTextIndex ? styles.active : ''
                  }`}
                >
                  {/* Badge épico */}
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
                  <p className={styles.description}>
                    {text.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Botones CTA épicos */}
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

            {/* Características destacadas */}
            <div className={styles.featuresRow}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>⚡</div>
                <span>{ingles ? "Same Day Service" : "Servicio el Mismo Día"}</span>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>💯</div>
                <span>{ingles ? "Money Back Guarantee" : "Garantía Total"}</span>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>📱</div>
                <span>{ingles ? "Real-time Updates" : "Actualizaciones en Vivo"}</span>
              </div>
            </div>
          </div>

          {/* Estadísticas épicas */}
          <div className={`${styles.statsContainer} ${isVisible ? styles.slideInRight : ''}`}>
            <div className={styles.statsGrid}>
              <div className={styles.stat}>
                <div className={styles.statIcon}>🏆</div>
                <div className={styles.statNumber}>30+</div>
                <div className={styles.statLabel}>
                  {ingles ? "Years Experience" : "Años de Experiencia"}
                </div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statIcon}>😊</div>
                <div className={styles.statNumber}>5000+</div>
                <div className={styles.statLabel}>
                  {ingles ? "Happy Customers" : "Clientes Felices"}
                </div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statIcon}>⭐</div>
                <div className={styles.statNumber}>4.9</div>
                <div className={styles.statLabel}>
                  {ingles ? "Rating Google" : "Rating Google"}
                </div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statIcon}>🔧</div>
                <div className={styles.statNumber}>24/7</div>
                <div className={styles.statLabel}>
                  {ingles ? "Emergency Service" : "Servicio de Emergencia"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicadores del carrusel con iconos */}
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

        {/* Información de contacto flotante */}
        <div className={styles.contactFloat}>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>📞</div>
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>
                {ingles ? "Call us now" : "Llámanos ahora"}
              </span>
              <span className={styles.contactValue}>664 630 4093</span>
            </div>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>📍</div>
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>
                {ingles ? "Visit us" : "Visítanos"}
              </span>
              <span className={styles.contactValue}>Salvador Alvarado, Tijuana</span>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll épico */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <span>{ingles ? "Discover our services" : "Descubre nuestros servicios"}</span>
      </div>
    </section>
  );
};

export default IndexSeccion1;