import React from 'react';
import { useStore } from '@nanostores/react';
import { currentLanguage } from '../../../data/signals.jsx';
import { translationsIndex } from '../../../data/translationsIndex.js';
import styles from '../css/indexSeccion3.module.css';

const IndexSeccion3 = () => {
  const lang = useStore(currentLanguage);
  const t = translationsIndex[lang];

  const promotions = [
    {
      id: 1,
      badge: t.promotions.promotions[0].badge,
      title: t.promotions.promotions[0].title,
      description: t.promotions.promotions[0].description,
      originalPrice: t.promotions.promotions[0].originalPrice,
      discountPrice: t.promotions.promotions[0].discountPrice,
      discount: t.promotions.promotions[0].discount,
      validUntil: t.promotions.promotions[0].validUntil,
      icon: '🔧',
      color: 'primary'
    },
    {
      id: 2,
      badge: t.promotions.promotions[1].badge,
      title: t.promotions.promotions[1].title,
      description: t.promotions.promotions[1].description,
      originalPrice: t.promotions.promotions[1].originalPrice,
      discountPrice: t.promotions.promotions[1].discountPrice,
      discount: t.promotions.promotions[1].discount,
      validUntil: t.promotions.promotions[1].validUntil,
      icon: '🎨',
      color: 'secondary'
    },
    {
      id: 3,
      badge: t.promotions.promotions[2].badge,
      title: t.promotions.promotions[2].title,
      description: t.promotions.promotions[2].description,
      originalPrice: t.promotions.promotions[2].originalPrice,
      discountPrice: t.promotions.promotions[2].discountPrice,
      discount: t.promotions.promotions[2].discount,
      validUntil: t.promotions.promotions[2].validUntil,
      icon: '💻',
      color: 'accent'
    }
  ];

  return (
    <section className={styles.promotionsSection}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerBadge}>
            <span className={styles.badgeIcon}>🔥</span>
            <span>{t.promotions.badge}</span>
          </div>
          <h2 className={styles.sectionTitle}>
            {t.promotions.title}
          </h2>
          <p className={styles.sectionSubtitle}>
            {t.promotions.subtitle}
          </p>
        </div>

        {/* Promotions Grid */}
        <div className={styles.promotionsGrid}>
          {promotions.map((promo) => (
            <div key={promo.id} className={`${styles.promotionCard} ${styles[promo.color]}`}>
              
              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.discountBadge}>
                  {promo.discount}
                </div>
                <div className={styles.promoBadge}>
                  {promo.badge}
                </div>
              </div>

              {/* Card Icon */}
              <div className={styles.cardIcon}>
                {promo.icon}
              </div>

              {/* Card Content */}
              <div className={styles.cardContent}>
                <h3 className={styles.promoTitle}>
                  {promo.title}
                </h3>
                <p className={styles.promoDescription}>
                  {promo.description}
                </p>

                {/* Pricing */}
                <div className={styles.pricing}>
                  <span className={styles.originalPrice}>
                    {promo.originalPrice}
                  </span>
                  <span className={styles.discountPrice}>
                    {promo.discountPrice}
                  </span>
                </div>

                {/* Valid Until */}
                <div className={styles.validity}>
                  <span className={styles.validIcon}>⏰</span>
                  <span>{promo.validUntil}</span>
                </div>
              </div>

              {/* Card Actions */}
              <div className={styles.cardActions}>
                <button className={styles.claimButton}>
                  {t.promotions.claimOffer}
                </button>
                <button className={styles.detailsButton}>
                  {t.promotions.moreDetails}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <h3>{t.promotions.cta.title}</h3>
            <p>{t.promotions.cta.description}</p>
            <div className={styles.ctaButtons}>
              <button className={styles.whatsappButton}>
                📱 {t.promotions.cta.whatsapp}
              </button>
              <button className={styles.callButton}>
                📞 {t.promotions.cta.call}
              </button>
            </div>
          </div>
          
          <div className={styles.ctaStats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>{t.promotions.stats.clients}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>95%</span>
              <span className={styles.statLabel}>{t.promotions.stats.satisfaction}</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>7</span>
              <span className={styles.statLabel}>{t.promotions.stats.years}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndexSeccion3;