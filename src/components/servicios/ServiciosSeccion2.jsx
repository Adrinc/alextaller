import React from 'react';
import { useStore } from '@nanostores/react';
import { currentLanguage } from '../../data/signals.jsx';
import { translationsServicios } from '../../data/translationsServicios.js';
import styles from '../servicios/css/ServiciosSeccion2.module.css';

const ServiciosSeccion2 = () => {
  const lang = useStore(currentLanguage);
  const t = translationsServicios[lang];

  const maintenanceServices = [
    { icon: '🛢️', title: t.maintenance.services[0] },
    { icon: '🔍', title: t.maintenance.services[1] },
    { icon: '💻', title: t.maintenance.services[2] },
    { icon: '🛑', title: t.maintenance.services[3] },
    { icon: '⚙️', title: t.maintenance.services[4] },
    { icon: '⚡', title: t.maintenance.services[5] },
    { icon: '🔗', title: t.maintenance.services[6] },
    { icon: '🧪', title: t.maintenance.services[7] }
  ];

  const repairServices = [
    { icon: '🔧', title: t.repairs.services[0] },
    { icon: '⚙️', title: t.repairs.services[1] },
    { icon: '🛑', title: t.repairs.services[2] },
    { icon: '🚗', title: t.repairs.services[3] },
    { icon: '💨', title: t.repairs.services[4] },
    { icon: '🌡️', title: t.repairs.services[5] },
    { icon: '🔄', title: t.repairs.services[6] },
    { icon: '⚡', title: t.repairs.services[7] }
  ];

  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>
        
        {/* Mantenimiento Preventivo */}
        <div className={styles.serviceBlock}>
          <div className={styles.serviceContent}>
            <div className={styles.serviceText}>
              <h2 className={styles.serviceTitle}>
                {t.maintenance.title}
              </h2>
              <h3 className={styles.serviceSubtitle}>
                {t.maintenance.subtitle}
              </h3>
              <p className={styles.serviceDescription}>
                {t.maintenance.description}
              </p>
              
              <div className={styles.serviceGrid}>
                {maintenanceServices.map((service, index) => (
                  <div key={index} className={styles.serviceItem}>
                    <span className={styles.serviceIcon}>{service.icon}</span>
                    <span>{service.title}</span>
                  </div>
                ))}
              </div>

              <div className={styles.pricingCards}>
                <div className={styles.priceCard}>
                  <h4>{t.maintenance.pricing.basic.name}</h4>
                  <div className={styles.price}>{t.maintenance.pricing.basic.price}</div>
                  <div className={styles.duration}>{t.maintenance.pricing.basic.duration}</div>
                </div>
                <div className={`${styles.priceCard} ${styles.featured}`}>
                  <h4>{t.maintenance.pricing.complete.name}</h4>
                  <div className={styles.price}>{t.maintenance.pricing.complete.price}</div>
                  <div className={styles.duration}>{t.maintenance.pricing.complete.duration}</div>
                </div>
                <div className={styles.priceCard}>
                  <h4>{t.maintenance.pricing.premium.name}</h4>
                  <div className={styles.price}>{t.maintenance.pricing.premium.price}</div>
                  <div className={styles.duration}>{t.maintenance.pricing.premium.duration}</div>
                </div>
              </div>

              <button className={styles.ctaButton}>
                {t.common.schedule}
              </button>
            </div>
            
            <div className={styles.serviceImage}>
              <img src="/public/image/global/equipment.png" alt="Mantenimiento" />
              <div className={styles.guaranteeBadge}>
                <span>✓ {t.common.guarantee}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reparaciones Mecánicas */}
        <div className={`${styles.serviceBlock} ${styles.reverse}`}>
          <div className={styles.serviceContent}>
            <div className={styles.serviceImage}>
              <img src="/public/image/global/robot3.png" alt="Reparaciones" />
              <div className={styles.guaranteeBadge}>
                <span>✓ {t.common.freeEstimate}</span>
              </div>
            </div>
            
            <div className={styles.serviceText}>
              <h2 className={styles.serviceTitle}>
                {t.repairs.title}
              </h2>
              <h3 className={styles.serviceSubtitle}>
                {t.repairs.subtitle}
              </h3>
              <p className={styles.serviceDescription}>
                {t.repairs.description}
              </p>
              
              <div className={styles.serviceGrid}>
                {repairServices.map((service, index) => (
                  <div key={index} className={styles.serviceItem}>
                    <span className={styles.serviceIcon}>{service.icon}</span>
                    <span>{service.title}</span>
                  </div>
                ))}
              </div>

              <div className={styles.pricingCards}>
                <div className={styles.priceCard}>
                  <h4>{t.repairs.pricing.diagnosis.name}</h4>
                  <div className={styles.price}>{t.repairs.pricing.diagnosis.price}</div>
                  <div className={styles.duration}>{t.repairs.pricing.diagnosis.duration}</div>
                </div>
                <div className={styles.priceCard}>
                  <h4>{t.repairs.pricing.minor.name}</h4>
                  <div className={styles.price}>{t.repairs.pricing.minor.price}</div>
                  <div className={styles.duration}>{t.repairs.pricing.minor.duration}</div>
                </div>
                <div className={`${styles.priceCard} ${styles.featured}`}>
                  <h4>{t.repairs.pricing.major.name}</h4>
                  <div className={styles.price}>{t.repairs.pricing.major.price}</div>
                  <div className={styles.duration}>{t.repairs.pricing.major.duration}</div>
                </div>
              </div>

              <button className={styles.ctaButton}>
                {t.common.contact}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiciosSeccion2;
