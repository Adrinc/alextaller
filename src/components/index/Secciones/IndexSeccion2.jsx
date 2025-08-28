// IndexSeccion2.jsx - Servicios Section
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import styles from '../css/indexSeccion2.module.css';

const IndexSeccion2 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en : translationsIndex.es;
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
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
      gradient: 'from-blue-500 to-blue-600',
      price: 'Desde $899'
    },
    {
      id: 'repairs',
      icon: '⚙️',
      gradient: 'from-red-500 to-red-600',
      price: 'Desde $1,299'
    },
    {
      id: 'diagnostics',
      icon: '📱',
      gradient: 'from-green-500 to-green-600',
      price: 'Desde $299'
    },
    {
      id: 'painting',
      icon: '🎨',
      gradient: 'from-purple-500 to-purple-600',
      price: 'Desde $2,999'
    },
    {
      id: 'electrical',
      icon: '⚡',
      gradient: 'from-yellow-500 to-orange-500',
      price: 'Desde $599'
    },
    {
      id: 'airConditioning',
      icon: '❄️',
      gradient: 'from-cyan-500 to-blue-500',
      price: 'Desde $799'
    }
  ];

  const handleServiceClick = (serviceId) => {
    // Aquí se redirigiría a la página de servicios con el servicio específico
    window.location.href = `/servicios#${serviceId}`;
  };

  return (
    <section 
      ref={sectionRef}
      className={styles.services} 
      id="servicios"
    >
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.title}>{t.services.title}</h2>
          <p className={styles.subtitle}>{t.services.subtitle}</p>
        </div>

        <div className={`${styles.servicesGrid} ${isVisible ? styles.staggerIn : ''}`}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={styles.serviceCard}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleServiceClick(service.id)}
            >
              <div className={styles.cardHeader}>
                <div className={`${styles.iconContainer} ${styles[service.gradient]}`}>
                  <span className={styles.icon}>{service.icon}</span>
                </div>
                <div className={styles.price}>{service.price}</div>
              </div>
              
              <div className={styles.cardContent}>
                <h3 className={styles.serviceTitle}>
                  {t.services[service.id].title}
                </h3>
                <p className={styles.serviceDescription}>
                  {t.services[service.id].description}
                </p>
                
                <ul className={styles.featuresList}>
                  {t.services[service.id].features.map((feature, idx) => (
                    <li key={idx} className={styles.featureItem}>
                      <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className={styles.cardFooter}>
                <button className={styles.scheduleBtn}>
                  <span>{t.common.schedule}</span>
                  <svg className={styles.arrowIcon} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.ctaSection} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              {ingles ? "Need a custom service?" : "¿Necesitas un servicio personalizado?"}
            </h3>
            <p className={styles.ctaDescription}>
              {ingles 
                ? "Contact us and we'll create a maintenance plan tailored to your vehicle."
                : "Contáctanos y crearemos un plan de mantenimiento a la medida de tu vehículo."
              }
            </p>
            <button className={styles.ctaButton}>
              {t.common.contact}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexSeccion2;
