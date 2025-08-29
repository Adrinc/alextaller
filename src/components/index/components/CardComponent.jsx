// CardComponent.jsx - Tarjetas Neumorphism ÉPICAS
import { useState, useEffect } from 'react';
import styles from './CardComponent.module.css';

export default function CardComponent({ 
  icon, 
  title, 
  description, 
  price, 
  originalPrice, 
  discount, 
  isVisible, 
  delay, 
  isEnglish 
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
      className={`${styles.card} ${isAnimated ? styles.animate : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efecto de neon hover */}
      <div className={`${styles.neonGlow} ${isHovered ? styles.active : ''}`}></div>
      
      {/* Badge de descuento */}
      <div className={styles.discountBadge}>
        <div className={styles.discountText}>{discount}</div>
        <div className={styles.discountPulse}></div>
      </div>

      {/* Header con icono */}
      <div className={styles.cardHeader}>
        <div className={styles.iconContainer}>
          <div className={styles.iconGlow}></div>
          <div className={styles.icon}>{icon}</div>
          <div className={styles.iconRing}></div>
        </div>
      </div>

      {/* Contenido */}
      <div className={styles.cardContent}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>

        {/* Pricing con efectos */}
        <div className={styles.pricing}>
          <div className={styles.originalPrice}>
            <span>{originalPrice}</span>
            <div className={styles.strikethrough}></div>
          </div>
          <div className={styles.currentPrice}>
            <span className={styles.currency}>$</span>
            <span className={styles.amount}>{price.replace('$', '')}</span>
          </div>
        </div>

        {/* Botón con neumorphism */}
        <button className={`${styles.actionBtn} ${isHovered ? styles.btnHover : ''}`}>
          <span className={styles.btnText}>
            {isEnglish ? "CLAIM OFFER" : "OBTENER OFERTA"}
          </span>
          <div className={styles.btnGlow}></div>
          <div className={styles.btnRipple}></div>
        </button>

        {/* Indicador de urgencia */}
        <div className={styles.urgencyIndicator}>
          <div className={styles.urgencyBar}>
            <div className={styles.urgencyFill}></div>
          </div>
          <span className={styles.urgencyText}>
            {isEnglish ? "Only 3 spots left!" : "¡Solo quedan 3 lugares!"}
          </span>
        </div>
      </div>

      {/* Efectos de partículas */}
      <div className={styles.particles}>
        {[...Array(8)].map((_, i) => (
          <div 
            key={i} 
            className={styles.particle}
            style={{
              '--delay': `${i * 0.2}s`,
              '--x': `${Math.random() * 100}%`,
              '--y': `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>

      {/* Efecto de brillo */}
      <div className={`${styles.shineEffect} ${isHovered ? styles.shine : ''}`}></div>
    </div>
  );
}
