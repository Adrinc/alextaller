import React from 'react';
import { useStore } from '@nanostores/react';
import { currentLanguage } from '../../data/signals.jsx';
import { translationsServicios } from '../../data/translationsServicios.js';
import styles from '../servicios/css/ServiciosSeccion4.module.css';

const ServiciosSeccion4 = () => {
  const lang = useStore(currentLanguage);
  const t = translationsServicios[lang];

  const aestheticServices = [
    { icon: '🎨', title: t.aesthetics.services[0], description: 'Pintura profesional con cabina especializada' },
    { icon: '✨', title: t.aesthetics.services[1], description: 'Reparación de daños menores en pintura' },
    { icon: '💎', title: t.aesthetics.services[2], description: 'Tratamiento premium para proteger la pintura' },
    { icon: '🚿', title: t.aesthetics.services[3], description: 'Limpieza profunda interior y exterior' },
    { icon: '🛡️', title: t.aesthetics.services[4], description: 'Películas protectoras y nano cerámicos' },
    { icon: '💡', title: t.aesthetics.services[5], description: 'Renovación de ópticas opacas' },
    { icon: '🪑', title: t.aesthetics.services[6], description: 'Lavado y tratamiento de asientos' },
    { icon: '🧊', title: t.aesthetics.services[7], description: 'Protección de alto rendimiento' }
  ];

  const beforeAfterImages = [
    {
      before: '/public/image/global/robot3.png',
      after: '/public/image/global/equipment.png',
      title: 'Restauración Completa'
    },
    {
      before: '/public/image/global/dashboard1.png', 
      after: '/public/image/global/topology.png',
      title: 'Pintura Especializada'
    }
  ];

  return (
    <section className={styles.aestheticsSection}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            {t.aesthetics.title}
          </h2>
          <h3 className={styles.sectionSubtitle}>
            {t.aesthetics.subtitle}
          </h3>
          <p className={styles.sectionDescription}>
            {t.aesthetics.description}
          </p>
        </div>

        {/* Services Overview */}
        <div className={styles.servicesOverview}>
          <div className={styles.servicesGrid}>
            {aestheticServices.map((service, index) => (
              <div key={index} className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{service.icon}</div>
                <h4 className={styles.serviceTitle}>{service.title}</h4>
                <p className={styles.serviceDescription}>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Before/After Gallery */}
        <div className={styles.gallerySection}>
          <h3 className={styles.galleryTitle}>Resultados que Hablan por Sí Solos</h3>
          <div className={styles.beforeAfterGrid}>
            {beforeAfterImages.map((item, index) => (
              <div key={index} className={styles.beforeAfterCard}>
                <h4>{item.title}</h4>
                <div className={styles.imageComparison}>
                  <div className={styles.beforeImage}>
                    <img src={item.before} alt="Antes" />
                    <div className={styles.imageLabel}>Antes</div>
                  </div>
                  <div className={styles.afterImage}>
                    <img src={item.after} alt="Después" />
                    <div className={styles.imageLabel}>Después</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline */}
        <div className={styles.processSection}>
          <h3 className={styles.processTitle}>Nuestro Proceso de Trabajo</h3>
          <div className={styles.timeline}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>1</div>
              <div className={styles.timelineContent}>
                <h4>Evaluación Inicial</h4>
                <p>Inspección detallada del vehículo y cotización sin costo</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>2</div>
              <div className={styles.timelineContent}>
                <h4>Preparación</h4>
                <p>Desmontaje y preparación de superficies con técnicas profesionales</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>3</div>
              <div className={styles.timelineContent}>
                <h4>Aplicación</h4>
                <p>Pintura o tratamiento en cabina especializada con materiales premium</p>
              </div>
            </div>
            <div className={styles.timelineItem}>
              <div className={styles.timelineIcon}>4</div>
              <div className={styles.timelineContent}>
                <h4>Acabado Final</h4>
                <p>Pulido, protección y entrega con garantía de calidad</p>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className={styles.pricingSection}>
          <h3 className={styles.pricingTitle}>Paquetes de Estética Automotriz</h3>
          <div className={styles.pricingGrid}>
            
            <div className={styles.priceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.serviceIcon}>✨</div>
                <h4>{t.aesthetics.pricing.detail.name}</h4>
                <div className={styles.price}>{t.aesthetics.pricing.detail.price}</div>
                <div className={styles.duration}>{t.aesthetics.pricing.detail.duration}</div>
              </div>
              <div className={styles.cardFeatures}>
                <div className={styles.feature}>✓ Lavado detallado completo</div>
                <div className={styles.feature}>✓ Encerado y pulido</div>
                <div className={styles.feature}>✓ Limpieza de tapicería</div>
                <div className={styles.feature}>✓ Restauración básica de faros</div>
                <div className={styles.feature}>✓ Protección temporal</div>
              </div>
              <button className={styles.selectButton}>Seleccionar Paquete</button>
            </div>

            <div className={`${styles.priceCard} ${styles.featured}`}>
              <div className={styles.popularBadge}>Más Solicitado</div>
              <div className={styles.cardHeader}>
                <div className={styles.serviceIcon}>🎨</div>
                <h4>{t.aesthetics.pricing.paint.name}</h4>
                <div className={styles.price}>{t.aesthetics.pricing.paint.price}</div>
                <div className={styles.duration}>{t.aesthetics.pricing.paint.duration}</div>
              </div>
              <div className={styles.cardFeatures}>
                <div className={styles.feature}>✓ Pintura de paneles específicos</div>
                <div className={styles.feature}>✓ Preparación profesional</div>
                <div className={styles.feature}>✓ Igualación perfecta de color</div>
                <div className={styles.feature}>✓ Pulido y acabado premium</div>
                <div className={styles.feature}>✓ Garantía de 2 años</div>
              </div>
              <button className={styles.selectButton}>Seleccionar Paquete</button>
            </div>

            <div className={styles.priceCard}>
              <div className={styles.cardHeader}>
                <div className={styles.serviceIcon}>🏆</div>
                <h4>{t.aesthetics.pricing.complete.name}</h4>
                <div className={styles.price}>{t.aesthetics.pricing.complete.price}</div>
                <div className={styles.duration}>{t.aesthetics.pricing.complete.duration}</div>
              </div>
              <div className={styles.cardFeatures}>
                <div className={styles.feature}>✓ Pintura completa del vehículo</div>
                <div className={styles.feature}>✓ Cabina de pintura especializada</div>
                <div className={styles.feature}>✓ Materiales premium importados</div>
                <div className={styles.feature}>✓ Tratamiento cerámico incluido</div>
                <div className={styles.feature}>✓ Garantía de 5 años</div>
              </div>
              <button className={styles.selectButton}>Seleccionar Paquete</button>
            </div>

          </div>
        </div>

        {/* Contact CTA */}
        <div className={styles.contactSection}>
          <div className={styles.contactCard}>
            <h3>¿Listo para Transformar tu Vehículo?</h3>
            <p>Contáctanos para una cotización personalizada y sin compromiso</p>
            <div className={styles.contactButtons}>
              <button className={styles.whatsappButton}>
                📱 WhatsApp: +52 646 123 4567
              </button>
              <button className={styles.scheduleButton}>
                📅 {t.common.schedule}
              </button>
            </div>
            <div className={styles.guaranteeInfo}>
              <div className={styles.guaranteeItem}>
                <span className={styles.guaranteeIcon}>🛡️</span>
                <span>Garantía en todos los trabajos</span>
              </div>
              <div className={styles.guaranteeItem}>
                <span className={styles.guaranteeIcon}>💰</span>
                <span>Cotización gratuita</span>
              </div>
              <div className={styles.guaranteeItem}>
                <span className={styles.guaranteeIcon}>⏰</span>
                <span>Tiempos de entrega garantizados</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiciosSeccion4;
