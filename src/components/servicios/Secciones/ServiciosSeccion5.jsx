import React, { useState, useEffect } from 'react';
import styles from './css/ServiciosSeccion5.module.css';

const ServiciosSeccion5 = ({ ingles = false }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const trabajosRealizados = [
    {
      id: 1,
      title: ingles ? "Complete Vehicle Restoration" : "Restauración Completa de Vehículo",
      category: ingles ? "Collision Repair" : "Reparación de Colisión",
      before: "/image/referencias/1.png",
      after: "/image/referencias/2.png",
      description: ingles 
        ? "Complete restoration of a 2018 sedan after major collision damage. Professional painting and body work."
        : "Restauración completa de sedán 2018 después de daños mayores por colisión. Pintura y hojalatería profesional.",
      duration: ingles ? "7 days" : "7 días",
      techniques: ingles 
        ? ["Professional bodywork", "Color matching", "Ceramic coating", "Quality inspection"]
        : ["Hojalatería profesional", "Igualación de color", "Recubrimiento cerámico", "Inspección de calidad"]
    },
    {
      id: 2,
      title: ingles ? "Premium Paint Job" : "Pintura Premium",
      category: ingles ? "Aesthetics" : "Estética",
      before: "/image/referencias/2.png",
      after: "/image/referencias/3.png",
      description: ingles 
        ? "Complete color change with premium imported paint. Includes ceramic protection and 5-year warranty."
        : "Cambio completo de color con pintura premium importada. Incluye protección cerámica y garantía de 5 años.",
      duration: ingles ? "5 days" : "5 días",
      techniques: ingles 
        ? ["Specialized booth", "Premium materials", "Professional polishing", "Ceramic protection"]
        : ["Cabina especializada", "Materiales premium", "Pulido profesional", "Protección cerámica"]
    },
    {
      id: 3,
      title: ingles ? "Mechanical Engine Repair" : "Reparación Mecánica de Motor",
      category: ingles ? "Mechanics" : "Mecánica",
      before: "/image/referencias/3.png",
      after: "/image/referencias/1.png",
      description: ingles 
        ? "Complete engine overhaul with OEM parts replacement. Includes performance optimization and testing."
        : "Reparación completa de motor con repuestos OEM. Incluye optimización de rendimiento y pruebas.",
      duration: ingles ? "10 days" : "10 días",
      techniques: ingles 
        ? ["OEM parts", "Precision tools", "Performance testing", "Extended warranty"]
        : ["Repuestos OEM", "Herramientas de precisión", "Pruebas de rendimiento", "Garantía extendida"]
    },
    {
      id: 4,
      title: ingles ? "Electrical System Upgrade" : "Actualización Sistema Eléctrico",
      category: ingles ? "Electrical" : "Eléctrico",
      before: "/image/referencias/1.png",
      after: "/image/referencias/2.png",
      description: ingles 
        ? "Complete electrical system modernization with advanced diagnostics and component replacement."
        : "Modernización completa del sistema eléctrico con diagnósticos avanzados y reemplazo de componentes.",
      duration: ingles ? "4 days" : "4 días",
      techniques: ingles 
        ? ["Advanced diagnostics", "OEM components", "System testing", "Technical certification"]
        : ["Diagnósticos avanzados", "Componentes OEM", "Pruebas de sistema", "Certificación técnica"]
    },
    {
      id: 5,
      title: ingles ? "Detail & Protection" : "Detallado y Protección",
      category: ingles ? "Aesthetics" : "Estética",
      before: "/image/referencias/3.png",
      after: "/image/referencias/1.png",
      description: ingles 
        ? "Professional detailing service with ceramic coating and interior restoration."
        : "Servicio de detallado profesional con recubrimiento cerámico y restauración de interiores.",
      duration: ingles ? "2 days" : "2 días",
      techniques: ingles 
        ? ["Deep cleaning", "Ceramic coating", "Interior restoration", "Paint protection"]
        : ["Limpieza profunda", "Recubrimiento cerámico", "Restauración interior", "Protección de pintura"]
    },
    {
      id: 6,
      title: ingles ? "Suspension & Alignment" : "Suspensión y Alineación",
      category: ingles ? "Mechanics" : "Mecánica",
      before: "/image/referencias/2.png",
      after: "/image/referencias/3.png",
      description: ingles 
        ? "Complete suspension system repair with precision alignment and performance testing."
        : "Reparación completa del sistema de suspensión con alineación de precisión y pruebas de rendimiento.",
      duration: ingles ? "3 days" : "3 días",
      techniques: ingles 
        ? ["Precision alignment", "OEM suspension", "Performance testing", "Road test"]
        : ["Alineación de precisión", "Suspensión OEM", "Pruebas de rendimiento", "Prueba de carretera"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector(`.${styles.section}`);
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trabajosRealizados.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [trabajosRealizados.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % trabajosRealizados.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + trabajosRealizados.length) % trabajosRealizados.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className={`${styles.section} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.backgroundEffect}></div>
      
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            {ingles ? "Our Work Speaks for Itself" : "Nuestro Trabajo Habla por Sí Solo"}
          </h2>
          <p className={styles.subtitle}>
            {ingles 
              ? "Discover the transformations we've achieved with cutting-edge technology and expert craftsmanship"
              : "Descubre las transformaciones que hemos logrado con tecnología de vanguardia y artesanía experta"
            }
          </p>
        </div>

        {/* Gallery Slider */}
        <div className={styles.galleryContainer}>
          <div className={styles.slider}>
            <div 
              className={styles.slidesContainer}
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {trabajosRealizados.map((trabajo, index) => (
                <div key={trabajo.id} className={styles.slide}>
                  <div className={styles.slideContent}>
                    
                    {/* Before/After Images */}
                    <div className={styles.imageComparison}>
                      <div className={styles.beforeContainer}>
                        <img src={trabajo.before} alt="Antes" className={styles.beforeImage} />
                        <div className={styles.imageLabel}>
                          {ingles ? "Before" : "Antes"}
                        </div>
                      </div>
                      <div className={styles.afterContainer}>
                        <img src={trabajo.after} alt="Después" className={styles.afterImage} />
                        <div className={styles.imageLabel}>
                          {ingles ? "After" : "Después"}
                        </div>
                      </div>
                      <div className={styles.comparisonDivider}></div>
                    </div>

                    {/* Work Details */}
                    <div className={styles.workDetails}>
                      <div className={styles.categoryBadge}>{trabajo.category}</div>
                      <h3 className={styles.workTitle}>{trabajo.title}</h3>
                      <p className={styles.workDescription}>{trabajo.description}</p>
                      
                      <div className={styles.workMeta}>
                        <div className={styles.duration}>
                          <span className={styles.metaIcon}>⏰</span>
                          <span>{trabajo.duration}</span>
                        </div>
                      </div>

                      <div className={styles.techniques}>
                        <h4 className={styles.techniquesTitle}>
                          {ingles ? "Techniques Used:" : "Técnicas Utilizadas:"}
                        </h4>
                        <div className={styles.techniquesList}>
                          {trabajo.techniques.map((technique, idx) => (
                            <span key={idx} className={styles.techniqueTag}>
                              {technique}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Controls */}
            <button className={styles.navButton} onClick={prevSlide} aria-label="Previous slide">
              <span className={styles.navIcon}>‹</span>
            </button>
            <button className={`${styles.navButton} ${styles.next}`} onClick={nextSlide} aria-label="Next slide">
              <span className={styles.navIcon}>›</span>
            </button>
          </div>

          {/* Slide Indicators */}
          <div className={styles.indicators}>
            {trabajosRealizados.map((_, index) => (
              <button
                key={index}
                className={`${styles.indicator} ${index === currentSlide ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className={styles.statsSection}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🏆</div>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>
                {ingles ? "Completed Projects" : "Proyectos Completados"}
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>⭐</div>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>
                {ingles ? "Satisfaction Rate" : "Índice de Satisfacción"}
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>🔧</div>
              <div className={styles.statNumber}>15+</div>
              <div className={styles.statLabel}>
                {ingles ? "Years Experience" : "Años de Experiencia"}
              </div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>⚡</div>
              <div className={styles.statNumber}>&lt;7</div>
              <div className={styles.statLabel}>
                {ingles ? "Days Average" : "Días Promedio"}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>
            {ingles ? "Ready to Transform Your Vehicle?" : "¿Listo para Transformar tu Vehículo?"}
          </h3>
          <p className={styles.ctaDescription}>
            {ingles 
              ? "Join hundreds of satisfied customers and experience the difference quality makes"
              : "Únete a cientos de clientes satisfechos y experimenta la diferencia que hace la calidad"
            }
          </p>
          <div className={styles.ctaButtons}>
            <button className={styles.primaryCTA}>
              <span>{ingles ? "Get Free Quote" : "Cotización Gratuita"}</span>
              <div className={styles.buttonGlow}></div>
            </button>
            <button className={styles.secondaryCTA}>
              <span>{ingles ? "View All Gallery" : "Ver Galería Completa"}</span>
              <div className={styles.buttonGlow}></div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiciosSeccion5;
