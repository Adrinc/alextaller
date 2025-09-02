// ServiciosSeccion3.jsx - Servicios Complementarios ÉPICOS
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables.js';
import { translationsServicios } from '../../../data/translationsServicios.js';
import styles from '../css/ServiciosSeccion3.module.css';

const ServiciosSeccion3 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsServicios.en : translationsServicios.es;
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
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

  const serviciosComplementarios = [
    {
      category: ingles ? "Diagnostics & Testing" : "Diagnóstico y Pruebas",
      icon: "🔬",
      services: [
        {
          icon: "📊",
          name: ingles ? "Computer Diagnostics" : "Diagnóstico Computarizado",
          description: ingles ? "Advanced OBD-II scanning" : "Escaneo avanzado OBD-II"
        },
        {
          icon: "�",
          name: ingles ? "Battery Testing" : "Prueba de Batería",
          description: ingles ? "Complete electrical analysis" : "Análisis eléctrico completo"
        },
        {
          icon: "🌡️",
          name: ingles ? "Engine Temperature" : "Temperatura del Motor",
          description: ingles ? "Cooling system check" : "Revisión sistema de enfriamiento"
        },
        {
          icon: "⚡",
          name: ingles ? "Alternator Test" : "Prueba Alternador",
          description: ingles ? "Charging system analysis" : "Análisis sistema de carga"
        }
      ]
    },
    {
      category: ingles ? "Maintenance Services" : "Servicios de Mantenimiento",
      icon: "🛠️",
      services: [
        {
          icon: "�️",
          name: ingles ? "Oil Change" : "Cambio de Aceite",
          description: ingles ? "Premium oil & filter replacement" : "Aceite premium y cambio de filtro"
        },
        {
          icon: "🚗",
          name: ingles ? "Car Wash" : "Lavado de Auto",
          description: ingles ? "Complete exterior cleaning" : "Limpieza exterior completa"
        },
        {
          icon: "📋",
          name: ingles ? "Technical Inspection" : "Revisión Técnica",
          description: ingles ? "Official safety inspection" : "Inspección oficial de seguridad"
        },
        {
          icon: "�",
          name: ingles ? "Tune-Up" : "Afinación",
          description: ingles ? "Complete engine optimization" : "Optimización completa del motor"
        }
      ]
    },
    {
      category: ingles ? "Specialized Repairs" : "Reparaciones Especializadas",
      icon: "⚙️",
      services: [
        {
          icon: "❄️",
          name: ingles ? "A/C Service" : "Servicio A/C",
          description: ingles ? "Air conditioning repair" : "Reparación aire acondicionado"
        },
        {
          icon: "�",
          name: ingles ? "Exhaust System" : "Sistema de Escape",
          description: ingles ? "Muffler & pipe replacement" : "Reemplazo silenciador y tubería"
        },
        {
          icon: "💨",
          name: ingles ? "Emission Control" : "Control de Emisiones",
          description: ingles ? "Environmental compliance" : "Cumplimiento ambiental"
        },
        {
          icon: "🔗",
          name: ingles ? "Timing Belt" : "Banda de Tiempo",
          description: ingles ? "Critical timing components" : "Componentes críticos de sincronización"
        }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className={styles.complementarySection}>
      {/* Header de la sección */}
      <div className={styles.sectionHeader}>
        <div className={styles.container}>
          <div className={`${styles.headerContent} ${isVisible ? styles.fadeInUp : ''}`}>
            <h2 className={styles.sectionTitle}>
              <span className={styles.titleAccent}>Servicios</span>
              <span className={styles.titleMain}>Complementarios</span>
            </h2>
            <p className={styles.sectionDescription}>
              {ingles 
                ? "Complete automotive care with specialized services for every vehicle need"
                : "Cuidado automotriz completo con servicios especializados para cada necesidad del vehículo"
              }
            </p>
            
            {/* Línea divisoria neumórfica */}
            <div className={styles.dividerLine}>
              <div className={styles.dividerGlow}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Navegación de categorías */}
      <div className={styles.categoryNavigation}>
        <div className={styles.container}>
          <div className={styles.categoryTabs}>
            {serviciosComplementarios.map((categoria, index) => (
              <button
                key={index}
                className={`${styles.categoryTab} ${activeCategory === index ? styles.activeTab : ''}`}
                onClick={() => setActiveCategory(index)}
              >
                <span className={styles.tabIcon}>{categoria.icon}</span>
                <span className={styles.tabText}>{categoria.category}</span>
                <div className={styles.tabGlow}></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido de servicios */}
      <div className={styles.servicesContent}>
        <div className={styles.container}>
          <div className={styles.servicesList}>
            {serviciosComplementarios[activeCategory].services.map((servicio, index) => (
              <div 
                key={index}
                className={`${styles.serviceItem} ${isVisible ? styles.slideInLeft : ''}`}
                style={{ '--delay': `${index * 0.1}s` }}
              >
                {/* Icono del servicio */}
                <div className={styles.serviceIconContainer}>
                  <span className={styles.serviceIcon}>{servicio.icon}</span>
                  <div className={styles.iconRipple}></div>
                </div>

                {/* Información del servicio */}
                <div className={styles.serviceInfo}>
                  <h4 className={styles.serviceName}>{servicio.name}</h4>
                  <p className={styles.serviceDescription}>{servicio.description}</p>
                </div>

                {/* Botón de acción */}
                <div className={styles.serviceAction}>
                  <button className={styles.serviceButton}>
                    <span>{ingles ? "Details" : "Detalles"}</span>
                    <div className={styles.buttonGlow}></div>
                  </button>
                </div>

                {/* Efectos hover */}
                <div className={styles.itemOverlay}></div>
              </div>
            ))}
          </div>

          {/* Imagen destacada de la categoría */}
          <div className={styles.categoryImage}>
            <div className={styles.imageContainer}>
              <img 
                src="/public/image/global/equipment.png" 
                alt={serviciosComplementarios[activeCategory].category}
                className={styles.featuredImage}
              />
              <div className={styles.imageOverlay}></div>
              
              {/* Badge informativo */}
              <div className={styles.infoBadge}>
                <span className={styles.badgeIcon}>✓</span>
                <span className={styles.badgeText}>
                  {ingles ? "Certified Technicians" : "Técnicos Certificados"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action para servicios complementarios */}
      <div className={styles.complementaryCTA}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h3 className={styles.ctaTitle}>
              {ingles ? "Complete Service Package" : "Paquete de Servicio Completo"}
            </h3>
            <p className={styles.ctaDescription}>
              {ingles 
                ? "Combine multiple services and save up to 25% with our comprehensive maintenance packages"
                : "Combina múltiples servicios y ahorra hasta 25% con nuestros paquetes de mantenimiento integral"
              }
            </p>
            
            <div className={styles.ctaButtons}>
              <button className={styles.primaryCTA}>
                <span>{ingles ? "View Packages" : "Ver Paquetes"}</span>
                <div className={styles.buttonGlow}></div>
              </button>
              <button className={styles.secondaryCTA}>
                <span>{ingles ? "Custom Quote" : "Cotización Personalizada"}</span>
                <div className={styles.buttonGlow}></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiciosSeccion3;
