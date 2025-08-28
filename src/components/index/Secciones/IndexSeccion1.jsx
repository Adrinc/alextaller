// IndexSeccion1.jsx - Hero Section con video de fondo y mock-up de app
import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import styles from '../css/indexSeccion1.module.css';

const IndexSeccion1 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en : translationsIndex.es;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
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
          {/* Contenido principal */}
          <div className={`${styles.mainContent} ${isVisible ? styles.fadeInUp : ''}`}>
            <h1 className={styles.title}>
              {t.hero.title}
            </h1>
            <p className={styles.subtitle}>
              {t.hero.subtitle}
            </p>
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

          {/* Mock-up de la app */}
          <div className={`${styles.appMockup} ${isVisible ? styles.slideInRight : ''}`}>
            <div className={styles.phone}>
              <div className={styles.phoneContent}>
                <div className={styles.statusBar}>
                  <div className={styles.time}>9:41</div>
                  <div className={styles.battery}>
                    <div className={styles.signal}></div>
                    <div className={styles.wifi}></div>
                    <div className={styles.batteryIcon}></div>
                  </div>
                </div>
                
                <div className={styles.appContent}>
                  <div className={styles.appHeader}>
                    <img src="/favicon.png" alt="Alex Taller" className={styles.appLogo} />
                    <h3 className={styles.appTitle}>Alex Taller</h3>
                  </div>
                  
                  <div className={styles.appFeatures}>
                    <div className={styles.feature}>
                      <div className={styles.featureIcon}>📅</div>
                      <span>Agendar Citas</span>
                    </div>
                    <div className={styles.feature}>
                      <div className={styles.featureIcon}>🔧</div>
                      <span>Estado del Vehículo</span>
                    </div>
                    <div className={styles.feature}>
                      <div className={styles.featureIcon}>🔔</div>
                      <span>Notificaciones</span>
                    </div>
                    <div className={styles.feature}>
                      <div className={styles.featureIcon}>📋</div>
                      <span>Historial</span>
                    </div>
                  </div>
                  
                  <div className={styles.appointmentCard}>
                    <div className={styles.cardHeader}>
                      <h4>Próxima Cita</h4>
                      <span className={styles.status}>Confirmada</span>
                    </div>
                    <div className={styles.cardBody}>
                      <p>Mantenimiento Preventivo</p>
                      <p className={styles.date}>25 Ago, 2025 - 10:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={styles.appInfo}>
              <h3 className={styles.appInfoTitle}>{t.hero.appTitle}</h3>
              <p className={styles.appInfoDescription}>{t.hero.appDescription}</p>
              <div className={styles.storeButtons}>
                <button className={styles.storeButton}>
                  <span>Próximamente</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel}></div>
        </div>
        <span>Desliza para ver más</span>
      </div>
    </section>
  );
};

export default IndexSeccion1;