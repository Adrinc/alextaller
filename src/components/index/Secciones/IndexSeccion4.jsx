// IndexSeccion4_new.jsx - Beneficios Diferenciales NEUMÓRFICOS BRUTALES para Alex Taller Mecánico
import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex';
import styles from '../css/indexSeccion4_new.module.css';

const IndexSeccion4 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en : translationsIndex.es;
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredBenefit, setHoveredBenefit] = useState(null);
  const [hoveredProcess, setHoveredProcess] = useState(null);
  const [animationPhase, setAnimationPhase] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animación secuencial épica
          setTimeout(() => setAnimationPhase(1), 300);
          setTimeout(() => setAnimationPhase(2), 800);
          setTimeout(() => setAnimationPhase(3), 1500);
          
          // Auto-progress through steps con efectos
          const stepInterval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % 4);
          }, 4000);

          return () => clearInterval(stepInterval);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: '🔧',
      title: ingles ? '8+ Years of Excellence' : '8+ Años de Excelencia',
      description: ingles 
        ? '8+ Years mastering automotive repair with cutting-edge technology and unmatched expertise in Tijuana.'
        : '8+ Años dominando la reparación automotriz con tecnología de vanguardia y experiencia inigualable en Tijuana.',
      color: '#e91e63',
      stats: ingles ? '5000+ Cars Serviced' : '5000+ Autos Atendidos',
      speciality: ingles ? 'Master Technicians' : 'Técnicos Maestros',
      image: '/public/image/global/mecanico.jpg',
      glow: 'rgba(233, 30, 99, 0.3)'
    },
    {
      icon: '⚡',
      title: ingles ? 'Advanced Diagnostic Tools' : 'Herramientas de Diagnóstico Avanzadas',
      description: ingles 
        ? 'State-of-the-art computerized diagnostic equipment that identifies problems with precision in minutes, not hours.'
        : 'Equipos de diagnóstico computarizados de última generación que identifican problemas con precisión en minutos, no horas.',
      color: '#ff5722',
      stats: ingles ? '99% Accuracy Rate' : '99% Precisión',
      speciality: ingles ? 'AI-Powered Diagnostics' : 'Diagnóstico con IA',
      image: '/public/image/global/hr_d1.png',
      glow: 'rgba(255, 87, 34, 0.3)'
    },
    {
      icon: '🚗',
      title: ingles ? 'Same Day Service' : 'Servicio el Mismo Día',
      description: ingles 
        ? 'Lightning-fast repairs without compromising quality. Most services completed same day with lifetime warranty.'
        : 'Reparaciones ultrarrápidas sin comprometer la calidad. La mayoría de servicios terminados el mismo día con garantía de por vida.',
      color: '#4caf50',
      stats: ingles ? '95% Same Day' : '95% Mismo Día',
      speciality: ingles ? 'Express Service' : 'Servicio Express',
      image: '/public/image/global/mismodia.jpg',
      glow: 'rgba(76, 175, 80, 0.3)'
    },
    {
      icon: '💎',
      title: ingles ? 'Premium Parts & Warranty' : 'Partes Premium y Garantía',
      description: ingles 
        ? 'Only premium OEM and high-performance aftermarket parts with comprehensive 12-month warranty coverage.'
        : 'Solo partes OEM premium y repuestos de alto rendimiento con cobertura de garantía integral de 12 meses.',
      color: '#9c27b0',
      stats: ingles ? '12 Month Warranty' : 'Garantía 12 Meses',
      speciality: ingles ? 'OEM Quality' : 'Calidad OEM',
      image: '/public/image/global/premium.jpg',
      glow: 'rgba(156, 39, 176, 0.3)'
    },
    {
      icon: '🛡️',
      title: ingles ? 'Certified Master Technicians' : 'Técnicos Maestros Certificados',
      description: ingles 
        ? 'ASE-certified master technicians trained in latest automotive technologies and manufacturer-specific procedures.'
        : 'Técnicos maestros certificados ASE entrenados en las últimas tecnologías automotrices y procedimientos específicos del fabricante.',
      color: '#ff9800',
      stats: ingles ? '8 ASE Certified' : '8 Certificados ASE',
      speciality: ingles ? 'Master Level' : 'Nivel Maestro',
      image: '/public/image/global/grupoti.jpg',
      glow: 'rgba(255, 152, 0, 0.3)'
    },
    {
      icon: '📱',
      title: ingles ? 'Digital Service Tracking' : 'Seguimiento Digital del Servicio',
      description: ingles 
        ? 'Real-time updates on your vehicle status through our mobile app with photo documentation and progress tracking.'
        : 'Actualizaciones en tiempo real del estado de tu vehículo a través de nuestra app móvil con documentación fotográfica y seguimiento del progreso.',
      color: '#2196f3',
      stats: ingles ? 'Real-time Updates' : 'Actualizaciones en Tiempo Real',
      speciality: ingles ? 'Mobile App' : 'App Móvil',
      image: '/public/image/global/app_re.jpg',
      glow: 'rgba(33, 150, 243, 0.3)'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: ingles ? 'DIAGNOSTIC SCAN' : 'ESCANEO DIAGNÓSTICO',
      description: ingles ? 'Advanced computerized diagnostic scan' : 'Escaneo diagnóstico computarizado avanzado',
      icon: '🔍',
      duration: '15-30 min',
      tools: ingles ? 'AI-Powered Scanner' : 'Escáner con IA',
      color: '#e91e63'
    },
    {
      number: '02',
      title: ingles ? 'DETAILED QUOTE' : 'COTIZACIÓN DETALLADA',
      description: ingles ? 'Transparent breakdown with photo evidence' : 'Desglose transparente con evidencia fotográfica',
      icon: '📋',
      duration: '10-15 min',
      tools: ingles ? 'Digital Documentation' : 'Documentación Digital',
      color: '#ff5722'
    },
    {
      number: '03',
      title: ingles ? 'EXPERT REPAIR' : 'REPARACIÓN EXPERTA',
      description: ingles ? 'Premium parts with master technician service' : 'Partes premium con servicio de técnico maestro',
      icon: '🔧',
      duration: '1-4 hrs',
      tools: ingles ? 'Professional Tools' : 'Herramientas Profesionales',
      color: '#4caf50'
    },
    {
      number: '04',
      title: ingles ? 'QUALITY TEST' : 'PRUEBA DE CALIDAD',
      description: ingles ? 'Road test and final quality inspection' : 'Prueba de manejo e inspección final de calidad',
      icon: '✅',
      duration: '15-30 min',
      tools: ingles ? 'Performance Validation' : 'Validación de Rendimiento',
      color: '#9c27b0'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={styles.section} 
      id="beneficios"
    >
      {/* Efectos de fondo neumórficos */}
      <div className={styles.backgroundEffects}>
        <div className={styles.neuralNetwork}></div>
        <div className={styles.floatingElements}>
          {[...Array(15)].map((_, i) => (
            <div 
              key={i} 
              className={styles.floatingElement}
              style={{
                '--delay': `${i * 0.5}s`,
                '--x': `${Math.random() * 100}%`,
                '--y': `${Math.random() * 100}%`,
                '--size': `${Math.random() * 20 + 10}px`
              }}
            />
          ))}
        </div>
        <div className={styles.glowOrbs}>
          <div className={styles.glowOrb} style={{ '--color': '#e91e63' }}></div>
          <div className={styles.glowOrb} style={{ '--color': '#ff5722' }}></div>
          <div className={styles.glowOrb} style={{ '--color': '#4caf50' }}></div>
        </div>
      </div>

      <div className={styles.container}>
        {/* Header BRUTAL con efectos neumórficos */}
        <div className={`${styles.header} ${animationPhase >= 1 ? styles.headerVisible : ''}`}>
          {/* Proceso de Servicio ÉPICO */}
          <div className={styles.processSection}>
            <div className={styles.processBadge}>
              <div className={styles.badgeGlow}></div>
              <span className={styles.badgeIcon}>⚙️</span>
              <span className={styles.badgeText}>
                {ingles ? "PROFESSIONAL PROCESS" : "PROCESO PROFESIONAL"}
              </span>
              <div className={styles.badgePulse}></div>
            </div>

            <h2 className={styles.processTitle}>
              <span className={styles.titleMain}>
                {ingles ? "Master-Level" : "Nivel Maestro"}
              </span>
              <span className={styles.titleSub}>
                {ingles ? "Automotive Service" : "Servicio Automotriz"}
              </span>
            </h2>
            
            <p className={styles.processSubtitle}>
              {ingles 
                ? "Experience the precision of professional automotive service with cutting-edge technology and master-certified technicians"
                : "Experimenta la precisión del servicio automotriz profesional con tecnología de vanguardia y técnicos certificados maestros"
              }
            </p>

            {/* Proceso NEUMÓRFICO BRUTAL */}
            <div className={styles.processContainer}>
              <div className={styles.processSteps}>
                {processSteps.map((step, index) => (
                  <div 
                    key={index}
                    className={`${styles.processStep} ${index === activeStep ? styles.stepActive : ''} ${index < activeStep ? styles.stepCompleted : ''} ${animationPhase >= 2 ? styles.stepVisible : ''}`}
                    style={{ 
                      '--delay': `${index * 200}ms`,
                      '--step-color': step.color
                    }}
                    onMouseEnter={() => setHoveredProcess(index)}
                    onMouseLeave={() => setHoveredProcess(null)}
                  >
                    {/* Efectos neumórficos del paso */}
                    <div className={styles.stepEffects}>
                      <div className={styles.stepGlow}></div>
                      <div className={styles.stepParticles}>
                        {[...Array(6)].map((_, i) => (
                          <div key={i} className={styles.stepParticle}></div>
                        ))}
                      </div>
                    </div>

                    <div className={styles.stepNumber}>
                      <span>{step.number}</span>
                      <div className={styles.numberRing}></div>
                    </div>

                    <div className={styles.stepIcon}>
                      <div className={styles.iconContainer}>
                        <span>{step.icon}</span>
                        <div className={styles.iconGlow}></div>
                      </div>
                    </div>

                    <div className={styles.stepContent}>
                      <h4 className={styles.stepTitle}>{step.title}</h4>
                      <p className={styles.stepDescription}>{step.description}</p>
                      <div className={styles.stepMeta}>
                        <span className={styles.stepDuration}>{step.duration}</span>
                        <span className={styles.stepTools}>{step.tools}</span>
                      </div>
                    </div>

                    {/* Conectores neumórficos */}
                    {index < processSteps.length - 1 && (
                      <div className={styles.stepConnector}>
                        <div className={styles.connectorLine}>
                          <div className={styles.connectorProgress}></div>
                        </div>
                        <div className={styles.connectorArrow}>
                          <span>➤</span>
                          <div className={styles.arrowGlow}></div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios NEUMÓRFICOS BRUTALES */}
        <div className={`${styles.benefitsSection} ${animationPhase >= 3 ? styles.benefitsVisible : ''}`}>
          <div className={styles.benefitsHeader}>
            <div className={styles.benefitsBadge}>
              <div className={styles.badgeGlow}></div>
              <span className={styles.badgeIcon}>🏆</span>
              <span className={styles.badgeText}>
                {ingles ? "COMPETITIVE ADVANTAGES" : "VENTAJAS COMPETITIVAS"}
              </span>
              <div className={styles.badgePulse}></div>
            </div>
            
            <h2 className={styles.benefitsTitle}>
              <span className={styles.titleHighlight}>
                {ingles ? "Why Alex Taller" : "Por Qué Alex Taller"}
              </span>
              <span className={styles.titleMain}>
                {ingles ? "Dominates Tijuana" : "Domina Tijuana"}
              </span>
            </h2>
            
            <p className={styles.benefitsSubtitle}>
              {ingles 
                ? "Discover the technological superiority and expertise that makes us the #1 choice for automotive service in Tijuana"
                : "Descubre la superioridad tecnológica y experiencia que nos convierte en la opción #1 para servicio automotriz en Tijuana"
              }
            </p>
          </div>

          {/* Grid de beneficios ÉPICO */}
          <div className={styles.benefitsGrid}>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`${styles.benefitCard} ${isVisible ? styles.cardVisible : ''} ${hoveredBenefit === index ? styles.cardHovered : ''}`}
                style={{ 
                  '--delay': `${index * 150}ms`,
                  '--card-color': benefit.color,
                  '--card-glow': benefit.glow
                }}
                onMouseEnter={() => setHoveredBenefit(index)}
                onMouseLeave={() => setHoveredBenefit(null)}
              >
                {/* Efectos neumórficos de la card */}
                <div className={styles.cardEffects}>
                  <div className={styles.cardGlow}></div>
                  <div className={styles.cardShine}></div>
                  <div className={styles.cardParticles}>
                    {[...Array(8)].map((_, i) => (
                      <div 
                        key={i} 
                        className={styles.cardParticle}
                        style={{ '--particle-delay': `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Imagen de fondo neumórfica */}
                <div className={styles.cardBackground}>
                  <img 
                    src={benefit.image} 
                    alt={benefit.title}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardOverlay}></div>
                </div>

                {/* Contenido principal */}
                <div className={styles.cardContent}>
                  {/* Icono neumórfico BRUTAL */}
                  <div className={styles.benefitIconContainer}>
                    <div className={styles.iconEffects}>
                      <div className={styles.iconOuterRing}></div>
                      <div className={styles.iconInnerRing}></div>
                      <div className={styles.iconGlow}></div>
                    </div>
                    <span className={styles.benefitIcon}>{benefit.icon}</span>
                  </div>

                  <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                  <p className={styles.benefitDescription}>{benefit.description}</p>

                  {/* Estadísticas neumórficas */}
                  <div className={styles.benefitStats}>
                    <div className={styles.statsContainer}>
                      <span className={styles.statsNumber}>{benefit.stats}</span>
                      <span className={styles.statsLabel}>{benefit.speciality}</span>
                    </div>
                    <div className={styles.statsGlow}></div>
                  </div>

                  {/* Badge de especialidad */}
                  <div className={styles.specialityBadge}>
                    <span>{benefit.speciality}</span>
                    <div className={styles.badgeGlow}></div>
                  </div>
                </div>

                {/* Efectos de hover */}
                <div className={styles.hoverEffects}>
                  <div className={styles.hoverGlow}></div>
                  <div className={styles.hoverRipple}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section NEUMÓRFICO FINAL */}
        <div className={`${styles.ctaSection} ${isVisible ? styles.ctaVisible : ''}`}>
          <div className={styles.ctaContainer}>
            <div className={styles.ctaEffects}>
              <div className={styles.ctaGlow}></div>
              <div className={styles.ctaParticles}>
                {[...Array(12)].map((_, i) => (
                  <div 
                    key={i} 
                    className={styles.ctaParticle}
                    style={{ '--particle-delay': `${i * 0.3}s` }}
                  />
                ))}
              </div>
            </div>

            <div className={styles.ctaIcon}>
              <span>🚗</span>
              <div className={styles.ctaIconGlow}></div>
            </div>

            <h2 className={styles.ctaTitle}>
              {ingles ? "Ready for Master-Level Service?" : "¿Listo para Servicio Nivel Maestro?"}
            </h2>
            
            <p className={styles.ctaDescription}>
              {ingles 
                ? "Join thousands of satisfied customers who trust Alex Taller Mecánico for their automotive needs"
                : "Únete a miles de clientes satisfechos que confían en Alex Taller Mecánico para sus necesidades automotrices"
              }
            </p>

            <div className={styles.ctaButtons}>
              <button className={styles.ctaPrimary}>
                <span>{ingles ? "SCHEDULE SERVICE" : "AGENDAR SERVICIO"}</span>
                <div className={styles.buttonGlow}></div>
              </button>
              
              <button className={styles.ctaSecondary}>
                <span>{ingles ? "GET QUOTE" : "OBTENER COTIZACIÓN"}</span>
                <div className={styles.buttonGlow}></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndexSeccion4;
