import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex.js';
import styles from '../css/indexSeccion6.module.css';

const IndexSeccion6 = () => {
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en : translationsIndex.es;
  const [visibleElements, setVisibleElements] = useState({});
  const [activeLocation, setActiveLocation] = useState(0);
  const sectionRef = useRef(null);

  // Múltiples ubicaciones del taller Alex
  const locations = [
    {
      id: 1,
      name: ingles ? "Alex Auto Shop - Main Location" : "Alex Taller Mecánico - Sucursal Principal",
      address: t.location.address,
      coordinates: [32.5027, -117.0093],
      phone: t.location.phone,
      hours: t.location.hours,
      services: ingles ? 
        ['Engine Repair', 'Brake Service', 'Oil Change', 'Transmission'] :
        ['Reparación de Motor', 'Servicio de Frenos', 'Cambio de Aceite', 'Transmisión'],
      manager: ingles ? 'Alex Rodriguez' : 'Alex Rodríguez',
      rating: 4.9,
      reviews: 250,
      isMain: true
    },
    {
      id: 2,
      name: ingles ? "Alex Auto Shop - North Branch" : "Alex Taller Mecánico - Sucursal Norte",
      address: ingles ? "456 North Ave, Tijuana" : "Av. Norte 456, Tijuana",
      coordinates: [32.5127, -117.0193],
      phone: "+52 (664) 456-7890",
      hours: ingles ? "Mon-Sat: 8AM-6PM" : "Lun-Sáb: 8AM-6PM",
      services: ingles ? 
        ['Quick Service', 'Tire Change', 'Battery', 'AC Service'] :
        ['Servicio Rápido', 'Cambio de Llantas', 'Batería', 'Aire Acondicionado'],
      manager: ingles ? 'Carlos Martinez' : 'Carlos Martínez',
      rating: 4.8,
      reviews: 180,
      isMain: false
    },
    {
      id: 3,
      name: ingles ? "Alex Auto Shop - Express" : "Alex Taller Mecánico - Express",
      address: ingles ? "789 Express Blvd, Tijuana" : "Blvd. Express 789, Tijuana",
      coordinates: [32.4927, -117.0293],
      phone: "+52 (664) 789-0123",
      hours: ingles ? "Daily: 7AM-9PM" : "Diario: 7AM-9PM",
      services: ingles ? 
        ['Quick Oil Change', 'Inspection', 'Diagnostics', 'Emergency'] :
        ['Cambio de Aceite Rápido', 'Inspección', 'Diagnósticos', 'Emergencia'],
      manager: ingles ? 'Maria Gonzalez' : 'María González',
      rating: 4.7,
      reviews: 320,
      isMain: false
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.getAttribute('data-element');
            setVisibleElements(prev => ({
              ...prev,
              [elementId]: true
            }));
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-element]');
    elements?.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleLocationChange = (index) => {
    setActiveLocation(index);
  };

  const handleGetDirections = (location) => {
    const url = `https://maps.google.com/?q=${location.coordinates[0]},${location.coordinates[1]}`;
    window.open(url, '_blank');
  };

  const handleCall = (phone) => {
    window.location.href = `tel:${phone}`;
  };

  const currentLocation = locations[activeLocation];

  return (
    <section ref={sectionRef} className={styles.section} id="ubicacion">
      
      {/* Background Effects */}
      <div className={styles.backgroundEffects}>
        <div className={styles.gradientOrb} style={{ '--delay': '0s' }}></div>
        <div className={styles.gradientOrb} style={{ '--delay': '7s' }}></div>
        <div className={styles.gradientOrb} style={{ '--delay': '14s' }}></div>
        
        {/* Grid Pattern */}
        <div className={styles.gridPattern}></div>
        
        {/* Floating Elements */}
        <div className={styles.floatingElements}>
          <div className={styles.floatingIcon} style={{ '--delay': '0s' }}>📍</div>
          <div className={styles.floatingIcon} style={{ '--delay': '2s' }}>🗺️</div>
          <div className={styles.floatingIcon} style={{ '--delay': '4s' }}>📞</div>
          <div className={styles.floatingIcon} style={{ '--delay': '6s' }}>🕒</div>
        </div>
      </div>

      <div className={styles.container}>
        
        {/* Header Section */}
        <div 
          className={`${styles.header} ${visibleElements.header ? styles.fadeInUp : ''}`}
          data-element="header"
        >
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>📍</span>
            <span className={styles.badgeText}>
              {ingles ? 'Find Us' : 'Encuéntranos'}
            </span>
          </div>
          
          <h2 className={styles.title}>
            {t.location.title}
          </h2>
          
          <p className={styles.subtitle}>
            {t.location.subtitle}
          </p>

          {/* Quick Stats */}
          <div className={styles.quickStats}>
            <div className={styles.quickStat}>
              <div className={styles.statIcon}>🏢</div>
              <div className={styles.statInfo}>
                <div className={styles.statNumber}>3</div>
                <div className={styles.statLabel}>
                  {ingles ? 'Locations' : 'Sucursales'}
                </div>
              </div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.quickStat}>
              <div className={styles.statIcon}>⏰</div>
              <div className={styles.statInfo}>
                <div className={styles.statNumber}>12+</div>
                <div className={styles.statLabel}>
                  {ingles ? 'Hours Daily' : 'Horas Diarias'}
                </div>
              </div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.quickStat}>
              <div className={styles.statIcon}>🚗</div>
              <div className={styles.statInfo}>
                <div className={styles.statNumber}>50+</div>
                <div className={styles.statLabel}>
                  {ingles ? 'Cars Daily' : 'Autos Diarios'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Location Selector */}
        <div 
          className={`${styles.locationSelector} ${visibleElements.selector ? styles.fadeInUp : ''}`}
          data-element="selector"
        >
          {locations.map((location, index) => (
            <button
              key={location.id}
              className={`${styles.locationTab} ${index === activeLocation ? styles.active : ''}`}
              onClick={() => handleLocationChange(index)}
            >
              <div className={styles.tabIcon}>
                {location.isMain ? '🏢' : '📍'}
              </div>
              <div className={styles.tabContent}>
                <div className={styles.tabTitle}>{location.name}</div>
                <div className={styles.tabRating}>
                  <span className={styles.ratingStars}>
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={i < Math.floor(location.rating) ? styles.filled : ''}>⭐</span>
                    ))}
                  </span>
                  <span className={styles.ratingText}>{location.rating}</span>
                </div>
              </div>
              {location.isMain && (
                <div className={styles.mainBadge}>
                  {ingles ? 'Main' : 'Principal'}
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Main Content Grid */}
        <div 
          className={`${styles.contentGrid} ${visibleElements.content ? styles.fadeInUp : ''}`}
          data-element="content"
        >
          
          {/* Map Section */}
          <div className={styles.mapSection}>
            <div className={styles.mapContainer}>
              <div className={styles.mapPlaceholder}>
                <div className={styles.mapContent}>
                  <div className={styles.mapIcon}>🗺️</div>
                  <h4 className={styles.mapTitle}>
                    {ingles ? 'Interactive Map' : 'Mapa Interactivo'}
                  </h4>
                  <p className={styles.mapDescription}>
                    {ingles ? 
                      'Click to open in Google Maps for detailed directions' :
                      'Haz clic para abrir en Google Maps y obtener direcciones detalladas'
                    }
                  </p>
                  <button 
                    className={styles.mapButton}
                    onClick={() => handleGetDirections(currentLocation)}
                  >
                    <span className={styles.buttonIcon}>📍</span>
                    <span>{ingles ? 'Open Map' : 'Abrir Mapa'}</span>
                  </button>
                </div>
                
                {/* Coordinate Display */}
                <div className={styles.coordinateDisplay}>
                  <div className={styles.coordinate}>
                    <span className={styles.coordLabel}>Lat:</span>
                    <span className={styles.coordValue}>{currentLocation.coordinates[0]}</span>
                  </div>
                  <div className={styles.coordinate}>
                    <span className={styles.coordLabel}>Lng:</span>
                    <span className={styles.coordValue}>{currentLocation.coordinates[1]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Location Details */}
          <div className={styles.locationDetails}>
            <div className={styles.locationCard}>
              
              {/* Card Header */}
              <div className={styles.cardHeader}>
                <div className={styles.locationName}>
                  <h3>{currentLocation.name}</h3>
                  {currentLocation.isMain && (
                    <span className={styles.primaryBadge}>
                      {ingles ? 'Primary Location' : 'Ubicación Principal'}
                    </span>
                  )}
                </div>
                <div className={styles.locationRating}>
                  <div className={styles.ratingDisplay}>
                    <span className={styles.ratingNumber}>{currentLocation.rating}</span>
                    <div className={styles.ratingStars}>
                      {Array.from({ length: 5 }, (_, i) => (
                        <span key={i} className={i < Math.floor(currentLocation.rating) ? styles.filled : ''}>⭐</span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.reviewCount}>
                    ({currentLocation.reviews} {ingles ? 'reviews' : 'reseñas'})
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📍</div>
                  <div className={styles.contactDetails}>
                    <div className={styles.contactLabel}>
                      {ingles ? 'Address' : 'Dirección'}
                    </div>
                    <div className={styles.contactValue}>{currentLocation.address}</div>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>📞</div>
                  <div className={styles.contactDetails}>
                    <div className={styles.contactLabel}>
                      {ingles ? 'Phone' : 'Teléfono'}
                    </div>
                    <div className={styles.contactValue}>
                      <a href={`tel:${currentLocation.phone}`} className={styles.phoneLink}>
                        {currentLocation.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>🕒</div>
                  <div className={styles.contactDetails}>
                    <div className={styles.contactLabel}>
                      {ingles ? 'Hours' : 'Horario'}
                    </div>
                    <div className={styles.contactValue}>{currentLocation.hours}</div>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>👨‍💼</div>
                  <div className={styles.contactDetails}>
                    <div className={styles.contactLabel}>
                      {ingles ? 'Manager' : 'Gerente'}
                    </div>
                    <div className={styles.contactValue}>{currentLocation.manager}</div>
                  </div>
                </div>
              </div>

              {/* Services List */}
              <div className={styles.servicesSection}>
                <h4 className={styles.servicesTitle}>
                  {ingles ? 'Available Services' : 'Servicios Disponibles'}
                </h4>
                <div className={styles.servicesList}>
                  {currentLocation.services.map((service, index) => (
                    <div key={index} className={styles.serviceItem}>
                      <span className={styles.serviceIcon}>🔧</span>
                      <span className={styles.serviceName}>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className={styles.actionButtons}>
                <button 
                  className={styles.primaryButton}
                  onClick={() => handleGetDirections(currentLocation)}
                >
                  <span className={styles.buttonIcon}>🗺️</span>
                  <span>{ingles ? 'Get Directions' : 'Obtener Direcciones'}</span>
                </button>
                
                <button 
                  className={styles.secondaryButton}
                  onClick={() => handleCall(currentLocation.phone)}
                >
                  <span className={styles.buttonIcon}>📞</span>
                  <span>{ingles ? 'Call Now' : 'Llamar Ahora'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA Section */}
        <div 
          className={`${styles.finalCta} ${visibleElements.cta ? styles.fadeInUp : ''}`}
          data-element="cta"
        >
          <div className={styles.ctaContent}>
            <div className={styles.ctaIcon}>
              <span>🚗</span>
              <div className={styles.iconGlow}></div>
            </div>
            
            <h3 className={styles.ctaTitle}>
              {ingles ? 
                'Ready to Visit Alex Auto Shop?' : 
                '¿Listo para Visitar Alex Taller Mecánico?'
              }
            </h3>
            
            <p className={styles.ctaDescription}>
              {ingles ? 
                'Choose your nearest location and experience professional automotive service that exceeds expectations. Our expert team is ready to help with all your vehicle needs.' :
                'Elige tu ubicación más cercana y experimenta un servicio automotriz profesional que supera las expectativas. Nuestro equipo experto está listo para ayudarte con todas las necesidades de tu vehículo.'
              }
            </p>

            <div className={styles.ctaFeatures}>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>✅</div>
                <div className={styles.featureText}>
                  {ingles ? 'Free Estimates' : 'Cotizaciones Gratis'}
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>⚡</div>
                <div className={styles.featureText}>
                  {ingles ? 'Quick Service' : 'Servicio Rápido'}
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.featureIcon}>🏆</div>
                <div className={styles.featureText}>
                  {ingles ? 'Quality Guaranteed' : 'Calidad Garantizada'}
                </div>
              </div>
            </div>

            <div className={styles.ctaButtons}>
              <button 
                className={styles.ctaPrimary}
                onClick={() => handleCall(currentLocation.phone)}
              >
                <span className={styles.buttonIcon}>📞</span>
                <span>{ingles ? 'Schedule Service' : 'Agendar Servicio'}</span>
              </button>
              
              <button 
                className={styles.ctaSecondary}
                onClick={() => handleGetDirections(currentLocation)}
              >
                <span className={styles.buttonIcon}>📍</span>
                <span>{ingles ? 'Visit Us Today' : 'Visítanos Hoy'}</span>
              </button>
            </div>

            {/* Emergency Contact */}
            <div className={styles.emergencyContact}>
              <div className={styles.emergencyIcon}>🚨</div>
              <div className={styles.emergencyText}>
                <strong>{ingles ? 'Emergency Service:' : 'Servicio de Emergencia:'}</strong>
                <a href="tel:+526641234567" className={styles.emergencyPhone}>
                  +52 (664) 123-4567
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndexSeccion6;
