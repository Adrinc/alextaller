// ServiceCard.jsx - Tarjeta de Servicio con Neumorphism Claro
import { useState, useEffect } from 'react';
import styles from './ServiceCard.module.css';

export default function ServiceCard({ 
  service, 
  isVisible, 
  delay, 
  onServiceClick, 
  t 
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsAnimated(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div 
      className={`${styles.serviceCard} ${isAnimated ? styles.animate : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onServiceClick(service.id)}
    >
      {/* Header con icono y precio */}
      <div className={styles.cardHeader}>
        <div className={`${styles.iconContainer} ${isHovered ? styles.iconHover : ''}`}>
          <div className={styles.iconBackground}>
            <span className={styles.icon}>{service.icon}</span>
          </div>
          <div className={styles.iconGlow}></div>
        </div>
        
        <div className={styles.priceTag}>
          <span className={styles.priceText}>{service.price}</span>
          <div className={styles.pricePulse}></div>
        </div>
      </div>

      {/* Contenido */}
      <div className={styles.cardContent}>
        <h3 className={styles.serviceTitle}>
          {t.services[service.id].title}
        </h3>
        
        <p className={styles.serviceDescription}>
          {t.services[service.id].description}
        </p>

        {/* Lista de características */}
        <ul className={styles.featuresList}>
          {t.services[service.id].features.map((feature, idx) => (
            <li key={idx} className={styles.featureItem}>
              <div className={styles.checkContainer}>
                <svg className={styles.checkIcon} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer con botón */}
      <div className={styles.cardFooter}>
        <button className={`${styles.scheduleBtn} ${isHovered ? styles.btnHover : ''}`}>
          <span className={styles.btnText}>{t.common.schedule}</span>
          <div className={styles.btnIconContainer}>
            <svg className={styles.arrowIcon} viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <div className={styles.btnRipple}></div>
        </button>
      </div>

      {/* Efectos decorativos */}
      <div className={styles.cardAccents}>
        <div className={styles.topAccent}></div>
        <div className={styles.sideAccent}></div>
      </div>

      {/* Efecto de brillo sutil */}
      <div className={`${styles.shimmerEffect} ${isHovered ? styles.shimmerActive : ''}`}></div>
    </div>
  );
}
