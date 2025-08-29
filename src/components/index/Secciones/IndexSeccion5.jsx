import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex.js';
import styles from '../css/indexSeccion5.module.css';

const IndexSeccion5 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en : translationsIndex.es;
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: t.testimonials.testimonial1.name,
      rating: t.testimonials.testimonial1.rating,
      text: t.testimonials.testimonial1.text,
      vehicle: t.testimonials.testimonial1.vehicle,
      avatar: '/image/testimonials/avatar1.png'
    },
    {
      id: 2,
      name: t.testimonials.testimonial2.name,
      rating: t.testimonials.testimonial2.rating,
      text: t.testimonials.testimonial2.text,
      vehicle: t.testimonials.testimonial2.vehicle,
      avatar: '/image/testimonials/avatar2.png'
    },
    {
      id: 3,
      name: t.testimonials.testimonial3.name,
      rating: t.testimonials.testimonial3.rating,
      text: t.testimonials.testimonial3.text,
      vehicle: t.testimonials.testimonial3.vehicle,
      avatar: '/image/testimonials/avatar3.png'
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
    <section className={styles.section} id="testimonios">
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t.testimonials.title}
          </h2>
          <p className={styles.subtitle}>
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
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className={styles.serviceInfo}>
                <span className={styles.vehicle}>
                  {testimonials[currentTestimonial].vehicle}
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

      </div>
    </section>
  );
};

export default IndexSeccion5;
