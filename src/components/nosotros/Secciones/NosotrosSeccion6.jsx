// NosotrosSeccion6.jsx - CTA Final con imagen del equipo
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/NosotrosSeccion6.module.css';
import { isEnglish } from '../../../data/variables.js';
import { translationsNosotros } from '../../../data/translationsNosotros.js';

const NosotrosSeccion6 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsNosotros.en : translationsNosotros.es;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (rect) {
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100
      });
    }
  };

  const handleContactClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/contacto';
    }
  };

  const handleServicesClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = '/servicios';
    }
  };

  return (
    <section 
      id="cta-final"
      ref={sectionRef}
      className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}
      onMouseMove={handleMouseMove}
    >
      {/* Background Team Photo */}
      <div className={styles.backgroundContainer}>
        <div className={styles.teamPhoto}></div>
        <div className={styles.overlay}></div>
        <div 
          className={styles.parallaxOverlay}
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`
          }}
        ></div>
      </div>

      {/* Content */}
      <div className={styles.container}>
        <div className={styles.content}>
          {/* Pre-title */}
          <div className={styles.preTitle}>
            <span className={styles.preTitleText}>¿Listo para confiar en los expertos?</span>
          </div>

          {/* Main Title */}
          <h2 className={styles.title}>
            Tu auto merece el mejor cuidado
          </h2>

          {/* Description */}
          <p className={styles.description}>
            Déjanos demostrar por qué somos la primera opción de las familias tijuanenses. 
            Agenda tu cita hoy y experimenta la diferencia de un servicio profesional y confiable.
          </p>

          {/* CTA Buttons */}
          <div className={styles.ctaButtons}>
            <button 
              className={styles.primaryButton}
              onClick={handleContactClick}
            >
              <span className={styles.buttonIcon}>📞</span>
              <span className={styles.buttonText}>Agendar Cita</span>
              <div className={styles.buttonGlow}></div>
            </button>
            
            <button 
              className={styles.secondaryButton}
              onClick={handleServicesClick}
            >
              <span className={styles.buttonIcon}>🔧</span>
              <span className={styles.buttonText}>Ver Servicios</span>
            </button>
          </div>

          {/* Contact Info Quick */}
          <div className={styles.quickContact}>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📱</span>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>Emergencias 24/7</span>
                <span className={styles.contactValue}>+52 664 123 4567</span>
              </div>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>Ubicación</span>
                <span className={styles.contactValue}>Tijuana, Baja California</span>
              </div>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>⏰</span>
              <div className={styles.contactInfo}>
                <span className={styles.contactLabel}>Horarios</span>
                <span className={styles.contactValue}>Lun - Sáb: 8:00 - 18:00</span>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className={styles.trustIndicators}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✅</span>
              <span className={styles.trustText}>Garantía en todos los trabajos</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>🏆</span>
              <span className={styles.trustText}>8+ años de experiencia</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>🚗</span>
              <span className={styles.trustText}>Especialistas en todas las marcas</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>💯</span>
              <span className={styles.trustText}>15,000+ clientes satisfechos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingGear1}>⚙️</div>
        <div className={styles.floatingGear2}>🔧</div>
        <div className={styles.floatingGear3}>⚙️</div>
        <div className={styles.floatingWrench}>🔧</div>
        <div className={styles.floatingBolt}>🔩</div>
      </div>

      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.glow1}></div>
        <div className={styles.glow2}></div>
        <div className={styles.glow3}></div>
        <div className={styles.sparkles}>
          {[...Array(10)].map((_, i) => (
            <div 
              key={i} 
              className={styles.sparkle}
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NosotrosSeccion6;
