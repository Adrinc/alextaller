// ServiciosSeccion4.jsx - Ventajas Competitivas ÉPICAS
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables.js';
import { translationsServicios } from '../../../data/translationsServicios.js';
import styles from './css/ServiciosSeccion4.module.css';

const ServiciosSeccion4 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsServicios.en : translationsServicios.es;
  const [isVisible, setIsVisible] = useState(false);
  const [activeAdvantage, setActiveAdvantage] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate advantages
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveAdvantage((prev) => (prev + 1) % ventajasCompetitivas.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const ventajasCompetitivas = [
    {
      icon: "🏆",
      title: ingles ? "30+ Years Experience" : "30+ Años de Experiencia",
      description: ingles 
        ? "Three decades of automotive excellence and customer satisfaction"
        : "Tres décadas de excelencia automotriz y satisfacción del cliente",
      stats: [
        { value: "5,000+", label: ingles ? "Cars Serviced" : "Autos Atendidos" },
        { value: "99%", label: ingles ? "Success Rate" : "Tasa de Éxito" },
        { value: "24h", label: ingles ? "Express Service" : "Servicio Express" }
      ],
      color: "#e91e63"
    },
    {
      icon: "🔬",
      title: ingles ? "Advanced Technology" : "Tecnología Avanzada",
      description: ingles 
        ? "Latest diagnostic equipment and cutting-edge automotive technology"
        : "Equipos de diagnóstico más recientes y tecnología automotriz de vanguardia",
      stats: [
        { value: "OBD-II", label: ingles ? "Latest Scanners" : "Escáneres Actuales" },
        { value: "100%", label: ingles ? "Accuracy" : "Precisión" },
        { value: "5min", label: ingles ? "Quick Diagnosis" : "Diagnóstico Rápido" }
      ],
      color: "#ff1744"
    },
    {
      icon: "🛡️",
      title: ingles ? "Quality Guarantee" : "Garantía de Calidad",
      description: ingles 
        ? "All work comes with comprehensive warranty and quality assurance"
        : "Todo trabajo incluye garantía integral y aseguramiento de calidad",
      stats: [
        { value: "12", label: ingles ? "Months Warranty" : "Meses Garantía" },
        { value: "24/7", label: ingles ? "Support" : "Soporte" },
        { value: "100%", label: ingles ? "Satisfaction" : "Satisfacción" }
      ],
      color: "#ec407a"
    },
    {
      icon: "💰",
      title: ingles ? "Competitive Pricing" : "Precios Competitivos",
      description: ingles 
        ? "Transparent pricing with no hidden fees and flexible payment options"
        : "Precios transparentes sin costos ocultos y opciones de pago flexibles",
      stats: [
        { value: "0", label: ingles ? "Hidden Fees" : "Costos Ocultos" },
        { value: "30%", label: ingles ? "Average Savings" : "Ahorro Promedio" },
        { value: "12x", label: ingles ? "Payment Plans" : "Planes de Pago" }
      ],
      color: "#f06292"
    }
  ];

  const certificaciones = [
    {
      icon: "📜",
      title: ingles ? "ASE Certified" : "Certificación ASE",
      description: ingles ? "Automotive Service Excellence" : "Excelencia en Servicio Automotriz"
    },
    {
      icon: "🏅",
      title: ingles ? "EPA Approved" : "Aprobado por EPA",
      description: ingles ? "Environmental Protection Agency" : "Agencia de Protección Ambiental"
    },
    {
      icon: "⭐",
      title: ingles ? "ISO 9001" : "ISO 9001",
      description: ingles ? "Quality Management System" : "Sistema de Gestión de Calidad"
    },
    {
      icon: "🔒",
      title: ingles ? "BBB Accredited" : "Acreditado BBB",
      description: ingles ? "Better Business Bureau" : "Oficina de Buenas Prácticas Comerciales"
    }
  ];

  return (
    <section ref={sectionRef} className={styles.advantagesSection}>
      {/* Header de la sección */}
      <div className={styles.sectionHeader}>
        <div className={styles.container}>
          <div className={`${styles.headerContent} ${isVisible ? styles.fadeInUp : ''}`}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleAccent}>Ventajas</span>
              <span className={styles.titleMain}>Competitivas</span>
            </h2>
            <p className={styles.sectionDescription}>
              {ingles 
                ? "What sets Alex Automotive Workshop apart from the competition"
                : "Lo que distingue a Alex Taller Mecánico de la competencia"
              }
            </p>
            
            {/* Línea divisoria neumórfica */}
            <div className={styles.dividerLine}>
              <div className={styles.dividerGlow}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Ventajas principales con rotación automática */}
      <div className={styles.mainAdvantages}>
        <div className={styles.container}>
          <div className={styles.advantagesLayout}>
            
            {/* Panel de ventaja activa */}
            <div className={styles.activeAdvantage}>
              <div className={styles.advantageContent}>
                <div className={styles.advantageIcon} style={{ '--accent-color': ventajasCompetitivas[activeAdvantage].color }}>
                  <span>{ventajasCompetitivas[activeAdvantage].icon}</span>
                  <div className={styles.iconRipple}></div>
                </div>
                
                <div className={styles.advantageInfo}>
                  <h3 className={styles.advantageTitle}>
                    {ventajasCompetitivas[activeAdvantage].title}
                  </h3>
                  <p className={styles.advantageDescription}>
                    {ventajasCompetitivas[activeAdvantage].description}
                  </p>
                  
                  {/* Estadísticas de la ventaja */}
                  <div className={styles.advantageStats}>
                    {ventajasCompetitivas[activeAdvantage].stats.map((stat, index) => (
                      <div key={index} className={styles.statItem}>
                        <div className={styles.statValue} style={{ '--accent-color': ventajasCompetitivas[activeAdvantage].color }}>
                          {stat.value}
                        </div>
                        <div className={styles.statLabel}>{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navegación de ventajas */}
            <div className={styles.advantagesNavigation}>
              {ventajasCompetitivas.map((ventaja, index) => (
                <button
                  key={index}
                  className={`${styles.advantageTab} ${activeAdvantage === index ? styles.activeTab : ''}`}
                  onClick={() => setActiveAdvantage(index)}
                  style={{ '--accent-color': ventaja.color }}
                >
                  <span className={styles.tabIcon}>{ventaja.icon}</span>
                  <span className={styles.tabTitle}>{ventaja.title.split(' ')[0]}</span>
                  <div className={styles.tabProgress}>
                    <div className={styles.progressBar}></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificaciones y acreditaciones */}
      <div className={styles.certificationsSection}>
        <div className={styles.container}>
          <h3 className={styles.certificationsTitle}>
            {ingles ? "Certifications & Accreditations" : "Certificaciones y Acreditaciones"}
          </h3>
          
          <div className={styles.certificationsGrid}>
            {certificaciones.map((cert, index) => (
              <div 
                key={index}
                className={`${styles.certificationCard} ${isVisible ? styles.slideInUp : ''}`}
                style={{ '--delay': `${index * 0.2}s` }}
              >
                <div className={styles.certIcon}>{cert.icon}</div>
                <h4 className={styles.certTitle}>{cert.title}</h4>
                <p className={styles.certDescription}>{cert.description}</p>
                <div className={styles.certBadge}>
                  <span>{ingles ? "Verified" : "Verificado"}</span>
                  <div className={styles.badgeGlow}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparación con la competencia */}
      <div className={styles.comparisonSection}>
        <div className={styles.container}>
          <h3 className={styles.comparisonTitle}>
            {ingles ? "Why Choose Alex Automotive?" : "¿Por Qué Elegir Alex Taller Mecánico?"}
          </h3>
          
          <div className={styles.comparisonTable}>
            <div className={styles.comparisonHeader}>
              <div className={styles.featureColumn}>
                {ingles ? "Features" : "Características"}
              </div>
              <div className={styles.alexColumn}>
                Alex Taller
              </div>
              <div className={styles.competitorColumn}>
                {ingles ? "Competition" : "Competencia"}
              </div>
            </div>
            
            {[
              { feature: ingles ? "Same-day service" : "Servicio el mismo día", alex: true, competitor: false },
              { feature: ingles ? "12-month warranty" : "Garantía 12 meses", alex: true, competitor: false },
              { feature: ingles ? "Free diagnostics" : "Diagnóstico gratuito", alex: true, competitor: false },
              { feature: ingles ? "Certified technicians" : "Técnicos certificados", alex: true, competitor: true },
              { feature: ingles ? "Latest equipment" : "Equipos más recientes", alex: true, competitor: false },
              { feature: ingles ? "Transparent pricing" : "Precios transparentes", alex: true, competitor: false }
            ].map((item, index) => (
              <div key={index} className={styles.comparisonRow}>
                <div className={styles.featureColumn}>{item.feature}</div>
                <div className={styles.alexColumn}>
                  <span className={item.alex ? styles.checkYes : styles.checkNo}>
                    {item.alex ? "✓" : "✗"}
                  </span>
                </div>
                <div className={styles.competitorColumn}>
                  <span className={item.competitor ? styles.checkYes : styles.checkNo}>
                    {item.competitor ? "✓" : "✗"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA final */}
      <div className={styles.advantagesCTA}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              {ingles ? "Experience the Alex Advantage" : "Experimenta la Ventaja Alex"}
            </h3>
            <p className={styles.ctaDescription}>
              {ingles 
                ? "Join thousands of satisfied customers who trust us with their vehicles"
                : "Únete a miles de clientes satisfechos que confían en nosotros con sus vehículos"
              }
            </p>
            <button className={styles.ctaButton}>
              <span>{ingles ? "Schedule Service Now" : "Agendar Servicio Ahora"}</span>
              <div className={styles.buttonGlow}></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSeccion4;
