// CitasSeccion3.jsx - Sección de beneficios y garantías
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/CitasSeccion3.module.css';
import { isEnglish } from '../../../data/variables';
import { translationsCitas } from '../../../data/translationsCitas.js';

const CitasSeccion3 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
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

  const benefits = [
    {
      icon: '🛡️',
      title: ingles ? 'Quality Guarantee' : 'Garantía de Calidad',
      description: ingles 
        ? 'All our services are backed by a comprehensive quality guarantee'
        : 'Todos nuestros servicios están respaldados por una garantía integral de calidad',
      features: ingles 
        ? ['30-day warranty', 'Certified technicians', 'OEM parts only']
        : ['Garantía de 30 días', 'Técnicos certificados', 'Solo partes originales']
    },
    {
      icon: '⚡',
      title: ingles ? 'Fast Service' : 'Servicio Rápido',
      description: ingles
        ? 'Express service to get you back on the road quickly'
        : 'Servicio express para que vuelvas a la carretera rápidamente',
      features: ingles
        ? ['Same-day service', '2-hour diagnostics', 'No waiting lists']
        : ['Servicio el mismo día', 'Diagnóstico en 2 horas', 'Sin listas de espera']
    },
    {
      icon: '💰',
      title: ingles ? 'Fair Pricing' : 'Precios Justos',
      description: ingles
        ? 'Transparent pricing with no hidden fees'
        : 'Precios transparentes sin tarifas ocultas',
      features: ingles
        ? ['Free estimates', 'Price matching', 'Payment plans available']
        : ['Cotizaciones gratis', 'Igualamos precios', 'Planes de pago disponibles']
    },
    {
      icon: '🎯',
      title: ingles ? 'Expert Diagnostics' : 'Diagnóstico Experto',
      description: ingles
        ? 'Advanced diagnostic tools and experienced technicians'
        : 'Herramientas de diagnóstico avanzadas y técnicos experimentados',
      features: ingles
        ? ['Computer diagnostics', 'Visual inspection', 'Detailed reports']
        : ['Diagnóstico computarizado', 'Inspección visual', 'Reportes detallados']
    }
  ];

  const guarantees = [
    {
      icon: '✅',
      title: ingles ? 'Work Guarantee' : 'Garantía de Trabajo',
      period: ingles ? '90 days' : '90 días',
      description: ingles
        ? 'We guarantee our workmanship for 90 days from service completion'
        : 'Garantizamos nuestro trabajo por 90 días desde la finalización del servicio'
    },
    {
      icon: '🔧',
      title: ingles ? 'Parts Warranty' : 'Garantía de Partes',
      period: ingles ? '1 year' : '1 año',
      description: ingles
        ? 'All genuine parts come with manufacturer warranty'
        : 'Todas las partes originales vienen con garantía del fabricante'
    },
    {
      icon: '🚗',
      title: ingles ? 'Service Coverage' : 'Cobertura de Servicio',
      period: ingles ? '30 days' : '30 días',
      description: ingles
        ? 'Free re-service if the same issue occurs within 30 days'
        : 'Re-servicio gratuito si el mismo problema ocurre dentro de 30 días'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`${styles.benefitsSection} ${isVisible ? styles.visible : ''}`}
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            {ingles ? 'Why Choose Us?' : '¿Por qué elegirnos?'}
          </h2>
          <p className={styles.subtitle}>
            {ingles 
              ? 'Experience the difference with our premium automotive services'
              : 'Experimenta la diferencia con nuestros servicios automotrices premium'
            }
          </p>
        </div>

        {/* Tab Navigation */}
        <div className={styles.tabNavigation}>
          <button
            className={`${styles.tabButton} ${activeTab === 0 ? styles.active : ''}`}
            onClick={() => setActiveTab(0)}
          >
            <span className={styles.tabIcon}>⭐</span>
            <span className={styles.tabText}>
              {ingles ? 'Benefits' : 'Beneficios'}
            </span>
          </button>
          <button
            className={`${styles.tabButton} ${activeTab === 1 ? styles.active : ''}`}
            onClick={() => setActiveTab(1)}
          >
            <span className={styles.tabIcon}>🛡️</span>
            <span className={styles.tabText}>
              {ingles ? 'Guarantees' : 'Garantías'}
            </span>
          </button>
        </div>

        {/* Tab Content */}
        <div className={styles.tabContent}>
          {activeTab === 0 && (
            <div className={styles.benefitsGrid}>
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={styles.benefitCard}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.benefitHeader}>
                    <div className={styles.benefitIcon}>{benefit.icon}</div>
                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  </div>
                  
                  <p className={styles.benefitDescription}>
                    {benefit.description}
                  </p>
                  
                  <ul className={styles.benefitFeatures}>
                    {benefit.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={styles.benefitFeature}>
                        <span className={styles.featureIcon}>✓</span>
                        <span className={styles.featureText}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className={styles.benefitGlow}></div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 1 && (
            <div className={styles.guaranteesGrid}>
              {guarantees.map((guarantee, index) => (
                <div
                  key={index}
                  className={styles.guaranteeCard}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className={styles.guaranteeIcon}>{guarantee.icon}</div>
                  
                  <div className={styles.guaranteeContent}>
                    <h3 className={styles.guaranteeTitle}>{guarantee.title}</h3>
                    <div className={styles.guaranteePeriod}>{guarantee.period}</div>
                    <p className={styles.guaranteeDescription}>
                      {guarantee.description}
                    </p>
                  </div>
                  
                  <div className={styles.guaranteeStamp}>
                    <span className={styles.stampText}>
                      {ingles ? 'GUARANTEED' : 'GARANTIZADO'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Trust Indicators */}
        <div className={styles.trustIndicators}>
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>👥</div>
            <div className={styles.trustValue}>500+</div>
            <div className={styles.trustLabel}>
              {ingles ? 'Happy Customers' : 'Clientes Satisfechos'}
            </div>
          </div>
          
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>⭐</div>
            <div className={styles.trustValue}>4.9</div>
            <div className={styles.trustLabel}>
              {ingles ? 'Average Rating' : 'Calificación Promedio'}
            </div>
          </div>
          
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>🏆</div>
            <div className={styles.trustValue}>5</div>
            <div className={styles.trustLabel}>
              {ingles ? 'Years Experience' : 'Años de Experiencia'}
            </div>
          </div>
          
          <div className={styles.trustItem}>
            <div className={styles.trustIcon}>🔧</div>
            <div className={styles.trustValue}>15+</div>
            <div className={styles.trustLabel}>
              {ingles ? 'Services Offered' : 'Servicios Ofrecidos'}
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div className={styles.finalCTA}>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaContent}>
              <h3 className={styles.ctaTitle}>
                {ingles 
                  ? 'Ready to Get Your Car Fixed?'
                  : '¿Listo para arreglar tu auto?'
                }
              </h3>
              
              <p className={styles.ctaSubtitle}>
                {ingles
                  ? 'Book your appointment now and experience our premium automotive service!'
                  : '¡Agenda tu cita ahora y experimenta nuestro servicio automotriz premium!'
                }
              </p>

              <div className={styles.ctaButtons}>
                <button 
                  className={styles.primaryCTAButton}
                  onClick={() => {
                    const bookingSection = document.getElementById('booking-stepper');
                    if (bookingSection) {
                      bookingSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span className={styles.buttonIcon}>📅</span>
                  <span className={styles.buttonText}>
                    {ingles ? 'Book Now' : 'Agendar Ahora'}
                  </span>
                  <div className={styles.buttonGlow}></div>
                </button>

                <div className={styles.secondaryCTAButtons}>
                  <button 
                    className={styles.secondaryCTAButton}
                    onClick={() => {
                      const phone = "525555555555";
                      const message = encodeURIComponent(
                        ingles 
                          ? "Hello! I'm interested in scheduling an appointment for my vehicle."
                          : "¡Hola! Estoy interesado en agendar una cita para mi vehículo."
                      );
                      window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
                    }}
                  >
                    <span className={styles.buttonIcon}>📱</span>
                    <span className={styles.buttonText}>WhatsApp</span>
                  </button>
                  
                  <button 
                    className={styles.secondaryCTAButton}
                    onClick={() => window.open('tel:+525555555555', '_self')}
                  >
                    <span className={styles.buttonIcon}>📞</span>
                    <span className={styles.buttonText}>
                      {ingles ? 'Call' : 'Llamar'}
                    </span>
                  </button>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className={styles.emergencyContact}>
              <div className={styles.emergencyIcon}>🚨</div>
              <div className={styles.emergencyText}>
                <h4 className={styles.emergencyTitle}>
                  {ingles ? 'Emergency Service 24/7' : 'Servicio de Emergencia 24/7'}
                </h4>
                <p className={styles.emergencyDesc}>
                  {ingles 
                    ? 'Call now for immediate roadside assistance'
                    : 'Llama ahora para asistencia inmediata en carretera'
                  }
                </p>
              </div>
              <button 
                className={styles.emergencyButton}
                onClick={() => window.open('tel:+525555555555', '_self')}
              >
                {ingles ? 'Call Now' : 'Llamar Ahora'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.floatingElement} style={{ animationDelay: '0s' }}>🛡️</div>
        <div className={styles.floatingElement} style={{ animationDelay: '2s' }}>⚡</div>
        <div className={styles.floatingElement} style={{ animationDelay: '4s' }}>💰</div>
        <div className={styles.floatingElement} style={{ animationDelay: '6s' }}>🎯</div>
        
        <div className={styles.glowOrb}></div>
        <div className={styles.glowOrb2}></div>
      </div>
    </section>
  );
};

export default CitasSeccion3;
