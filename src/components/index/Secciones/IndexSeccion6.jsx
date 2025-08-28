import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { currentLanguage } from '../../../data/signals.jsx';
import { translationsIndex } from '../../../data/translationsIndex.js';
import styles from '../css/indexSeccion6.module.css';

// Import react-leaflet components
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
import L from 'leaflet';
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const IndexSeccion6 = () => {
  const lang = useStore(currentLanguage);
  const t = translationsIndex[lang];
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Ubicaciones del taller Alex
  const locations = [
    {
      id: 1,
      name: t.location.locations[0].name,
      address: t.location.locations[0].address,
      coordinates: [31.8617, -116.5378], // Ensenada, BC coordinates
      phone: t.location.locations[0].phone,
      hours: t.location.locations[0].hours,
      services: t.location.locations[0].services,
      type: 'main' // Sucursal principal
    },
    {
      id: 2,
      name: t.location.locations[1].name,
      address: t.location.locations[1].address,
      coordinates: [31.8567, -116.5328], // Segunda ubicación
      phone: t.location.locations[1].phone,
      hours: t.location.locations[1].hours,
      services: t.location.locations[1].services,
      type: 'branch' // Sucursal
    }
  ];

  useEffect(() => {
    setIsMapLoaded(true);
  }, []);

  // Custom marker icons
  const mainIcon = new L.Icon({
    iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    className: 'main-marker'
  });

  const branchIcon = new L.Icon({
    iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [20, 33],
    iconAnchor: [10, 33],
    popupAnchor: [1, -28],
    className: 'branch-marker'
  });

  return (
    <section className={styles.locationSection}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.sectionHeader}>
          <div className={styles.headerBadge}>
            <span className={styles.badgeIcon}>📍</span>
            <span>{t.location.badge}</span>
          </div>
          <h2 className={styles.sectionTitle}>
            {t.location.title}
          </h2>
          <p className={styles.sectionSubtitle}>
            {t.location.subtitle}
          </p>
        </div>

        {/* Map and Info Grid */}
        <div className={styles.mapGrid}>
          
          {/* Interactive Map */}
          <div className={styles.mapContainer}>
            <h3 className={styles.mapTitle}>{t.location.mapTitle}</h3>
            
            {isMapLoaded && (
              <div className={styles.leafletMap}>
                <MapContainer
                  center={[31.8617, -116.5378]}
                  zoom={14}
                  style={{ height: '400px', width: '100%', borderRadius: '16px' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  
                  {locations.map((location) => (
                    <Marker
                      key={location.id}
                      position={location.coordinates}
                      icon={location.type === 'main' ? mainIcon : branchIcon}
                    >
                      <Popup className={styles.customPopup}>
                        <div className={styles.popupContent}>
                          <h4>{location.name}</h4>
                          <p className={styles.popupAddress}>📍 {location.address}</p>
                          <p className={styles.popupPhone}>📞 {location.phone}</p>
                          <p className={styles.popupHours}>🕒 {location.hours}</p>
                          <div className={styles.popupServices}>
                            <strong>{t.location.services}:</strong>
                            <ul>
                              {location.services.map((service, index) => (
                                <li key={index}>{service}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
            )}
            
            {!isMapLoaded && (
              <div className={styles.mapPlaceholder}>
                <div className={styles.loadingSpinner}>
                  <div className={styles.spinner}></div>
                  <p>{t.location.loadingMap}</p>
                </div>
              </div>
            )}
          </div>

          {/* Location Cards */}
          <div className={styles.locationsInfo}>
            <h3 className={styles.locationsTitle}>{t.location.ourLocations}</h3>
            
            <div className={styles.locationCards}>
              {locations.map((location) => (
                <div key={location.id} className={`${styles.locationCard} ${location.type === 'main' ? styles.mainLocation : ''}`}>
                  
                  <div className={styles.cardHeader}>
                    <div className={styles.locationBadge}>
                      <span className={styles.badgeIcon}>
                        {location.type === 'main' ? '🏢' : '🏪'}
                      </span>
                      <span>
                        {location.type === 'main' ? t.location.mainBranch : t.location.branch}
                      </span>
                    </div>
                  </div>

                  <div className={styles.cardContent}>
                    <h4 className={styles.locationName}>{location.name}</h4>
                    
                    <div className={styles.locationDetails}>
                      <div className={styles.detail}>
                        <span className={styles.detailIcon}>📍</span>
                        <span>{location.address}</span>
                      </div>
                      
                      <div className={styles.detail}>
                        <span className={styles.detailIcon}>📞</span>
                        <a href={`tel:${location.phone}`} className={styles.phoneLink}>
                          {location.phone}
                        </a>
                      </div>
                      
                      <div className={styles.detail}>
                        <span className={styles.detailIcon}>🕒</span>
                        <span>{location.hours}</span>
                      </div>
                    </div>

                    <div className={styles.servicesSection}>
                      <h5>{t.location.availableServices}</h5>
                      <ul className={styles.servicesList}>
                        {location.services.map((service, index) => (
                          <li key={index} className={styles.serviceItem}>
                            <span className={styles.serviceIcon}>✓</span>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={styles.cardActions}>
                    <button className={styles.directionsButton}>
                      🗺️ {t.location.getDirections}
                    </button>
                    <button className={styles.callButton}>
                      📞 {t.location.call}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className={styles.contactCta}>
          <div className={styles.ctaContent}>
            <h3>{t.location.cta.title}</h3>
            <p>{t.location.cta.description}</p>
            
            <div className={styles.ctaButtons}>
              <button className={styles.scheduleButton}>
                📅 {t.location.cta.schedule}
              </button>
              <button className={styles.whatsappButton}>
                💬 {t.location.cta.whatsapp}
              </button>
              <button className={styles.emergencyButton}>
                🚨 {t.location.cta.emergency}
              </button>
            </div>
            
            <div className={styles.businessHours}>
              <h4>{t.location.businessHours.title}</h4>
              <div className={styles.hoursGrid}>
                {t.location.businessHours.schedule.map((day, index) => (
                  <div key={index} className={styles.hourItem}>
                    <span className={styles.dayName}>{day.day}</span>
                    <span className={styles.dayHours}>{day.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndexSeccion6;
