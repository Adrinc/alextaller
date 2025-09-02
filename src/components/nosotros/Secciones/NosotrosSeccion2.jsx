// NosotrosSeccion2.jsx - Nuestra Historia con diseño de dos columnas épico
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/NosotrosSeccion2.module.css';
import { isEnglish } from '../../../data/variables.js';
import { translationsNosotros } from '../../../data/translationsNosotros.js';

const NosotrosSeccion2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    years: 0,
    clients: 0,
    repairs: 0,
    guarantee: 0
  });
  
  const sectionRef = useRef(null);
  const statsRef = useRef(null);
  
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsNosotros.en : translationsNosotros.es;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === sectionRef.current) {
              setIsVisible(true);
            }
            if (entry.target === statsRef.current) {
              setStatsVisible(true);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Animate stats when visible
  useEffect(() => {
    if (statsVisible) {
      const targets = {
        years: 30,
        clients: 15000,
        repairs: 50000,
        guarantee: 100
      };

      const animateValue = (key, target, duration = 2000) => {
        const start = Date.now();
        const startValue = 0;

        const animate = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          
          // Easing function
          const easeOutCubic = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(startValue + (target - startValue) * easeOutCubic);

          setAnimatedStats(prev => ({ ...prev, [key]: currentValue }));

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        requestAnimationFrame(animate);
      };

      // Stagger the animations
      setTimeout(() => animateValue('years', targets.years, 1500), 200);
      setTimeout(() => animateValue('clients', targets.clients, 2000), 400);
      setTimeout(() => animateValue('repairs', targets.repairs, 2500), 600);
      setTimeout(() => animateValue('guarantee', targets.guarantee, 1000), 800);
    }
  }, [statsVisible]);

  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  return (
    <section 
      id="nuestra-historia"
      ref={sectionRef}
      className={`${styles.historiaSection} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.tagline}>
            <span className={styles.tagIcon}>🏆</span>
            <span className={styles.tagText}>Legado de Excelencia</span>
          </div>
          <h2 className={styles.sectionTitle}>{t.historia.title}</h2>
          <p className={styles.sectionSubtitle}>{t.historia.subtitle}</p>
        </div>

        {/* Main Content */}
        <div className={styles.content}>
          {/* Text Column */}
          <div className={styles.textColumn}>
            <div className={styles.textContainer}>
              {/* Highlight Box */}
              <div className={styles.highlightBox}>
                <div className={styles.highlightIcon}>📅</div>
                <div className={styles.highlightText}>
                  {t.historia.content.highlight}
                </div>
              </div>

              {/* Story Paragraphs */}
              <div className={styles.storyContent}>
                <p className={styles.paragraph}>
                  {t.historia.content.paragraph1}
                </p>
                <p className={styles.paragraph}>
                  {t.historia.content.paragraph2}
                </p>
                <p className={styles.paragraph}>
                  {t.historia.content.paragraph3}
                </p>
              </div>

              {/* Mission & Vision Cards */}
              <div className={styles.missionVision}>
                <div className={styles.mvCard}>
                  <div className={styles.mvIcon}>🎯</div>
                  <h4 className={styles.mvTitle}>{t.mision.title}</h4>
                  <p className={styles.mvContent}>{t.mision.content}</p>
                </div>
                <div className={styles.mvCard}>
                  <div className={styles.mvIcon}>👁️</div>
                  <h4 className={styles.mvTitle}>{t.vision.title}</h4>
                  <p className={styles.mvContent}>{t.vision.content}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className={styles.imageColumn}>
            <div className={styles.imageContainer}>
              {/* Main Historical Image */}
              <div className={styles.mainImage}>
                <img 
                  src="/image/global/equipment.png" 
                  alt="Alex Taller Mecánico - Historia"
                  className={styles.historyImage}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayContent}>
                    <span className={styles.overlayYear}>1993</span>
                    <span className={styles.overlayText}>Fundación</span>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className={styles.timeline}>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>1993</div>
                  <div className={styles.timelineContent}>Fundación del taller</div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2000</div>
                  <div className={styles.timelineContent}>Primera expansión</div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2010</div>
                  <div className={styles.timelineContent}>Tecnología digital</div>
                </div>
                <div className={styles.timelineItem}>
                  <div className={styles.timelineYear}>2023</div>
                  <div className={styles.timelineContent}>Taller moderno</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div 
          ref={statsRef}
          className={`${styles.statsSection} ${statsVisible ? styles.statsVisible : ''}`}
        >
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>📅</div>
              <div className={styles.statNumber}>
                {animatedStats.years}+
              </div>
              <div className={styles.statLabel}>{t.historia.stats.yearsLabel}</div>
              <div className={styles.statGlow}></div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>👥</div>
              <div className={styles.statNumber}>
                {formatNumber(animatedStats.clients)}+
              </div>
              <div className={styles.statLabel}>{t.historia.stats.clientsLabel}</div>
              <div className={styles.statGlow}></div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🔧</div>
              <div className={styles.statNumber}>
                {formatNumber(animatedStats.repairs)}+
              </div>
              <div className={styles.statLabel}>{t.historia.stats.repairsLabel}</div>
              <div className={styles.statGlow}></div>
            </div>
            
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🛡️</div>
              <div className={styles.statNumber}>
                {animatedStats.guarantee}%
              </div>
              <div className={styles.statLabel}>{t.historia.stats.guaranteeLabel}</div>
              <div className={styles.statGlow}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.geometricShape1}></div>
        <div className={styles.geometricShape2}></div>
        <div className={styles.geometricShape3}></div>
      </div>
    </section>
  );
};

export default NosotrosSeccion2;
