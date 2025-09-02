// PromocionesSeccion1.jsx - Hero épico con urgencia y countdown
import React, { useEffect, useState, useRef } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/PromocionesSeccion1.module.css';
import { isEnglish } from '../../../data/variables';
import { translationsPromociones } from '../../../data/translationsPromociones.js';
import CountdownTimer from '../components/CountdownTimer.jsx';

const PromocionesSeccion1 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateElements, setAnimateElements] = useState(false);
  const [particles, setParticles] = useState([]);
  const sectionRef = useRef(null);
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsPromociones.en : translationsPromociones.es;

  // Target date para el countdown (24 horas desde ahora)
  const targetDate = new Date().getTime() + (24 * 60 * 60 * 1000);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            setTimeout(() => setAnimateElements(true), 300);
            createParticles();
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

  const createParticles = () => {
    const newParticles = [];
    for (let i = 0; i < 15; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        delay: Math.random() * 3
      });
    }
    setParticles(newParticles);
  };

  const handleScrollToPromotions = () => {
    const promotionsSection = document.querySelector('[data-section="promotions"]');
    if (promotionsSection) {
      promotionsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className={`${styles.heroSection} ${isVisible ? styles.visible : ''}`}
    >
      {/* Particles Background */}
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
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      {/* Background Image with Overlay */}
      <div className={styles.backgroundImage}>
        <div className={styles.overlay}></div>
      </div>

      {/* Content Container */}
      <div className={styles.contentContainer}>
        {/* Limited Offer Badge */}
        <div className={`${styles.offerBadge} ${animateElements ? styles.animate : ''}`}>
          <span className={styles.badgeIcon}>⚡</span>
          {t.hero.badge}
          <div className={styles.badgeGlow}></div>
        </div>

        {/* Main Content */}
        <div className={styles.heroContent}>
          <h1 className={`${styles.heroTitle} ${animateElements ? styles.animate : ''}`}>
            {t.hero.title}
            <div className={styles.titleUnderline}></div>
          </h1>

          <p className={`${styles.heroSubtitle} ${animateElements ? styles.animate : ''}`}>
            {t.hero.subtitle}
          </p>

          {/* Countdown Timer */}
          <div className={`${styles.countdownWrapper} ${animateElements ? styles.animate : ''}`}>
            <span className={styles.countdownLabel}>
              {t.hero.countdown.prefix}
            </span>
            <CountdownTimer 
              targetDate={targetDate}
              labels={t.hero.countdown}
              onComplete={() => console.log('Promoción expirada!')}
            />
          </div>

          {/* Urgency Message */}
          <div className={`${styles.urgencyMessage} ${animateElements ? styles.animate : ''}`}>
            <span className={styles.urgencyIcon}>🔥</span>
            {t.hero.urgency}
          </div>

          {/* CTA Button */}
          <button 
            className={`${styles.ctaButton} ${animateElements ? styles.animate : ''}`}
            onClick={handleScrollToPromotions}
          >
            <span className={styles.buttonText}>{t.hero.cta}</span>
            <span className={styles.buttonIcon}>👇</span>
            <div className={styles.buttonGlow}></div>
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingIcon} style={{animationDelay: '0s'}}>💰</div>
        <div className={styles.floatingIcon} style={{animationDelay: '1s'}}>🚗</div>
        <div className={styles.floatingIcon} style={{animationDelay: '2s'}}>⚡</div>
        <div className={styles.floatingIcon} style={{animationDelay: '3s'}}>🔥</div>
      </div>

      {/* Bottom Wave */}
      <div className={styles.bottomWave}>
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className={styles.shapeFill}></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className={styles.shapeFill}></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className={styles.shapeFill}></path>
        </svg>
      </div>
    </section>
  );
};

export default PromocionesSeccion1;
