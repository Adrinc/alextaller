// CitasSeccion4.jsx - Sección final de llamada a la acción
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/CitasSeccion4.module.css';
import { isEnglish } from '../../../data/variables';
import { translationsCitas } from '../../../data/translationsCitas.js';

const CitasSeccion4 = ({ onStartBooking }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const sectionRef = useRef(null);

  const ingles = useStore(isEnglish);
  const t = ingles ? translationsCitas.en : translationsCitas.es;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '-50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      name: ingles ? 'Carlos Martinez' : 'Carlos Martínez',
      vehicle: 'Honda Civic 2019',
      rating: 5,
      text: ingles 
        ? 'Excellent service! They fixed my car quickly and the price was very fair. Highly recommended!'
        : '¡Excelente servicio! Arreglaron mi auto rápidamente y el precio fue muy justo. ¡Muy recomendable!'
    },
    {
      name: 'Ana Rodriguez',
      vehicle: 'Toyota Camry 2020',
      rating: 5,
      text: ingles
        ? 'Professional team and state-of-the-art equipment. My car runs like new!'
        : 'Equipo profesional y equipamiento de última generación. ¡Mi auto funciona como nuevo!'
    },
    {
      name: ingles ? 'Miguel Hernandez' : 'Miguel Hernández',
      vehicle: 'Ford F-150 2018',
      rating: 5,
      text: ingles
        ? 'They diagnosed the problem in minutes and gave me a detailed explanation. Great experience!'
        : 'Diagnosticaron el problema en minutos y me dieron una explicación detallada. ¡Gran experiencia!'
    }
  ];

  const handleScrollToBooking = () => {
    const bookingSection = document.getElementById('booking-stepper');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
    if (onStartBooking) {
      onStartBooking();
    }
  };

  const handleWhatsApp = () => {
    const phone = "525555555555";
    const message = encodeURIComponent(
      ingles 
        ? "Hello! I'm interested in scheduling an appointment for my vehicle. Could you help me?"
        : "¡Hola! Estoy interesado en agendar una cita para mi vehículo. ¿Podrían ayudarme?"
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.open('tel:+525555555555', '_self');
  };

  return (
    <section 
      ref={sectionRef}
      className={`${styles.ctaSection} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        {/* Main CTA Content */}
        <div className={styles.ctaContent}>
          <div className={styles.ctaLeft}>
            <h2 className={styles.ctaTitle}>
              {ingles 
                ? 'Ready to Get Your Car Fixed?'
                : '¿Listo para arreglar tu auto?'
              }
            </h2>
            
            <p className={styles.ctaSubtitle}>
              {ingles
                ? 'Book your appointment now and experience our premium automotive service. Quick, reliable, and affordable!'
                : 'Agenda tu cita ahora y experimenta nuestro servicio automotriz premium. ¡Rápido, confiable y accesible!'
              }
            </p>

            <div className={styles.ctaFeatures}>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>⚡</span>
                <span className={styles.featureText}>
                  {ingles ? 'Same-day service' : 'Servicio el mismo día'}
                </span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>💰</span>
                <span className={styles.featureText}>
                  {ingles ? 'Competitive prices' : 'Precios competitivos'}
                </span>
              </div>
              <div className={styles.feature}>
                <span className={styles.featureIcon}>🛡️</span>
                <span className={styles.featureText}>
                  {ingles ? '90-day warranty' : 'Garantía de 90 días'}
                </span>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <button 
                className={styles.primaryButton}
                onClick={handleScrollToBooking}
              >
                <span className={styles.buttonIcon}>📅</span>
                <span className={styles.buttonText}>
                  {ingles ? 'Book Now' : 'Agendar Ahora'}
                </span>
                <div className={styles.buttonGlow}></div>
              </button>

              <div className={styles.secondaryButtons}>
                <button 
                  className={styles.secondaryButton}
                  onClick={handleWhatsApp}
                >
                  <span className={styles.buttonIcon}>📱</span>
                  <span className={styles.buttonText}>WhatsApp</span>
                </button>
                
                <button 
                  className={styles.secondaryButton}
                  onClick={handleCall}
                >
                  <span className={styles.buttonIcon}>📞</span>
                  <span className={styles.buttonText}>
                    {ingles ? 'Call' : 'Llamar'}
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className={styles.ctaRight}>
            {/* Testimonials Carousel */}
            <div className={styles.testimonialsContainer}>
              <h3 className={styles.testimonialsTitle}>
                {ingles ? 'What Our Customers Say' : 'Lo que dicen nuestros clientes'}
              </h3>

              <div className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <div className={styles.rating}>
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <span key={i} className={styles.star}>⭐</span>
                    ))}
                  </div>
                  
                  <p className={styles.testimonialText}>
                    "{testimonials[currentTestimonial].text}"
                  </p>
                  
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.authorInfo}>
                      <div className={styles.authorName}>
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className={styles.authorVehicle}>
                        🚗 {testimonials[currentTestimonial].vehicle}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.testimonialGlow}></div>
              </div>

              {/* Testimonial Indicators */}
              <div className={styles.testimonialIndicators}>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.indicator} ${
                      index === currentTestimonial ? styles.active : ''
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className={styles.emergencyContact}>
          <div className={styles.emergencyContent}>
            <div className={styles.emergencyIcon}>🚨</div>
            <div className={styles.emergencyText}>
              <h4 className={styles.emergencyTitle}>
                {ingles ? 'Need Emergency Service?' : '¿Necesitas servicio de emergencia?'}
              </h4>
              <p className={styles.emergencySubtitle}>
                {ingles 
                  ? 'We offer 24/7 emergency roadside assistance'
                  : 'Ofrecemos asistencia en carretera 24/7'
                }
              </p>
            </div>
            <button className={styles.emergencyButton} onClick={handleCall}>
              <span className={styles.buttonText}>
                {ingles ? 'Call Now' : 'Llamar Ahora'}
              </span>
              <span className={styles.buttonIcon}>📞</span>
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className={styles.trustBadges}>
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>🏆</div>
            <div className={styles.badgeText}>
              {ingles ? 'Best Service 2024' : 'Mejor Servicio 2024'}
            </div>
          </div>
          
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>✅</div>
            <div className={styles.badgeText}>
              {ingles ? 'Certified Technicians' : 'Técnicos Certificados'}
            </div>
          </div>
          
          <div className={styles.badge}>
            <div className={styles.badgeIcon}>🛡️</div>
            <div className={styles.badgeText}>
              {ingles ? 'Insured & Bonded' : 'Asegurado y Avalado'}
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb}></div>
        <div className={styles.gradientOrb2}></div>
        <div className={styles.floatingParticle} style={{ animationDelay: '0s' }}>⚡</div>
        <div className={styles.floatingParticle} style={{ animationDelay: '2s' }}>🔧</div>
        <div className={styles.floatingParticle} style={{ animationDelay: '4s' }}>🚗</div>
        <div className={styles.floatingParticle} style={{ animationDelay: '6s' }}>💰</div>
      </div>
    </section>
  );
};

export default CitasSeccion4;
