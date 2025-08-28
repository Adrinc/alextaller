import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { currentLanguage } from '../../../data/signals.jsx';
import { translationsIndex } from '../../../data/translationsIndex.js';
import styles from '../css/indexSeccion5.module.css';

const IndexSeccion5 = () => {
  const lang = useStore(currentLanguage);
  const t = translationsIndex[lang];
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: t.testimonials.testimonials[0].name,
      role: t.testimonials.testimonials[0].role,
      avatar: '/public/image/testimonials/avatar1.png',
      rating: 5,
      comment: t.testimonials.testimonials[0].comment,
      service: t.testimonials.testimonials[0].service,
      date: t.testimonials.testimonials[0].date
    },
    {
      id: 2,
      name: t.testimonials.testimonials[1].name,
      role: t.testimonials.testimonials[1].role,
      avatar: '/public/image/testimonials/avatar2.png',
      rating: 5,
      comment: t.testimonials.testimonials[1].comment,
      service: t.testimonials.testimonials[1].service,
      date: t.testimonials.testimonials[1].date
    },
    {
      id: 3,
      name: t.testimonials.testimonials[2].name,
      role: t.testimonials.testimonials[2].role,
      avatar: '/public/image/testimonials/avatar3.png',
      rating: 5,
      comment: t.testimonials.testimonials[2].comment,
      service: t.testimonials.testimonials[2].service,
      date: t.testimonials.testimonials[2].date
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`${styles.star} ${i < rating ? styles.filled : ''}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className={styles.testimonialsSection}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerBadge}>
            <span className={styles.badgeIcon}>💬</span>
            <span>{t.testimonials.badge}</span>
          </div>
          <h2 className={styles.sectionTitle}>
            {t.testimonials.title}
          </h2>
          <p className={styles.sectionSubtitle}>
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className={styles.mainTestimonial}>
          <div className={styles.testimonialCard}>
            
            {/* Quote Icon */}
            <div className={styles.quoteIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z"/>
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className={styles.testimonialContent}>
              <div className={styles.rating}>
                {renderStars(testimonials[currentTestimonial].rating)}
              </div>
              
              <blockquote className={styles.comment}>
                "{testimonials[currentTestimonial].comment}"
              </blockquote>

              <div className={styles.serviceInfo}>
                <span className={styles.serviceTag}>
                  {testimonials[currentTestimonial].service}
                </span>
                <span className={styles.date}>
                  {testimonials[currentTestimonial].date}
                </span>
              </div>
            </div>

            {/* Author Info */}
            <div className={styles.authorInfo}>
              <div className={styles.avatar}>
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name}
                />
              </div>
              <div className={styles.authorDetails}>
                <h4 className={styles.authorName}>
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className={styles.authorRole}>
                  {testimonials[currentTestimonial].role}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className={styles.navigation}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.navDot} ${index === currentTestimonial ? styles.active : ''}`}
              onClick={() => setCurrentTestimonial(index)}
              aria-label={`Ver testimonio ${index + 1}`}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>500+</div>
            <div className={styles.statLabel}>{t.testimonials.stats.clients}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>4.9</div>
            <div className={styles.statLabel}>{t.testimonials.stats.rating}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>95%</div>
            <div className={styles.statLabel}>{t.testimonials.stats.satisfaction}</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>7</div>
            <div className={styles.statLabel}>{t.testimonials.stats.years}</div>
          </div>
        </div>

        {/* All Testimonials Grid */}
        <div className={styles.allTestimonials}>
          <h3 className={styles.gridTitle}>{t.testimonials.allReviews}</h3>
          <div className={styles.testimonialsGrid}>
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className={`${styles.testimonialGridCard} ${index === currentTestimonial ? styles.highlighted : ''}`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className={styles.gridCardHeader}>
                  <div className={styles.gridAvatar}>
                    <img src={testimonial.avatar} alt={testimonial.name} />
                  </div>
                  <div className={styles.gridAuthorInfo}>
                    <h5>{testimonial.name}</h5>
                    <p>{testimonial.role}</p>
                  </div>
                  <div className={styles.gridRating}>
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <p className={styles.gridComment}>
                  "{testimonial.comment}"
                </p>
                <div className={styles.gridFooter}>
                  <span className={styles.gridService}>{testimonial.service}</span>
                  <span className={styles.gridDate}>{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h3>{t.testimonials.cta.title}</h3>
          <p>{t.testimonials.cta.description}</p>
          <div className={styles.ctaButtons}>
            <button className={styles.scheduleButton}>
              {t.testimonials.cta.schedule}
            </button>
            <button className={styles.reviewButton}>
              {t.testimonials.cta.leaveReview}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndexSeccion5;
