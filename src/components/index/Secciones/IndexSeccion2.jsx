// IndexSeccion2.jsx - Servicios PREMIUM (Grid Layout)
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import styles from '../css/indexSeccion2.module.css';

const IndexSeccion2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en : translationsIndex.es;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
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

  // Servicios completos (todos los 6 servicios)
  const featuredServices = [
    {
      id: 'maintenance',
      icon: '🔧',
      title: t.services.maintenance.title,
      description: t.services.maintenance.description,
      price: ingles ? 'From $899' : 'Desde $899',
      duration: '2-3 hrs',
      image: '/image/global/mantenimientopre.jfif',
      benefits: t.services.maintenance.features,
      isPopular: true
    },
    {
      id: 'repairs',
      icon: '⚙️',
      title: t.services.repairs.title,
      description: t.services.repairs.description,
      price: ingles ? 'From $1,299' : 'Desde $1,299',
      duration: '3-5 hrs',
      image: '/image/global/mecanico2.png',
      benefits: t.services.repairs.features,
      isPopular: false
    },
    {
      id: 'diagnostics',
      icon: '📱',
      title: t.services.diagnostics.title,
      description: t.services.diagnostics.description,
      price: ingles ? 'From $299' : 'Desde $299',
      duration: '30-60 min',
      image: '/image/global/grupoti.jpg',
      benefits: t.services.diagnostics.features,
      isPopular: false
    },
    {
      id: 'painting',
      icon: '🎨',
      title: t.services.painting.title,
      description: t.services.painting.description,
      price: ingles ? 'From $2,999' : 'Desde $2,999',
      duration: '1-3 días',
      image: '/image/global/pintando1.png',
      benefits: t.services.painting.features,
      isPopular: false
    },
    {
      id: 'electrical',
      icon: '⚡',
      title: t.services.electrical.title,
      description: t.services.electrical.description,
      price: ingles ? 'From $599' : 'Desde $599',
      duration: '1-4 hrs',
      image: '/image/global/reparacion.png',
      benefits: t.services.electrical.features,
      isPopular: false
    },
    {
      id: 'airConditioning',
      icon: '❄️',
      title: t.services.airConditioning.title,
      description: t.services.airConditioning.description,
      price: ingles ? 'From $799' : 'Desde $799',
      duration: '1-2 hrs',
      image: '/image/global/aireacondicionado.png',
      benefits: t.services.airConditioning.features,
      isPopular: false
    }
  ];

  const handleServiceClick = (serviceId) => {
    window.location.href = `/servicios#${serviceId}`;
  };

  return (
    <section 
      ref={sectionRef}
      className={`${styles.servicesSection} ${isVisible ? styles.visible : ''}`}
    >
      {/* Elementos flotantes épicos */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingIcon} style={{'--delay': '0s'}}>🔧</div>
        <div className={styles.floatingIcon} style={{'--delay': '1s'}}>⚙️</div>
        <div className={styles.floatingIcon} style={{'--delay': '2s'}}>🚗</div>
        <div className={styles.floatingIcon} style={{'--delay': '3s'}}>🎨</div>
        <div className={styles.floatingIcon} style={{'--delay': '4s'}}>⚡</div>
      </div>

      {/* Partículas */}
      <div className={styles.particles}>
        {[...Array(25)].map((_, i) => (
          <div 
            key={i}
            className={styles.particle}
            style={{
              '--delay': `${i * 0.4}s`,
              left: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      <div className={styles.container}>
        {/* Header épico */}
        <div className={styles.header}>
          <div className={styles.sectionBadge}>
            <span className={styles.badgeIcon}>⭐</span>
            <span>{ingles ? "EXPERT SERVICES" : "SERVICIOS EXPERTOS"}</span>
          </div>

          <h2 className={styles.title}>
            {ingles ? "Premium Car Care Solutions" : "Soluciones Premium para tu Auto"}
            <span className={styles.titleIcon}>🚗</span>
          </h2>

          <p className={styles.subtitle}>
            {ingles 
              ? "Professional service backed by 8+ years of automotive expertise and customer satisfaction"
              : "Servicio profesional respaldado por más de 8 años de experiencia automotriz y satisfacción del cliente"
            }
          </p>

          {/* Métricas de confianza épicas */}
          <div className={styles.trustMetrics}>
            <div className={styles.metric} style={{'--index': 0}}>
              <span className={styles.metricIcon}>🚨</span>
              <div className={styles.metricContent}>
                <span className={styles.metricNumber}>24/7</span>
                <span className={styles.metricLabel}>{ingles ? "Emergency" : "Emergencia"}</span>
              </div>
            </div>
            <div className={styles.metric} style={{'--index': 1}}>
              <span className={styles.metricIcon}>🏆</span>
              <div className={styles.metricContent}>
                <span className={styles.metricNumber}>5000+</span>
                <span className={styles.metricLabel}>{ingles ? "Cars Serviced" : "Autos Atendidos"}</span>
              </div>
            </div>
            <div className={styles.metric} style={{'--index': 2}}>
              <span className={styles.metricIcon}>✅</span>
              <div className={styles.metricContent}>
                <span className={styles.metricNumber}>ASE</span>
                <span className={styles.metricLabel}>{ingles ? "Certified" : "Certificado"}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {featuredServices.map((service, index) => (
            <div 
              key={service.id} 
              className={`${styles.serviceCard} ${service.isPopular ? styles.popular : ''}`}
              onClick={() => handleServiceClick(service.id)}
              style={{
                animationDelay: `${index * 0.1}s`
              }}
            >
              {/* Popular Badge */}
              {service.isPopular && (
                <div className={styles.popularBadge}>
                  <span className={styles.popularIcon}>🔥</span>
                  {ingles ? "Most Popular" : "Más Popular"}
                </div>
              )}

              {/* Card Image */}
              <div className={styles.cardImage}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  loading="lazy"
                />
              </div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <div className={styles.cardHeader}>
                  <div className={styles.iconContainer}>
                    <span className={styles.serviceIcon}>{service.icon}</span>
                  </div>
                  
                  <div className={styles.serviceInfo}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <div className={styles.serviceDuration}>
                      <span className={styles.durationIcon}>⏱️</span>
                      {service.duration}
                    </div>
                  </div>
                </div>

                {/* Price Section - Moved for better visibility */}
                <div className={styles.priceSection}>
                  <div className={styles.servicePrice}>
                    {service.price}
                  </div>
                </div>

                <p className={styles.serviceDescription}>
                  {service.description}
                </p>

                <ul className={styles.benefitsList}>
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className={styles.benefitItem}>
                      <span className={styles.checkMark}>✓</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button className={styles.ctaButton}>
                  <span>{ingles ? "Learn More" : "Saber Más"}</span>
                  <span className={styles.buttonIcon}>🔧</span>
                </button>
              </div>

              {/* Card Effects */}
              <div className={styles.cardGlow}></div>
              <div className={styles.hoverOverlay}></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default IndexSeccion2;
