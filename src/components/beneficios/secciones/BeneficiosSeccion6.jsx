// BeneficiosSeccion6.jsx - CTA final y contacto
import React, { useEffect, useState, useRef } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/BeneficiosSeccion6.module.css';
import { isEnglish } from '../../../data/variables';
import { translationsBeneficios } from '../../../data/translationsBeneficios.js';

const BeneficiosSeccion6 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const sectionRef = useRef(null);
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsBeneficios.en : translationsBeneficios.es;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Animate elements sequentially
            setTimeout(() => setAnimatedElements(prev => new Set([...prev, 'title'])), 200);
            setTimeout(() => setAnimatedElements(prev => new Set([...prev, 'subtitle'])), 400);
            setTimeout(() => setAnimatedElements(prev => new Set([...prev, 'buttons'])), 600);
            setTimeout(() => setAnimatedElements(prev => new Set([...prev, 'contact'])), 800);
            setTimeout(() => setAnimatedElements(prev => new Set([...prev, 'features'])), 1000);
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

  const handleWhatsApp = () => {
    const phone = "525555555555"; // Replace with actual phone number
    const message = encodeURIComponent("Hola! Me interesa agendar una cita en Taller Alex. ¿Podrían proporcionarme más información?");
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+525555555555', '_self'); // Replace with actual phone number
  };

  const handleEmail = () => {
    const email = "contacto@talleralex.com"; // Replace with actual email
    const subject = encodeURIComponent("Solicitud de Cita - Taller Alex");
    const body = encodeURIComponent("Hola,\n\nMe interesa agendar una cita para mi vehículo. ¿Podrían contactarme para coordinar?\n\nGracias.");
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, '_self');
  };

  return (
    <section className={styles.ctaSection} ref={sectionRef}>
      {/* Background overlay with gradient */}
      <div className={styles.backgroundOverlay}></div>
      
      {/* Animated background particles */}
      <div className={styles.particles}>
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>

      <div className={styles.container}>
        {/* Main CTA Content */}
        <div className={styles.ctaContent}>
          <h2 className={`${styles.ctaTitle} ${
            animatedElements.has('title') ? styles.visible : ''
          }`}>
            {t.cta.title}
          </h2>
          
          <p className={`${styles.ctaSubtitle} ${
            animatedElements.has('subtitle') ? styles.visible : ''
          }`}>
            {t.cta.subtitle}
          </p>

          {/* Primary CTA Buttons */}
          <div className={`${styles.ctaButtons} ${
            animatedElements.has('buttons') ? styles.visible : ''
          }`}>
            <button className={styles.primaryBtn} onClick={handleWhatsApp}>
              <div className={styles.btnIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className={styles.btnText}>{t.cta.button}</span>
              <div className={styles.btnArrow}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>

          {/* Contact Options */}
          <div className={`${styles.contactOptions} ${
            animatedElements.has('contact') ? styles.visible : ''
          }`}>
            <p className={styles.contactLabel}>O contáctanos directamente:</p>
            <div className={styles.contactButtons}>
              <button className={styles.contactBtn} onClick={handleCall}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>{t.cta.contact.call}</span>
              </button>

              <button className={styles.contactBtn} onClick={handleWhatsApp}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>{t.cta.contact.whatsapp}</span>
              </button>

              <button className={styles.contactBtn} onClick={handleEmail}>
                <div className={styles.contactIcon}>
                  <svg viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span>{t.cta.contact.email}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Trust Features */}
        <div className={`${styles.trustFeatures} ${
          animatedElements.has('features') ? styles.visible : ''
        }`}>
          <h3 className={styles.featuresTitle}>
            ¿Por qué elegir Taller Alex?
          </h3>
          <div className={styles.featuresGrid}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                  <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h4>Puntualidad Garantizada</h4>
                <p>Respetamos tu tiempo y cumplimos los plazos acordados</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h4>Garantía Total</h4>
                <p>Hasta 6 meses de garantía en reparaciones mayores</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h4>Precios Transparentes</h4>
                <p>Cotización clara sin costos ocultos ni sorpresas</p>
              </div>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={styles.featureContent}>
                <h4>30 Años de Experiencia</h4>
                <p>Trayectoria comprobada con miles de clientes satisfechos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Final Stats */}
        <div className={`${styles.finalStats} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>4.9/5</span>
            <span className={styles.statLabel}>Satisfacción</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>12,500+</span>
            <span className={styles.statLabel}>Autos Atendidos</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>30+</span>
            <span className={styles.statLabel}>Años</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>600+</span>
            <span className={styles.statLabel}>Clientes/Mes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSeccion6;
