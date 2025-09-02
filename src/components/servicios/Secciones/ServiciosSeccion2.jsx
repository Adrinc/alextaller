// ServiciosSeccion2.jsx - Grid 2x2 de Servicios Principales ÉPICO
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables.js';
import { translationsServicios } from '../../../data/translationsServicios.js';
import styles from '../css/ServiciosSeccion2.module.css';

const ServiciosSeccion2 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsServicios.en : translationsServicios.es;
  const [isVisible, setIsVisible] = useState(false);
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

  const serviciosPrincipales = [
    {
      icon: "🔧",
      title: ingles ? "Mechanical Repair" : "Reparación Mecánica",
      description: ingles 
        ? "Complete engine diagnostics and mechanical repairs with certified technicians"
        : "Diagnóstico completo de motor y reparaciones mecánicas con técnicos certificados",
      features: ingles 
        ? ["Engine Diagnostics", "Transmission Repair", "Brake System", "Suspension"]
        : ["Diagnóstico de Motor", "Reparación de Transmisión", "Sistema de Frenos", "Suspensión"],
      price: ingles ? "From $89" : "Desde $1,600",
      popular: true
    },
    {
      icon: "⚡",
      title: ingles ? "Electrical System" : "Sistema Eléctrico",
      description: ingles 
        ? "Advanced electrical diagnostics and modern vehicle electronics repair"
        : "Diagnóstico eléctrico avanzado y reparación de electrónica automotriz moderna",
      features: ingles 
        ? ["Battery Testing", "Alternator Repair", "ECU Diagnostics", "Wiring"]
        : ["Prueba de Batería", "Reparación Alternador", "Diagnóstico ECU", "Cableado"],
      price: ingles ? "From $65" : "Desde $1,200",
      popular: false
    },
    {
      icon: "🏁",
      title: ingles ? "Performance Tuning" : "Optimización de Rendimiento",
      description: ingles 
        ? "Engine tuning and performance modifications for maximum efficiency"
        : "Afinación de motor y modificaciones de rendimiento para máxima eficiencia",
      features: ingles 
        ? ["Engine Tuning", "Performance Chips", "Exhaust Systems", "Cold Air Intake"]
        : ["Afinación de Motor", "Chips de Rendimiento", "Sistemas de Escape", "Admisión de Aire"],
      price: ingles ? "From $150" : "Desde $2,800",
      popular: false
    },
    {
      icon: "🛠️",
      title: ingles ? "Preventive Maintenance" : "Mantenimiento Preventivo",
      description: ingles 
        ? "Regular maintenance programs to keep your vehicle in optimal condition"
        : "Programas de mantenimiento regular para mantener tu vehículo en condiciones óptimas",
      features: ingles 
        ? ["Oil Changes", "Filter Replacement", "Fluid Check", "Multi-point Inspection"]
        : ["Cambio de Aceite", "Reemplazo de Filtros", "Revisión de Fluidos", "Inspección General"],
      price: ingles ? "From $45" : "Desde $800",
      popular: true
    }
  ];

  return (
    <section ref={sectionRef} className={styles.servicesSection}>
      {/* Header de la sección */}
      <div className={styles.sectionHeader}>
        <div className={styles.container}>
          <div className={`${styles.headerContent} ${isVisible ? styles.fadeInUp : ''}`}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleAccent}>Servicios</span>
              <span className={styles.titleMain}>Principales</span>
            </h2>
            <p className={styles.sectionDescription}>
              {ingles 
                ? "Comprehensive automotive solutions with cutting-edge technology and expert craftsmanship"
                : "Soluciones automotrices integrales con tecnología de vanguardia y experiencia profesional"
              }
            </p>
            
            {/* Línea divisoria neumórfica */}
            <div className={styles.dividerLine}>
              <div className={styles.dividerGlow}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid 2x2 de servicios */}
      <div className={styles.servicesGrid}>
        <div className={styles.container}>
          <div className={styles.gridContainer}>
            {serviciosPrincipales.map((servicio, index) => (
              <div 
                key={index}
                className={`${styles.serviceCard} ${isVisible ? styles.slideInUp : ''} ${servicio.popular ? styles.popularCard : ''}`}
                style={{ '--delay': `${index * 0.2}s` }}
              >
                {/* Badge de Popular */}
                {servicio.popular && (
                  <div className={styles.popularBadge}>
                    <span>{ingles ? "Popular" : "Popular"}</span>
                    <div className={styles.badgeGlow}></div>
                  </div>
                )}

                {/* Icono del servicio con efecto neumórfico */}
                <div className={styles.serviceIcon}>
                  <span className={styles.iconMain}>{servicio.icon}</span>
                  <div className={styles.iconGlow}></div>
                </div>

                {/* Información del servicio */}
                <div className={styles.serviceInfo}>
                  <h3 className={styles.serviceTitle}>{servicio.title}</h3>
                  <p className={styles.serviceDescription}>{servicio.description}</p>
                  
                  {/* Lista de características */}
                  <ul className={styles.featuresList}>
                    {servicio.features.map((feature, idx) => (
                      <li key={idx} className={styles.featureItem}>
                        <span className={styles.featureCheck}>✓</span>
                        <span className={styles.featureText}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Precio y botón */}
                  <div className={styles.serviceFooter}>
                    <div className={styles.priceContainer}>
                      <span className={styles.priceLabel}>
                        {ingles ? "Starting at" : "Desde"}
                      </span>
                      <span className={styles.priceValue}>{servicio.price}</span>
                    </div>
                    
                    <button className={styles.serviceButton}>
                      <span>{ingles ? "Learn More" : "Más Info"}</span>
                      <div className={styles.buttonGlow}></div>
                    </button>
                  </div>
                </div>

                {/* Efectos hover neumórficos */}
                <div className={styles.cardOverlay}></div>
                <div className={styles.hoverGlow}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action final */}
      <div className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              {ingles ? "Need a Custom Solution?" : "¿Necesitas una Solución Personalizada?"}
            </h3>
            <p className={styles.ctaDescription}>
              {ingles 
                ? "Contact our experts for personalized automotive solutions tailored to your specific needs"
                : "Contacta a nuestros expertos para soluciones automotrices personalizadas según tus necesidades específicas"
              }
            </p>
            <button className={styles.ctaButton}>
              <span>{ingles ? "Get Custom Quote" : "Cotización Personalizada"}</span>
              <div className={styles.buttonGlow}></div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSeccion2;
