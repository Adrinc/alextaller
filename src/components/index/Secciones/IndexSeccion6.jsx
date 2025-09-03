import React, { useState, useEffect, useRef } from 'react';
import { useStore } from '@nanostores/react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { isEnglish } from '../../../data/variables';
import { translationsIndex } from '../../../data/translationsIndex.js';
import styles from '../css/indexSeccion6.module.css';

// Importar estilos de Leaflet
import 'leaflet/dist/leaflet.css';

// Componente de marcador personalizado con hover
const MarkerWithHover = ({ location, icon, isMain, ingles, handleGetDirections }) => {
  const markerRef = useRef(null);

  const handleMouseOver = () => {
    if (markerRef.current) {
      markerRef.current.openPopup();
    }
  };

  const handleMouseOut = () => {
    if (markerRef.current) {
      markerRef.current.closePopup();
    }
  };

  useEffect(() => {
    const marker = markerRef.current;
    if (marker) {
      const markerElement = marker.getElement();
      if (markerElement) {
        markerElement.addEventListener('mouseenter', handleMouseOver);
        markerElement.addEventListener('mouseleave', handleMouseOut);
        
        return () => {
          markerElement.removeEventListener('mouseenter', handleMouseOver);
          markerElement.removeEventListener('mouseleave', handleMouseOut);
        };
      }
    }
  }, []);

  return (
    <Marker
      ref={markerRef}
      position={location.coordinates}
      icon={icon}
    >
      <Popup 
        className="custom-popup"
        closeButton={false}
        autoClose={false}
        closeOnClick={false}
        closeOnEscapeKey={false}
      >
        <div style={{
          padding: '1rem',
          minWidth: '250px',
          fontFamily: 'inherit',
          background: 'white',
          borderRadius: '10px'
        }}>
          <h4 style={{
            color: '#e91e63',
            fontSize: '1.1rem',
            fontWeight: '700',
            marginBottom: '0.5rem',
            textAlign: 'center'
          }}>{location.name}</h4>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            fontSize: '0.9rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>📍</span>
              <span>{location.address}</span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>📞</span>
              <a href={`tel:${location.phone}`} style={{ color: '#e91e63', textDecoration: 'none' }}>
                {location.phone}
              </a>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🕒</span>
              <span>{location.hours}</span>
            </div>
            
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              background: '#f8f9fa',
              padding: '0.5rem',
              borderRadius: '8px',
              marginTop: '0.5rem'
            }}>
              <span>⭐</span>
              <span style={{ fontWeight: '600' }}>
                {location.rating} ({location.reviews} {ingles ? 'reviews' : 'reseñas'})
              </span>
            </div>
            
            <button 
              style={{
                background: 'linear-gradient(135deg, #e91e63, #ff4081)',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                fontWeight: '600',
                cursor: 'pointer',
                marginTop: '0.5rem',
                fontSize: '0.9rem'
              }}
              onClick={() => handleGetDirections(location)}
            >
              {ingles ? 'Get Directions' : 'Obtener Direcciones'}
            </button>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

// Configurar iconos de Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

// Icono personalizado para el taller
const tallerIcon = L.divIcon({
  className: 'custom-marker',
  html: `<div style="
    background: linear-gradient(135deg, #e91e63, #ff4081);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 3px solid white;
    box-shadow: 0 0 15px rgba(233, 30, 99, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
  ">🔧</div>`,
  iconSize: [30, 30],
  iconAnchor: [15, 15],
});

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
      address: ingles ? "123 Revolución Ave, Zona Centro, Tijuana" : "Av. Revolución 123, Zona Centro, Tijuana",
      coordinates: [32.52812368187568, -117.02895947708643], // Ubicación principal
      phone: "+52 (664) 123-4567",
      hours: ingles ? "Mon-Sat: 7AM-7PM" : "Lun-Sáb: 7AM-7PM",
      services: ingles ? 
        ['Engine Repair', 'Brake Service', 'Oil Change', 'Transmission Repair', 'AC Service', 'Diagnostics'] :
        ['Reparación de Motor', 'Servicio de Frenos', 'Cambio de Aceite', 'Reparación de Transmisión', 'Aire Acondicionado', 'Diagnósticos'],
      manager: ingles ? 'Alex Rodriguez' : 'Alex Rodríguez',
      rating: 4.9,
      reviews: 250,
      isMain: true
    },
    {
      id: 2,
      name: ingles ? "Alex Auto Shop - Otay Branch" : "Alex Taller Mecánico - Sucursal Otay",
      address: ingles ? "456 Otay Mesa Blvd, Otay, Tijuana" : "Blvd. Otay Mesa 456, Otay, Tijuana",
      coordinates: [32.51195124136097, -116.90150690660411], // Segunda ubicación
      phone: "+52 (664) 456-7890",
      hours: ingles ? "Mon-Sat: 8AM-6PM" : "Lun-Sáb: 8AM-6PM",
      services: ingles ? 
        ['Quick Service', 'Tire Change', 'Battery', 'Suspension', 'Alignment', 'Inspection'] :
        ['Servicio Rápido', 'Cambio de Llantas', 'Batería', 'Suspensión', 'Alineación', 'Inspección'],
      manager: ingles ? 'Carlos Martinez' : 'Carlos Martínez',
      rating: 4.8,
      reviews: 180,
      isMain: false
    },
    {
      id: 3,
      name: ingles ? "Alex Auto Shop - Playas Branch" : "Alex Taller Mecánico - Sucursal Playas",
      address: ingles ? "789 Playas Blvd, Playas, Tijuana" : "Blvd. Playas 789, Playas, Tijuana",
      coordinates: [32.48857663935443, -116.88108146338035], // Tercera ubicación
      phone: "+52 (664) 789-0123",
      hours: ingles ? "Daily: 7AM-9PM" : "Diario: 7AM-9PM",
      services: ingles ? 
        ['24h Emergency', 'Quick Oil Change', 'Roadside Assistance', 'Towing', 'Mobile Service', 'Insurance Claims'] :
        ['Emergencia 24h', 'Cambio Aceite Rápido', 'Auxilio Vial', 'Grúa', 'Servicio Móvil', 'Seguros'],
      manager: ingles ? 'Maria Gonzalez' : 'María González',
      rating: 4.7,
      reviews: 320,
      isMain: false
    },
    {
      id: 4,
      name: ingles ? "Alex Auto Shop - Express" : "Alex Taller Mecánico - Express",
      address: ingles ? "321 Express Ave, Tijuana" : "Av. Express 321, Tijuana",
      coordinates: [32.488698397535245, -116.96530936246928], // Cuarta ubicación
      phone: "+52 (664) 321-0987",
      hours: ingles ? "Mon-Fri: 6AM-8PM" : "Lun-Vie: 6AM-8PM",
      services: ingles ? 
        ['Express Service', 'Quick Repairs', 'Fleet Service', 'Corporate Accounts', 'Warranties', 'Parts Sales'] :
        ['Servicio Express', 'Reparaciones Rápidas', 'Servicio de Flotillas', 'Cuentas Corporativas', 'Garantías', 'Venta de Refacciones'],
      manager: ingles ? 'Roberto Silva' : 'Roberto Silva',
      rating: 4.6,
      reviews: 195,
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
                <div className={styles.statNumber}>4</div>
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
              <MapContainer
                center={currentLocation.coordinates}
                zoom={12}
                scrollWheelZoom={true}
                zoomControl={true}
                attributionControl={false}
                className={styles.leafletMap}
                key={`map-${activeLocation}`}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                
                {/* Marcadores para todas las ubicaciones */}
                {locations.map((location, index) => (
                  <MarkerWithHover
                    key={location.id}
                    location={location}
                    icon={location.isMain ? tallerIcon : L.divIcon({
                      className: 'custom-marker-branch',
                      html: `<div style="
                        background: linear-gradient(135deg, #ff4081, #e91e63);
                        width: 28px;
                        height: 28px;
                        border-radius: 50%;
                        border: 3px solid white;
                        box-shadow: 0 0 12px rgba(233, 30, 99, 0.5);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        font-size: 14px;
                        color: white;
                      ">🔧</div>`,
                      iconSize: [28, 28],
                      iconAnchor: [14, 14],
                    })}
                    isMain={location.isMain}
                    ingles={ingles}
                    handleGetDirections={handleGetDirections}
                  />
                ))}
              </MapContainer>
              
              {/* Map Overlay Controls */}
              <div className={styles.mapOverlay}>
                <div className={styles.mapControls}>
                  <button 
                    className={styles.mapControlButton}
                    onClick={() => handleGetDirections(currentLocation)}
                    title={ingles ? 'Get Directions' : 'Obtener Direcciones'}
                  >
                    <span className={styles.controlIcon}>🧭</span>
                  </button>
                  <button 
                    className={styles.mapControlButton}
                    onClick={() => handleCall(currentLocation.phone)}
                    title={ingles ? 'Call Now' : 'Llamar Ahora'}
                  >
                    <span className={styles.controlIcon}>📞</span>
                  </button>
                </div>
                
                {/* Coordinate Display */}
                <div className={styles.coordinateDisplay}>
                  <div className={styles.coordinate}>
                    <span className={styles.coordLabel}>Lat:</span>
                    <span className={styles.coordValue}>{currentLocation.coordinates[0].toFixed(4)}</span>
                  </div>
                  <div className={styles.coordinate}>
                    <span className={styles.coordLabel}>Lng:</span>
                    <span className={styles.coordValue}>{currentLocation.coordinates[1].toFixed(4)}</span>
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
