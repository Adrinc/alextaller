// PromocionesSeccion4.jsx - CTA final épico con urgencia
import React, { useEffect, useState, useRef } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/PromocionesSeccion4.module.css';
import { isEnglish } from '../../../data/variables';
import { translationsPromociones } from '../../../data/translationsPromociones.js';

const PromocionesSeccion4 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateElements, setAnimateElements] = useState(false);
  const sectionRef = useRef(null);
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsPromociones.en : translationsPromociones.es;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            setTimeout(() => setAnimateElements(true), 300);
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
    const phone = "525555555555";
    const message = encodeURIComponent(
      "¡Hola! Quiero aprovechar las promociones exclusivas de Taller Alex. ¿Podrían ayudarme a agendar mi cita?"
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open(`tel:${t.finalCta.phone}`, '_self');
  };

  return (
    <section 
      ref={sectionRef}
      className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}
    >
      {/* Background Image with Overlay */}
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.container}>
        {/* Urgency Badge */}
        <div className={`${styles.urgencyBadge} ${animateElements ? styles.animate : ''}`}>
          <span className={styles.urgencyIcon}>🔥</span>
          {t.finalCta.urgency}
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          <h2 className={`${styles.title} ${animateElements ? styles.animate : ''}`}>
            {t.finalCta.title}
          </h2>

          <p className={`${styles.subtitle} ${animateElements ? styles.animate : ''}`}>
            {t.finalCta.subtitle}
          </p>

          {/* Features Grid */}
          <div className={`${styles.featuresGrid} ${animateElements ? styles.animate : ''}`}>
            {t.finalCta.features.map((feature, index) => (
              <div 
                key={index}
                className={styles.feature}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className={styles.featureIcon}>✓</span>
                {feature}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`${styles.ctaButtons} ${animateElements ? styles.animate : ''}`}>
            <button 
              className={styles.primaryCta}
              onClick={handleWhatsApp}
            >
              <span className={styles.buttonText}>
                {t.finalCta.mainCta}
              </span>
              <span className={styles.buttonIcon}>🚀</span>
              <div className={styles.buttonGlow}></div>
            </button>

            <button 
              className={styles.secondaryCta}
              onClick={handleCall}
            >
              <span className={styles.buttonText}>
                {t.finalCta.secondaryCta}
              </span>
              <span className={styles.buttonIcon}>📞</span>
            </button>
          </div>

          {/* Contact Info */}
          <div className={`${styles.contactInfo} ${animateElements ? styles.animate : ''}`}>
            <div className={styles.phoneNumber}>
              <span className={styles.phoneIcon}>📱</span>
              {t.finalCta.phone}
            </div>
            <div className={styles.hours}>
              Lun - Sáb: 8:00 AM - 6:00 PM
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingIcon} style={{top: '15%', left: '10%', animationDelay: '0s'}}>💰</div>
        <div className={styles.floatingIcon} style={{top: '25%', right: '15%', animationDelay: '1s'}}>⚡</div>
        <div className={styles.floatingIcon} style={{bottom: '30%', left: '20%', animationDelay: '2s'}}>🚗</div>
        <div className={styles.floatingIcon} style={{bottom: '20%', right: '25%', animationDelay: '3s'}}>🔧</div>
      </div>
    </section>
  );
};

export default PromocionesSeccion4;
