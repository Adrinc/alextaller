// IndexSeccion2.jsx - Servicios ÉPICOS con efectos 3D para Alex Taller Mecánico
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import styles from '../css/indexSeccion2.module.css';

const IndexSeccion2 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en : translationsIndex.es;
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredService, setHoveredService] = useState(null);
  const [particles, setParticles] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Crear partículas de servicios
          const newParticles = Array.from({ length: 15 }, (_, i) => ({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 6 + 3,
            speed: Math.random() * 3 + 2,
            opacity: Math.random() * 0.4 + 0.1
          }));
          setParticles(newParticles);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 'maintenance',
      icon: '🔧',
      title: t.services.maintenance.title,
      description: t.services.maintenance.description,
      features: t.services.maintenance.features,
      gradient: 'from-blue-600 via-blue-500 to-cyan-500',
      price: 'Desde $899',
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=300&fit=crop&crop=center',
      popularity: '95%',
      estimatedTime: '2-3 horas'
    },
    {
      id: 'repairs',
      icon: '⚙️',
      title: t.services.repairs.title,
      description: t.services.repairs.description,
      features: t.services.repairs.features,
      gradient: 'from-red-600 via-red-500 to-orange-500',
      price: 'Desde $1,299',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop&crop=center',
      popularity: '88%',
      estimatedTime: '3-5 horas'
    },
    {
      id: 'diagnostics',
      icon: '📱',
      title: t.services.diagnostics.title,
      description: t.services.diagnostics.description,
      features: t.services.diagnostics.features,
      gradient: 'from-green-600 via-green-500 to-emerald-500',
      price: 'Desde $299',
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop&crop=center',
      popularity: '92%',
      estimatedTime: '30-60 min'
    },
    {
      id: 'painting',
      icon: '🎨',
      title: t.services.painting.title,
      description: t.services.painting.description,
      features: t.services.painting.features,
      gradient: 'from-purple-600 via-purple-500 to-pink-500',
      price: 'Desde $2,999',
      image: 'https://images.unsplash.com/photo-1632823469455-e8ac2b1ce0c3?w=400&h=300&fit=crop&crop=center',
      popularity: '78%',
      estimatedTime: '1-3 días'
    },
    {
      id: 'electrical',
      icon: '⚡',
      title: t.services.electrical.title,
      description: t.services.electrical.description,
      features: t.services.electrical.features,
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      price: 'Desde $599',
      image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=300&fit=crop&crop=center',
      popularity: '85%',
      estimatedTime: '1-4 horas'
    },
    {
      id: 'airConditioning',
      icon: '❄️',
      title: t.services.airConditioning.title,
      description: t.services.airConditioning.description,
      features: t.services.airConditioning.features,
      gradient: 'from-cyan-500 via-blue-500 to-indigo-500',
      price: 'Desde $799',
      image: 'https://images.unsplash.com/photo-1601758123927-4c4d6eeb8d4a?w=400&h=300&fit=crop&crop=center',
      popularity: '89%',
      estimatedTime: '1-2 horas'
    }
  ];

  const handleServiceClick = (serviceId) => {
    window.location.href = `/servicios#${serviceId}`;
  };

  const handleServiceHover = (serviceId) => {
    setHoveredService(serviceId);
  };

  const handleServiceLeave = () => {
    setHoveredService(null);
  };

  return (
    <section 
      ref={sectionRef}
      className={styles.services} 
      id="servicios"
    >
      {/* Partículas de fondo */}
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
              opacity: particle.opacity,
              animationDuration: `${particle.speed * 4}s`,
              animationDelay: `${particle.id * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Fondo geométrico */}
      <div className={styles.geometricBg}>
        <div className={styles.geometricShape} style={{ '--delay': '0s' }}></div>
        <div className={styles.geometricShape} style={{ '--delay': '2s' }}></div>
        <div className={styles.geometricShape} style={{ '--delay': '4s' }}></div>
      </div>

      <div className={styles.container}>
        {/* Header épico */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          {/* Badge de sección */}
          <div className={styles.sectionBadge}>
            <span className={styles.badgeIcon}>🔧</span>
            <span className={styles.badgeText}>
              {ingles ? "OUR EXPERTISE" : "NUESTRA EXPERIENCIA"}
            </span>
          </div>

          <h2 className={styles.title}>{t.services.title}</h2>
          <p className={styles.subtitle}>{t.services.subtitle}</p>

          {/* Estadísticas del taller */}
          <div className={styles.statsRow}>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>⭐</div>
              <div className={styles.statValue}>4.9</div>
              <div className={styles.statLabel}>
                {ingles ? "Rating" : "Calificación"}
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>🔧</div>
              <div className={styles.statValue}>5000+</div>
              <div className={styles.statLabel}>
                {ingles ? "Services" : "Servicios"}
              </div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statIcon}>⏱️</div>
              <div className={styles.statValue}>24/7</div>
              <div className={styles.statLabel}>
                {ingles ? "Emergency" : "Emergencia"}
              </div>
            </div>
          </div>
        </div>

        {/* Grid de servicios épico */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${styles.serviceCard} ${isVisible ? styles.fadeInUp : ''}`}
              style={{ '--delay': `${index * 150}ms` }}
              onClick={() => handleServiceClick(service.id)}
              onMouseEnter={() => handleServiceHover(service.id)}
              onMouseLeave={handleServiceLeave}
            >
              {/* Imagen de fondo */}
              <div className={styles.cardBackground}>
                <img 
                  src={service.image} 
                  alt={service.title}
                  className={styles.cardImage}
                />
                <div className={styles.cardOverlay}></div>
              </div>

              {/* Badge de popularidad */}
              <div className={styles.popularityBadge}>
                <span className={styles.popularityIcon}>👍</span>
                <span className={styles.popularityText}>{service.popularity}</span>
              </div>

              {/* Contenido principal */}
              <div className={styles.cardContent}>
                {/* Header de la card */}
                <div className={styles.cardHeader}>
                  <div className={styles.serviceIconContainer}>
                    <span className={styles.serviceIcon}>{service.icon}</span>
                    <div className={styles.iconGlow}></div>
                  </div>
                  <div className={styles.serviceInfo}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <div className={styles.serviceTime}>
                      <span className={styles.timeIcon}>⏱️</span>
                      <span>{service.estimatedTime}</span>
                    </div>
                  </div>
                </div>

                {/* Descripción */}
                <p className={styles.serviceDescription}>
                  {service.description}
                </p>

                {/* Características */}
                <div className={styles.serviceFeatures}>
                  {service.features.map((feature, idx) => (
                    <div key={idx} className={styles.featureItem}>
                      <span className={styles.featureIcon}>✓</span>
                      <span className={styles.featureText}>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Footer de la card */}
                <div className={styles.cardFooter}>
                  <div className={styles.servicePrice}>
                    <span className={styles.priceLabel}>
                      {ingles ? "Starting at" : "Desde"}
                    </span>
                    <span className={styles.priceValue}>{service.price}</span>
                  </div>
                  <button className={styles.serviceButton}>
                    <span>{ingles ? "Learn More" : "Saber Más"}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Efectos hover */}
              <div className={styles.cardEffects}>
                <div className={styles.cardShine}></div>
                <div className={styles.cardGlow}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section épica */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.ctaBackground}>
            <img 
              src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&h=400&fit=crop&crop=center" 
              alt="Taller Alex" 
              className={styles.ctaImage}
            />
            <div className={styles.ctaOverlay}></div>
          </div>

          <div className={styles.ctaContent}>
            <div className={styles.ctaIcon}>
              <span>🏆</span>
            </div>
            <h3 className={styles.ctaTitle}>
              {ingles ? "Need a custom service?" : "¿Necesitas un servicio personalizado?"}
            </h3>
            <p className={styles.ctaDescription}>
              {ingles 
                ? "Contact us and we'll create a maintenance plan tailored to your vehicle with special pricing."
                : "Contáctanos y crearemos un plan de mantenimiento a la medida de tu vehículo con precios especiales."
              }
            </p>
            
            <div className={styles.ctaButtons}>
              <button className={styles.ctaPrimary}>
                <span>{ingles ? "Get Quote" : "Obtener Cotización"}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className={styles.ctaSecondary}>
                <span>{ingles ? "Call Now" : "Llamar Ahora"}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </button>
            </div>

            {/* Información de contacto rápido */}
            <div className={styles.quickContact}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📞</span>
                <span className={styles.contactText}>664 630 4093</span>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>⏰</span>
                <span className={styles.contactText}>
                  {ingles ? "Mon-Sat 8AM-6PM" : "Lun-Sáb 8AM-6PM"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexSeccion2;
