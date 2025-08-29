import React, { useState, useEffect } from 'react';
import { useStore } from '@nanostores/react';
import { isEnglish } from '../../../data/variables';
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
  const ingles = useStore(isEnglish);
  const t = ingles ? translationsIndex.en : translationsIndex.es;
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Ubicación del taller Alex
  const location = {
    name: ingles ? "Alex Auto Shop" : "Alex Taller Mecánico",
    address: t.location.address,
    coordinates: [32.5027, -117.0093], // Tijuana, BC coordinates
    phone: t.location.phone,
    hours: t.location.hours
  };

  useEffect(() => {
    setIsMapLoaded(true);
  }, []);

  return (
    <section className={styles.section} id="ubicacion">
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t.location.title}
          </h2>
          <p className={styles.subtitle}>
            {t.location.subtitle}
          </p>
        </div>

        {/* Map and Info Grid */}
        <div className={styles.mapGrid}>
          
          {/* Interactive Map */}
          <div className={styles.mapContainer}>
            
            {isMapLoaded && (
              <div className={styles.leafletMap}>
                <MapContainer
                  center={location.coordinates}
                  zoom={15}
                  style={{ height: '400px', width: '100%', borderRadius: '16px' }}
                >
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  />
                  
                  <Marker position={location.coordinates}>
                    <Popup className={styles.customPopup}>
                      <div className={styles.popupContent}>
                        <h4>{location.name}</h4>
                        <p className={styles.popupAddress}>📍 {location.address}</p>
                        <p className={styles.popupPhone}>📞 {location.phone}</p>
                        <p className={styles.popupHours}>🕒 {location.hours}</p>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>
            )}
            
            {!isMapLoaded && (
              <div className={styles.mapPlaceholder}>
                <div className={styles.loadingSpinner}>
                  <div className={styles.spinner}></div>
                  <p>{ingles ? "Loading map..." : "Cargando mapa..."}</p>
                </div>
              </div>
            )}
          </div>

          {/* Location Info */}
          <div className={styles.locationInfo}>
            <div className={styles.locationCard}>
              
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

                <div className={styles.cardActions}>
                  <button className={styles.directionsButton}>
                    🗺️ {t.location.directions}
                  </button>
                  <button className={styles.callButton}>
                    📞 {t.location.call}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndexSeccion6;
