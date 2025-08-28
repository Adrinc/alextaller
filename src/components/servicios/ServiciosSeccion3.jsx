import React from 'react';
import { useStore } from '@nanostores/react';
import { currentLanguage } from '../../data/signals.jsx';
import { translationsServicios } from '../../data/translationsServicios.js';
import styles from '../servicios/css/ServiciosSeccion3.module.css';

const ServiciosSeccion3 = () => {
  const lang = useStore(currentLanguage);
  const t = translationsServicios[lang];

  const diagnosticServices = [
    { icon: '📊', title: t.diagnostics.services[0] },
    { icon: '💨', title: t.diagnostics.services[1] },
    { icon: '⚡', title: t.diagnostics.services[2] },
    { icon: '🚨', title: t.diagnostics.services[3] },
    { icon: '📋', title: t.diagnostics.services[4] },
    { icon: '🔬', title: t.diagnostics.services[5] },
    { icon: '🔍', title: t.diagnostics.services[6] },
    { icon: '🌐', title: t.diagnostics.services[7] }
  ];

  return (
    <section className={styles.diagnosticsSection}>
      <div className={styles.container}>
        
        {/* Diagnóstico Computarizado */}
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            {t.diagnostics.title}
          </h2>
          <h3 className={styles.sectionSubtitle}>
            {t.diagnostics.subtitle}
          </h3>
          <p className={styles.sectionDescription}>
            {t.diagnostics.description}
          </p>
        </div>

        <div className={styles.diagnosticsContent}>
          
          {/* Equipment Showcase */}
          <div className={styles.equipmentShowcase}>
            <div className={styles.equipmentImage}>
              <img src="/public/image/global/dashboard1.png" alt="Diagnóstico Computarizado" />
              <div className={styles.techBadge}>
                <span>🔬 Tecnología OBD-II</span>
              </div>
            </div>
            
            <div className={styles.equipmentInfo}>
              <h4>Equipos de Última Generación</h4>
              <p>Utilizamos escáneres automotrices de alta precisión para detectar fallas que otros talleres no pueden identificar.</p>
              
              <div className={styles.techFeatures}>
                <div className={styles.techFeature}>
                  <span className={styles.techIcon}>⚡</span>
                  <div>
                    <h5>Diagnóstico Rápido</h5>
                    <p>Resultados en 30 minutos</p>
                  </div>
                </div>
                <div className={styles.techFeature}>
                  <span className={styles.techIcon}>📊</span>
                  <div>
                    <h5>Reporte Detallado</h5>
                    <p>Análisis completo y recomendaciones</p>
                  </div>
                </div>
                <div className={styles.techFeature}>
                  <span className={styles.techIcon}>🎯</span>
                  <div>
                    <h5>Precisión 99%</h5>
                    <p>Detección exacta de problemas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className={styles.servicesGrid}>
            <h4 className={styles.gridTitle}>Servicios de Diagnóstico Incluidos</h4>
            <div className={styles.serviceCards}>
              {diagnosticServices.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                  <div className={styles.cardIcon}>{service.icon}</div>
                  <h5>{service.title}</h5>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing Section */}
          <div className={styles.pricingSection}>
            <h4 className={styles.pricingTitle}>Planes de Diagnóstico</h4>
            <div className={styles.pricingGrid}>
              
              <div className={styles.priceCard}>
                <div className={styles.cardHeader}>
                  <h5>{t.diagnostics.pricing.basic.name}</h5>
                  <div className={styles.price}>{t.diagnostics.pricing.basic.price}</div>
                  <div className={styles.duration}>{t.diagnostics.pricing.basic.duration}</div>
                </div>
                <div className={styles.cardFeatures}>
                  <div className={styles.feature}>✓ Escáner básico OBD-II</div>
                  <div className={styles.feature}>✓ Lectura de códigos de error</div>
                  <div className={styles.feature}>✓ Reporte básico</div>
                </div>
                <button className={styles.cardButton}>Seleccionar</button>
              </div>

              <div className={`${styles.priceCard} ${styles.featured}`}>
                <div className={styles.popularBadge}>Más Popular</div>
                <div className={styles.cardHeader}>
                  <h5>{t.diagnostics.pricing.complete.name}</h5>
                  <div className={styles.price}>{t.diagnostics.pricing.complete.price}</div>
                  <div className={styles.duration}>{t.diagnostics.pricing.complete.duration}</div>
                </div>
                <div className={styles.cardFeatures}>
                  <div className={styles.feature}>✓ Diagnóstico completo</div>
                  <div className={styles.feature}>✓ Análisis de sensores</div>
                  <div className={styles.feature}>✓ Pruebas dinámicas</div>
                  <div className={styles.feature}>✓ Reporte detallado</div>
                  <div className={styles.feature}>✓ Recomendaciones</div>
                </div>
                <button className={styles.cardButton}>Seleccionar</button>
              </div>

              <div className={styles.priceCard}>
                <div className={styles.cardHeader}>
                  <h5>{t.diagnostics.pricing.advanced.name}</h5>
                  <div className={styles.price}>{t.diagnostics.pricing.advanced.price}</div>
                  <div className={styles.duration}>{t.diagnostics.pricing.advanced.duration}</div>
                </div>
                <div className={styles.cardFeatures}>
                  <div className={styles.feature}>✓ Diagnóstico avanzado</div>
                  <div className={styles.feature}>✓ Red CAN completa</div>
                  <div className={styles.feature}>✓ Análisis de gases</div>
                  <div className={styles.feature}>✓ Sistema eléctrico</div>
                  <div className={styles.feature}>✓ Consultoría técnica</div>
                </div>
                <button className={styles.cardButton}>Seleccionar</button>
              </div>

            </div>
          </div>

          {/* CTA Section */}
          <div className={styles.ctaSection}>
            <h4>¿Necesitas un diagnóstico urgente?</h4>
            <p>Agenda tu cita ahora y obtén resultados el mismo día</p>
            <div className={styles.ctaButtons}>
              <button className={styles.primaryCta}>{t.common.schedule}</button>
              <button className={styles.secondaryCta}>{t.common.whatsapp}</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServiciosSeccion3;
