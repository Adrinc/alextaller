import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex.js';
import styles from '../css/indexSeccion5.module.css';

const IndexSeccion5 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en : translationsIndex.es;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [visibleElements, setVisibleElements] = useState({});
  const sectionRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: t.testimonials.testimonial1.name,
      rating: t.testimonials.testimonial1.rating,
      text: t.testimonials.testimonial1.text,
      vehicle: t.testimonials.testimonial1.vehicle,
      avatar: '/image/testimonials/avatar2.png',
      service: ingles ? 'Engine Repair' : 'Reparación de Motor',
      location: ingles ? 'Downtown Location' : 'Sucursal Centro',
      date: ingles ? '2 months ago' : 'Hace 2 meses',
      verified: true
    },
    {
      id: 2,
      name: t.testimonials.testimonial2.name,
      rating: t.testimonials.testimonial2.rating,
      text: t.testimonials.testimonial2.text,
      vehicle: t.testimonials.testimonial2.vehicle,
      avatar: '/image/testimonials/avatar1.png',
      service: ingles ? 'Brake Service' : 'Servicio de Frenos',
      location: ingles ? 'North Location' : 'Sucursal Norte',
      date: ingles ? '1 month ago' : 'Hace 1 mes',
      verified: true
    },
    {
      id: 3,
      name: t.testimonials.testimonial3.name,
      rating: t.testimonials.testimonial3.rating,
      text: t.testimonials.testimonial3.text,
      vehicle: t.testimonials.testimonial3.vehicle,
      avatar: '/image/testimonials/Maria.png',
      service: ingles ? 'Oil Change' : 'Cambio de Aceite',
      location: ingles ? 'Main Location' : 'Sucursal Principal',
      date: ingles ? '3 weeks ago' : 'Hace 3 semanas',
      verified: true
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-element');
            setVisibleElements(prev => ({
              ...prev,
              [elementId]: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-element]');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials with smooth animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleTestimonialChange = (index) => {
    if (index !== currentTestimonial) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentTestimonial(index);
        setIsAnimating(false);
      }, 300);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span 
        key={i} 
        className={`${styles.star} ${i < rating ? styles.filled : ''}`}
        style={{ animationDelay: `${i * 0.1}s` }}
      >
        ⭐
      </span>
    ));
  };

  const currentTest = testimonials[currentTestimonial];

  return (
    <section ref={sectionRef} className={styles.section} id="testimonios">
      
      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb} style={{ '--delay': '0s' }}></div>
        <div className={styles.gradientOrb} style={{ '--delay': '5s' }}></div>
        <div className={styles.gradientOrb} style={{ '--delay': '10s' }}></div>
        
        {/* Floating Elements */}
        <div className={styles.floatingElements}>
          <div className={styles.floatingQuote} style={{ '--delay': '0s' }}>💬</div>
          <div className={styles.floatingQuote} style={{ '--delay': '2s' }}>⭐</div>
          <div className={styles.floatingQuote} style={{ '--delay': '4s' }}>👥</div>
          <div className={styles.floatingQuote} style={{ '--delay': '6s' }}>🔧</div>
        </div>
      </div>

      <div className={styles.container}>
        
        {/* Header Section */}
        <div 
          className={`${styles.header} ${visibleElements.header ? styles.fadeInUp : ''}`}
          data-element="header"
        >
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>💭</span>
            <span className={styles.badgeText}>
              {ingles ? 'Customer Reviews' : 'Reseñas de Clientes'}
            </span>
          </div>
          
          <h2 className={styles.title}>
            {t.testimonials.title}
          </h2>
          
          <p className={styles.subtitle}>
            {t.testimonials.subtitle}
          </p>

          {/* Stats Row */}
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>
                {ingles ? 'Happy Customers' : 'Clientes Satisfechos'}
              </div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>4.9</div>
              <div className={styles.statLabel}>
                {ingles ? 'Average Rating' : 'Calificación Promedio'}
              </div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>
                {ingles ? 'Return Rate' : 'Tasa de Retorno'}
              </div>
            </div>
          </div>
        </div>

        {/* Main Testimonial Display */}
        <div 
          className={`${styles.testimonialContainer} ${visibleElements.testimonial ? styles.fadeInUp : ''}`}
          data-element="testimonial"
        >
          
          {/* Decorative Quote Background */}
          <div className={styles.quoteBackground}>
            <div className={styles.largeQuote}>"</div>
          </div>

          <div className={`${styles.mainTestimonial} ${isAnimating ? styles.animating : ''}`}>
            <div className={styles.testimonialCard}>
              
              {/* Verification Badge */}
              {currentTest.verified && (
                <div className={styles.verificationBadge}>
                  <span className={styles.verifyIcon}>✓</span>
                  <span className={styles.verifyText}>
                    {ingles ? 'Verified Customer' : 'Cliente Verificado'}
                  </span>
                </div>
              )}

              {/* Quote Icon */}
              <div className={styles.quoteIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z"/>
                </svg>
              </div>

              {/* Rating Stars */}
              <div className={styles.rating}>
                {renderStars(currentTest.rating)}
                <span className={styles.ratingText}>
                  {currentTest.rating}.0/5.0
                </span>
              </div>

              {/* Testimonial Content */}
              <div className={styles.testimonialContent}>
                <blockquote className={styles.comment}>
                  "{currentTest.text}"
                </blockquote>

                {/* Service Details */}
                <div className={styles.serviceDetails}>
                  <div className={styles.serviceItem}>
                    <span className={styles.serviceIcon}>🚗</span>
                    <span className={styles.serviceText}>{currentTest.vehicle}</span>
                  </div>
                  <div className={styles.serviceItem}>
                    <span className={styles.serviceIcon}>🔧</span>
                    <span className={styles.serviceText}>{currentTest.service}</span>
                  </div>
                  <div className={styles.serviceItem}>
                    <span className={styles.serviceIcon}>📍</span>
                    <span className={styles.serviceText}>{currentTest.location}</span>
                  </div>
                </div>
              </div>

              {/* Author Info */}
              <div className={styles.authorSection}>
                <div className={styles.authorInfo}>
                  <div className={styles.avatarContainer}>
                    <img 
                      src={currentTest.avatar} 
                      alt={currentTest.name}
                      className={styles.avatar}
                    />
                    <div className={styles.avatarRing}></div>
                  </div>
                  <div className={styles.authorDetails}>
                    <h4 className={styles.authorName}>
                      {currentTest.name}
                    </h4>
                    <p className={styles.authorDate}>
                      {currentTest.date}
                    </p>
                  </div>
                </div>

                {/* Social Proof Icons */}
                <div className={styles.socialProof}>
                  <div className={styles.platformIcon}>
                    <span>Google</span>
                  </div>
                  <div className={styles.platformIcon}>
                    <span>Facebook</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div 
          className={`${styles.navigation} ${visibleElements.navigation ? styles.fadeInUp : ''}`}
          data-element="navigation"
        >
          <div className={styles.navContainer}>
            {/* Previous Button */}
            <button
              className={styles.navButton}
              onClick={() => handleTestimonialChange((currentTestimonial - 1 + testimonials.length) % testimonials.length)}
              aria-label={ingles ? "Previous testimonial" : "Testimonio anterior"}
            >
              <span className={styles.navIcon}>‹</span>
            </button>

            {/* Dots Navigation */}
            <div className={styles.dotsContainer}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.navDot} ${index === currentTestimonial ? styles.active : ''}`}
                  onClick={() => handleTestimonialChange(index)}
                  aria-label={`${ingles ? 'View testimonial' : 'Ver testimonio'} ${index + 1}`}
                >
                  <span className={styles.dotInner}></span>
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              className={styles.navButton}
              onClick={() => handleTestimonialChange((currentTestimonial + 1) % testimonials.length)}
              aria-label={ingles ? "Next testimonial" : "Siguiente testimonio"}
            >
              <span className={styles.navIcon}>›</span>
            </button>
          </div>

          {/* Progress Bar */}
          <div className={styles.progressContainer}>
            <div 
              className={styles.progressBar}
              style={{ width: `${((currentTestimonial + 1) / testimonials.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Mini Testimonials Preview */}
        <div 
          className={`${styles.miniTestimonials} ${visibleElements.mini ? styles.fadeInUp : ''}`}
          data-element="mini"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${styles.miniCard} ${index === currentTestimonial ? styles.active : ''}`}
              onClick={() => handleTestimonialChange(index)}
            >
              <div className={styles.miniAvatar}>
                <img src={testimonial.avatar} alt={testimonial.name} />
              </div>
              <div className={styles.miniContent}>
                <div className={styles.miniName}>{testimonial.name}</div>
                <div className={styles.miniStars}>
                  {Array.from({ length: testimonial.rating }, (_, i) => (
                    <span key={i} className={styles.miniStar}>⭐</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div 
          className={`${styles.ctaSection} ${visibleElements.cta ? styles.fadeInUp : ''}`}
          data-element="cta"
        >
          <div className={styles.ctaContent}>
            <div className={styles.ctaIcon}>
              <span>📝</span>
            </div>
            <h3 className={styles.ctaTitle}>
              {ingles ? 'Share Your Experience' : 'Comparte tu Experiencia'}
            </h3>
            <p className={styles.ctaDescription}>
              {ingles ? 
                'Help others by sharing your experience with Alex Auto Shop' : 
                'Ayuda a otros compartiendo tu experiencia con Alex Taller Mecánico'
              }
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaButton}>
                <span className={styles.buttonIcon}>⭐</span>
                <span>{ingles ? 'Leave a Review' : 'Dejar Reseña'}</span>
              </button>
              <button className={styles.ctaSecondary}>
                <span className={styles.buttonIcon}>👀</span>
                <span>{ingles ? 'View All Reviews' : 'Ver Todas las Reseñas'}</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndexSeccion5;
