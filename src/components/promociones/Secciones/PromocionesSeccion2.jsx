// PromocionesSeccion2.jsx - Grid épico de promociones principales
import React, { useEffect, useState, useRef } from 'react';
import { useStore } from '@nanostores/react';
import styles from '../css/PromocionesSeccion2.module.css';
import { isEnglish } from '../../../data/variables';
import { translationsPromociones } from '../../../data/translationsPromociones.js';

const PromocionesSeccion2 = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsPromociones.en : translationsPromociones.es;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            
            // Animar cards una por una
            setTimeout(() => {
              t.mainPromos.promotions.forEach((_, index) => {
                setTimeout(() => {
                  setVisibleCards(prev => new Set([...prev, index]));
                }, index * 200);
              });
            }, 500);
          }
        });
      },
      { threshold: 0.2 }
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

  const handleWhatsApp = (promo) => {
    const phone = "525555555555";
    const message = encodeURIComponent(
      `¡Hola! Me interesa la promoción de ${promo.title} por ${promo.discountPrice}. ¿Podrían darme más información?`
    );
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const calculateSavings = (original, discount) => {
    const originalNum = parseInt(original.replace(/[^0-9]/g, ''));
    const discountNum = parseInt(discount.replace(/[^0-9]/g, ''));
    return originalNum - discountNum;
  };

  return (
    <section 
      ref={sectionRef}
      className={`${styles.promosSection} ${isVisible ? styles.visible : ''}`}
      data-section="promotions"
    >
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t.mainPromos.title}
            <div className={styles.titleGlow}></div>
          </h2>
          <p className={styles.subtitle}>
            {t.mainPromos.subtitle}
          </p>
        </div>

        {/* Promotions Grid */}
        <div className={styles.promosGrid}>
          {t.mainPromos.promotions.map((promo, index) => (
            <div
              key={promo.id}
              className={`${styles.promoCard} ${visibleCards.has(index) ? styles.visible : ''} ${hoveredCard === index ? styles.hovered : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card Badge */}
              <div className={styles.cardBadge}>
                {promo.badge}
              </div>

              {/* Discount Badge */}
              <div className={styles.discountBadge}>
                {promo.discount}
              </div>

              {/* Image Container */}
              <div className={styles.imageContainer}>
                <div className={styles.promoImage}>
                  <img 
                    src={
                      index === 0 ? '/image/global/antesdespues/motordes.png' :
                      index === 1 ? '/image/global/aireacondicionado.png' :
                      '/image/global/pintando1.png'
                    }
                    alt={promo.title}
                    className={styles.promoImageImg}
                    loading="lazy"
                  />
                  <div className={styles.imageOverlay}></div>
                </div>
                <div className={styles.imageGlow}></div>
              </div>

              {/* Content */}
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>
                  {promo.title}
                </h3>

                <p className={styles.cardDescription}>
                  {promo.description}
                </p>

                {/* Includes List */}
                <div className={styles.includesList}>
                  <span className={styles.includesLabel}>
                    {t.common.includes}
                  </span>
                  <ul className={styles.includesItems}>
                    {promo.includes.slice(0, 3).map((item, idx) => (
                      <li key={idx} className={styles.includeItem}>
                        <span className={styles.checkIcon}>✓</span>
                        {item}
                      </li>
                    ))}
                    {promo.includes.length > 3 && (
                      <li className={styles.includeItem}>
                        <span className={styles.checkIcon}>+</span>
                        {promo.includes.length - 3} más...
                      </li>
                    )}
                  </ul>
                </div>

                {/* Pricing */}
                <div className={styles.pricing}>
                  <div className={styles.originalPrice}>
                    {promo.originalPrice} {t.common.currency}
                  </div>
                  <div className={styles.discountPrice}>
                    {promo.discountPrice} {t.common.currency}
                  </div>
                  <div className={styles.savings}>
                    {t.common.save}: ${calculateSavings(promo.originalPrice, promo.discountPrice)}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  className={styles.ctaButton}
                  onClick={() => handleWhatsApp(promo)}
                >
                  <span className={styles.buttonText}>
                    {t.mainPromos.cta}
                  </span>
                  <span className={styles.buttonIcon}>📱</span>
                  <div className={styles.buttonGlow}></div>
                </button>

                {/* Warranty */}
                <div className={styles.warranty}>
                  <span className={styles.warrantyIcon}>🛡️</span>
                  {t.mainPromos.warranty}
                </div>
              </div>

              {/* Card Glow Effect */}
              <div className={styles.cardGlow}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCta}>
          <p className={styles.ctaText}>
            ¿No encuentras lo que buscas? 
            <span className={styles.ctaHighlight}> Contáctanos para una cotización personalizada</span>
          </p>
          <button className={styles.secondaryCta}>
            Cotización Personalizada
          </button>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.geometricShape} style={{top: '10%', left: '5%'}}></div>
        <div className={styles.geometricShape} style={{top: '60%', right: '10%'}}></div>
        <div className={styles.geometricShape} style={{bottom: '20%', left: '15%'}}></div>
      </div>
    </section>
  );
};

export default PromocionesSeccion2;
