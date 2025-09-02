// BeneficiosSeccion5.jsx - Testimonios destacados (slider)
import React, { useEffect, useState, useRef } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/BeneficiosSeccion5.module.css';
import { isEnglish } from '../../../data/variables';
import { translationsBeneficios } from '../../../data/translationsBeneficios.js';

const BeneficiosSeccion5 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const sectionRef = useRef(null);
  const autoplayRef = useRef(null);
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsBeneficios.en : translationsBeneficios.es;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            startAutoplay();
          } else {
            stopAutoplay();
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
      stopAutoplay();
    };
  }, []);

  const startAutoplay = () => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => 
          prev === t.testimonials.reviews.length - 1 ? 0 : prev + 1
        );
      }, 5000);
    }
  };

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
  };

  const handleSlideChange = (index) => {
    setCurrentSlide(index);
    setAutoplay(false);
    stopAutoplay();
    
    // Restart autoplay after manual interaction
    setTimeout(() => {
      setAutoplay(true);
      startAutoplay();
    }, 10000);
  };

  const nextSlide = () => {
    handleSlideChange(currentSlide === t.testimonials.reviews.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    handleSlideChange(currentSlide === 0 ? t.testimonials.reviews.length - 1 : currentSlide - 1);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`${styles.star} ${i < rating ? styles.filled : ''}`}
      >
        ⭐
      </span>
    ));
  };

  return (
    <section className={styles.testimonialsSection} ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.sectionHeader} ${isVisible ? styles.visible : ''}`}>
          <h2 className={styles.sectionTitle}>
            {t.testimonials.title}
          </h2>
          <p className={styles.sectionSubtitle}>
            {t.testimonials.subtitle}
          </p>
          <div className={styles.headerDivider}></div>
        </div>

        {/* Testimonials Slider */}
        <div className={`${styles.testimonialsSlider} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.sliderContainer}>
            {/* Navigation Arrows */}
            <button 
              className={styles.navButton} 
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Slides Container */}
            <div className={styles.slidesWrapper}>
              <div 
                className={styles.slidesContainer}
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`
                }}
              >
                {t.testimonials.reviews.map((review, index) => (
                  <div 
                    key={index} 
                    className={styles.testimonialSlide}
                  >
                    <div className={styles.testimonialCard}>
                      <div className={styles.cardInner}>
                        {/* Quote Icon */}
                        <div className={styles.quoteIcon}>
                          <svg viewBox="0 0 24 24" fill="none">
                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" stroke="currentColor" strokeWidth="2"/>
                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        </div>

                        {/* Rating */}
                        <div className={styles.rating}>
                          {renderStars(review.rating)}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className={styles.testimonialText}>
                          "{review.text}"
                        </blockquote>

                        {/* Customer Info */}
                        <div className={styles.customerInfo}>
                          <div className={styles.avatarContainer}>
                            <img 
                              src={`/image/testimonials/${review.avatar}`}
                              alt={review.name}
                              className={styles.avatar}
                            />
                            <div className={styles.avatarGlow}></div>
                          </div>
                          <div className={styles.customerDetails}>
                            <h4 className={styles.customerName}>
                              {review.name}
                            </h4>
                            <span className={styles.customerTitle}>
                              Cliente Verificado
                            </span>
                          </div>
                        </div>

                        {/* Card Decorations */}
                        <div className={styles.cardDecorations}>
                          <div className={styles.decoration1}></div>
                          <div className={styles.decoration2}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button 
              className={styles.navButton} 
              onClick={nextSlide}
              disabled={currentSlide === t.testimonials.reviews.length - 1}
            >
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className={styles.slideIndicators}>
            {t.testimonials.reviews.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${
                  index === currentSlide ? styles.active : ''
                }`}
                onClick={() => handleSlideChange(index)}
              >
                <span className={styles.indicatorInner}></span>
              </button>
            ))}
          </div>

          {/* Autoplay Control */}
          <div className={styles.autoplayControl}>
            <button
              className={`${styles.autoplayBtn} ${autoplay ? styles.playing : ''}`}
              onClick={() => {
                setAutoplay(!autoplay);
                if (!autoplay) {
                  startAutoplay();
                } else {
                  stopAutoplay();
                }
              }}
            >
              {autoplay ? (
                <svg viewBox="0 0 24 24" fill="none">
                  <rect x="6" y="4" width="4" height="16" fill="currentColor"/>
                  <rect x="14" y="4" width="4" height="16" fill="currentColor"/>
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none">
                  <polygon points="5,3 19,12 5,21" fill="currentColor"/>
                </svg>
              )}
            </button>
            <span className={styles.autoplayLabel}>
              {autoplay ? 'Pausar' : 'Reproducir'}
            </span>
          </div>
        </div>

        {/* Trust Summary */}
        <div className={`${styles.trustSummary} ${isVisible ? styles.visible : ''}`}>
          <div className={styles.summaryContent}>
            <h3 className={styles.summaryTitle}>
              Testimonios que hablan por sí solos
            </h3>
            <div className={styles.summaryStats}>
              <div className={styles.summaryItem}>
                <span className={styles.summaryNumber}>4.9/5</span>
                <span className={styles.summaryLabel}>Calificación promedio</span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryNumber}>98%</span>
                <span className={styles.summaryLabel}>Recomendación</span>
              </div>
              <div className={styles.summaryItem}>
                <span className={styles.summaryNumber}>2,500+</span>
                <span className={styles.summaryLabel}>Reseñas positivas</span>
              </div>
            </div>
            <button className={styles.viewAllBtn}>
              <span>Ver Todas las Reseñas</span>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosSeccion5;
