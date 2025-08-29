// IndexSeccion4.jsx - Beneficios Diferenciales ÉPICOS para Alex Taller Mecánico
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import styles from '../css/indexSeccion4.module.css';

const IndexSeccion4 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en : translationsIndex.es;
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Auto-progress through steps
          const stepInterval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 4);
          }, 3000);

          return () => clearInterval(stepInterval);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: '🏆',
      title: ingles ? '30+ Years of Excellence' : '30+ Años de Excelencia',
      description: ingles 
        ? 'Three decades providing quality automotive services with proven expertise and customer satisfaction.'
        : 'Tres décadas brindando servicios automotrices de calidad con experiencia comprobada y satisfacción del cliente.',
      color: '#e91e63',
      stats: ingles ? '5000+ Cars Serviced' : '5000+ Autos Atendidos',
      image: 'https://images.unsplash.com/photo-1486415008924-3b24b2e43b0c?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: '🔧',
      title: ingles ? 'ASE Certified Technicians' : 'Técnicos Certificados ASE',
      description: ingles 
        ? 'Our team is trained and certified in the latest automotive technologies and repair techniques.'
        : 'Nuestro equipo está capacitado y certificado en las últimas tecnologías automotrices y técnicas de reparación.',
      color: '#ff5722',
      stats: ingles ? '8 Certified Technicians' : '8 Técnicos Certificados',
      image: 'https://images.unsplash.com/photo-1486415008924-3b24b2e43b0c?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: '⚡',
      title: ingles ? 'Same Day Service' : 'Servicio el Mismo Día',
      description: ingles 
        ? 'We guarantee quick and efficient service without compromising quality. Most repairs completed same day.'
        : 'Garantizamos un servicio rápido y eficiente sin comprometer la calidad. La mayoría de reparaciones el mismo día.',
      color: '#4caf50',
      stats: ingles ? '95% Same Day Completion' : '95% Terminado el Mismo Día',
      image: 'https://images.unsplash.com/photo-1469285994282-454ceb49e63c?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: '💰',
      title: ingles ? 'Transparent Fair Pricing' : 'Precios Justos y Transparentes',
      description: ingles 
        ? 'Competitive prices with transparent quotes and no hidden fees. Free estimates on all major repairs.'
        : 'Precios competitivos con cotizaciones transparentes y sin costos ocultos. Estimaciones gratuitas en reparaciones mayores.',
      color: '#ff9800',
      stats: ingles ? 'Free Estimates' : 'Estimaciones Gratuitas',
      image: 'https://images.unsplash.com/photo-1441458525716-98a1ce2de1b0?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: '🛡️',
      title: ingles ? 'Comprehensive Warranty' : 'Garantía Integral',
      description: ingles 
        ? 'All our services include comprehensive warranty for your complete peace of mind and protection.'
        : 'Todos nuestros servicios incluyen garantía integral para tu tranquilidad total y protección.',
      color: '#2196f3',
      stats: ingles ? '12 Month Warranty' : 'Garantía 12 Meses',
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: '📱',
      title: ingles ? 'Real-time Updates' : 'Actualizaciones en Tiempo Real',
      description: ingles 
        ? 'Stay informed about your vehicle\'s status through our mobile app and SMS notifications.'
        : 'Mantente informado del estado de tu vehículo a través de nuestra app móvil y notificaciones SMS.',
      color: '#9c27b0',
      stats: ingles ? 'Digital Service Tracking' : 'Seguimiento Digital del Servicio',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop&crop=center'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: ingles ? 'Diagnosis' : 'Diagnóstico',
      description: ingles ? 'Complete computerized diagnosis' : 'Diagnóstico computarizado completo',
      icon: '🔍',
      duration: '30 min'
    },
    {
      number: '02',
      title: ingles ? 'Quote' : 'Cotización',
      description: ingles ? 'Transparent detailed quote' : 'Cotización detallada transparente',
      icon: '📋',
      duration: '15 min'
    },
    {
      number: '03',
      title: ingles ? 'Repair' : 'Reparación',
      description: ingles ? 'Quality repair with original parts' : 'Reparación de calidad con partes originales',
      icon: '🔧',
      duration: '2-4 hrs'
    },
    {
      number: '04',
      title: ingles ? 'Testing' : 'Pruebas',
      description: ingles ? 'Final testing and quality check' : 'Pruebas finales y control de calidad',
      icon: '✅',
      duration: '30 min'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={styles.section} 
      id="beneficios"
    >
      {/* Partículas y efectos de fondo */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb} style={{ '--delay': '0s' }}></div>
        <div className={styles.gradientOrb} style={{ '--delay': '2s' }}></div>
        <div className={styles.gradientOrb} style={{ '--delay': '4s' }}></div>
      </div>

      <div className={styles.container}>
        {/* Header con proceso de servicio */}
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.processSection}>
            <div className={styles.processBadge}>
              <span className={styles.badgeIcon}>⚙️</span>
              <span className={styles.badgeText}>
                {ingles ? "OUR PROCESS" : "NUESTRO PROCESO"}
              </span>
            </div>

            <h2 className={styles.processTitle}>
              {ingles ? "How We Work" : "Cómo Trabajamos"}
            </h2>
            <p className={styles.processSubtitle}>
              {ingles 
                ? "A transparent and efficient 4-step process that guarantees quality results"
                : "Un proceso transparente y eficiente de 4 pasos que garantiza resultados de calidad"
              }
            </p>

            {/* Pasos del proceso */}
            <div className={styles.processSteps}>
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`${styles.processStep} ${index === activeStep ? styles.active : ''} ${index < activeStep ? styles.completed : ''}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={styles.stepNumber}>{step.number}</div>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>{step.title}</h4>
                    <p className={styles.stepDescription}>{step.description}</p>
                    <span className={styles.stepDuration}>{step.duration}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className={styles.stepConnector}>
                      <div className={styles.connectorLine}></div>
                      <div className={styles.connectorArrow}>→</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Beneficios principales */}
        <div className={styles.benefitsSection}>
          <div className={styles.benefitsHeader}>
            <div className={styles.benefitsBadge}>
              <span className={styles.badgeIcon}>🏆</span>
              <span className={styles.badgeText}>
                {ingles ? "WHY CHOOSE US" : "POR QUÉ ELEGIRNOS"}
              </span>
            </div>
            
            <h2 className={styles.benefitsTitle}>
              {ingles ? "Alex Auto Shop Advantages" : "Ventajas de Alex Taller Mecánico"}
            </h2>
            <p className={styles.benefitsSubtitle}>
              {ingles 
                ? "Discover what makes us the preferred choice for thousands of satisfied customers"
                : "Descubre lo que nos convierte en la opción preferida de miles de clientes satisfechos"
              }
            </p>
          </div>

          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${styles.benefitCard} ${isVisible ? styles.fadeInUp : ''} ${hoveredBenefit === index ? styles.hovered : ''}`}
                style={{ 
                  '--delay': `${index * 150}ms`,
                  '--accent-color': benefit.color 
                }}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                {/* Imagen de fondo */}
                <div className={styles.cardBackground}>
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay}></div>
                </div>

                {/* Contenido de la card */}
                <div className={styles.cardContent}>
                  <div className={styles.benefitIconContainer}>
                    <span className={styles.benefitIcon}>{benefit.icon}</span>
                    <div className={styles.iconRing}></div>
                  </div>
                  
                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>
                  
                  <div className={styles.benefitStats}>
                    <span className={styles.statsIcon}>📊</span>
                    <span className={styles.statsText}>{benefit.stats}</span>
                  </div>
                </div>

                {/* Efectos de hover */}
                <div className={styles.cardEffects}>
                  <div className={styles.cardGlow}></div>
                  <div className={styles.cardShine}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sección de testimonios rápidos */}
        <div className={`${styles.testimonialsSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <div className={styles.rating}>⭐⭐⭐⭐⭐</div>
                <p className={styles.testimonialText}>
                  {ingles 
                    ? "Excellent service! They fixed my car quickly and at a fair price. Highly recommended!"
                    : "¡Excelente servicio! Arreglaron mi auto rápido y a precio justo. ¡Muy recomendado!"
                  }
                </p>
                <div className={styles.testimonialAuthor}>
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face" 
                    alt="Cliente" 
                    className={styles.authorImage}
                  />
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>Carlos Mendoza</span>
                    <span className={styles.authorDetail}>Honda Civic 2020</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.testimonialCard}>
              <div className={styles.testimonialContent}>
                <div className={styles.rating}>⭐⭐⭐⭐⭐</div>
                <p className={styles.testimonialText}>
                  {ingles 
                    ? "Professional team, transparent pricing, and quality work. I trust them with all my vehicles."
                    : "Equipo profesional, precios transparentes y trabajo de calidad. Confío en ellos con todos mis vehículos."
                  }
                </p>
                <div className={styles.testimonialAuthor}>
                  <img 
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face" 
                    alt="Cliente" 
                    className={styles.authorImage}
                  />
                  <div className={styles.authorInfo}>
                    <span className={styles.authorName}>María García</span>
                    <span className={styles.authorDetail}>Toyota Camry 2019</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA final */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.ctaContent}>
            <div className={styles.ctaIcon}>
              <span>🚗</span>
            </div>
            <h3 className={styles.ctaTitle}>
              {ingles ? "Ready to Experience the Difference?" : "¿Listo para Experimentar la Diferencia?"}
            </h3>
            <p className={styles.ctaDescription}>
              {ingles 
                ? "Join thousands of satisfied customers who trust Alex Auto Shop for their vehicle needs."
                : "Únete a miles de clientes satisfechos que confían en Alex Taller Mecánico para sus necesidades vehiculares."
              }
            </p>
            <div className={styles.ctaButtons}>
              <button className={styles.ctaPrimary}>
                <span>{ingles ? "Schedule Service" : "Agendar Servicio"}</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className={styles.ctaSecondary}>
                <span>{ingles ? "Call Now" : "Llamar Ahora"}</span>
                <span className={styles.phoneNumber}>664-630-4093</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexSeccion4;
