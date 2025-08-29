// IndexSeccion4.jsx - Beneficios Diferenciales Section
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import styles from '../css/indexSeccion4.module.css';

const IndexSeccion4 = () => {
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

  const benefits = [
    {
      icon: '🏆',
      title: ingles ? '7+ Years of Experience' : '7+ Años de Experiencia',
      description: ingles 
        ? 'We have been providing quality automotive services since 2017.'
        : 'Brindamos servicios automotrices de calidad desde 2017.',
      color: '#e91e63'
    },
    {
      icon: '🔧',
      title: ingles ? 'Certified Technicians' : 'Técnicos Certificados',
      description: ingles 
        ? 'Our team is trained and certified in the latest automotive technologies.'
        : 'Nuestro equipo está capacitado y certificado en las últimas tecnologías automotrices.',
      color: '#ff5722'
    },
    {
      icon: '⚡',
      title: ingles ? 'Fast Service' : 'Servicio Rápido',
      description: ingles 
        ? 'We guarantee quick and efficient service without compromising quality.'
        : 'Garantizamos un servicio rápido y eficiente sin comprometer la calidad.',
      color: '#4caf50'
    },
    {
      icon: '💰',
      title: ingles ? 'Fair Prices' : 'Precios Justos',
      description: ingles 
        ? 'Competitive prices with transparent quotes and no hidden fees.'
        : 'Precios competitivos con cotizaciones transparentes y sin costos ocultos.',
      color: '#ff9800'
    },
    {
      icon: '🛡️',
      title: ingles ? 'Warranty Included' : 'Garantía Incluida',
      description: ingles 
        ? 'All our services include warranty for your peace of mind.'
        : 'Todos nuestros servicios incluyen garantía para tu tranquilidad.',
      color: '#2196f3'
    },
    {
      icon: '📱',
      title: ingles ? 'Real-time Updates' : 'Actualizaciones en Tiempo Real',
      description: ingles 
        ? 'Stay informed about your vehicle\'s status through our mobile app.'
        : 'Mantente informado del estado de tu vehículo a través de nuestra app móvil.',
      color: '#9c27b0'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={styles.section} 
      id="beneficios"
    >
      <div className={styles.container}>
        <div className={`${styles.header} ${isVisible ? styles.fadeInUp : ''}`}>
          <h2 className={styles.title}>
            {ingles ? 'Why Choose Alex Auto Shop?' : '¿Por Qué Elegir Alex Taller Mecánico?'}
          </h2>
          <p className={styles.subtitle}>
            {ingles 
              ? 'We offer differentiating benefits that make us the best option for your vehicle'
              : 'Ofrecemos beneficios diferenciales que nos convierten en la mejor opción para tu vehículo'
            }
          </p>
        </div>

        <div className={`${styles.grid} ${isVisible ? styles.staggerIn : ''}`}>
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ 
                animationDelay: `${index * 0.1}s`,
                '--accent-color': benefit.color 
              }}
            >
              <div className={styles.icon}>
                {benefit.icon}
              </div>
              <h3 className={styles.cardTitle}>
                {benefit.title}
              </h3>
              <p className={styles.cardDescription}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className={`${styles.statsGrid} ${isVisible ? styles.fadeInUp : ''}`}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>2,000+</div>
            <div className={styles.statLabel}>
              {ingles ? 'Satisfied Customers' : 'Clientes Satisfechos'}
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>95%</div>
            <div className={styles.statLabel}>
              {ingles ? 'Customer Satisfaction' : 'Satisfacción del Cliente'}
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>24h</div>
            <div className={styles.statLabel}>
              {ingles ? 'Average Service Time' : 'Tiempo Promedio de Servicio'}
            </div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>100%</div>
            <div className={styles.statLabel}>
              {ingles ? 'Warranty Coverage' : 'Cobertura de Garantía'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexSeccion4;