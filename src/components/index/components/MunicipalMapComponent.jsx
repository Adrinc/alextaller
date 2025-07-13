import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { isEnglish } from '../../../data/variables';
import { useStore } from '@nanostores/react';
import styles from '../css/municipalMapComponent.module.css';

// Configuración de iconos personalizados para Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Iconos personalizados para cada categoría
const createCustomIcon = (emoji, priority) => {
  const priorityColor = {
    critical: '#DC2626',
    high: '#EA580C',
    medium: '#D97706',
    low: '#16A34A'
  };

  return L.divIcon({
    html: `
      <div style="
        background: ${priorityColor[priority] || '#6B7280'};
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        border: 3px solid #FFFFFF;
        font-size: 18px;
        animation: pulse 2s infinite;
      ">
        ${emoji}
      </div>
      <style>
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); }
        }
      </style>
    `,
    className: styles.customMarker,
    iconSize: [40, 40],
    iconAnchor: [20, 20]
  });
};

const MunicipalMapComponent = () => {
  const ingles = useStore(isEnglish);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeReports, setActiveReports] = useState(47);
  const [urgentReports, setUrgentReports] = useState(12);

  // Coordenadas de Ensenada, Baja California
  const ensenadasCenter = [31.8667, -116.5969];

  // Datos de reportes de ejemplo distribuidos por Ensenada
  const reportData = [
    {
      id: 1,
      position: [31.8700, -116.5950],
      category: 'lighting',
      emoji: '💡',
      priority: 'high',
      title: ingles ? 'Street Lighting' : 'Alumbrado Público',
      description: ingles ? 'Multiple street lights out on Av. Reforma' : 'Múltiples luminarias apagadas en Av. Reforma',
      department: ingles ? 'Public Works' : 'Obras Públicas',
      reportedAt: '2 hours ago',
      status: 'pending'
    },
    {
      id: 2,
      position: [31.8630, -116.5980],
      category: 'roads',
      emoji: '🛣️',
      priority: 'medium',
      title: ingles ? 'Road Infrastructure' : 'Infraestructura Vial',
      description: ingles ? 'Pothole affecting traffic on Blvd. Costero' : 'Bache afectando tráfico en Blvd. Costero',
      department: ingles ? 'Public Works' : 'Obras Públicas',
      reportedAt: '4 hours ago',
      status: 'in_progress'
    },
    {
      id: 3,
      position: [31.8650, -116.6020],
      category: 'waste',
      emoji: '🗑️',
      priority: 'low',
      title: ingles ? 'Waste Management' : 'Gestión de Residuos',
      description: ingles ? 'Overflowing containers in Zona Centro' : 'Contenedores desbordados en Zona Centro',
      department: ingles ? 'Environmental Services' : 'Servicios Ambientales',
      reportedAt: '6 hours ago',
      status: 'pending'
    },
    {
      id: 4,
      position: [31.8690, -116.5920],
      category: 'security',
      emoji: '🚨',
      priority: 'critical',
      title: ingles ? 'Public Safety' : 'Seguridad Pública',
      description: ingles ? 'Non-functional traffic light intersection' : 'Semáforo no funcional en intersección',
      department: ingles ? 'Traffic Control' : 'Control de Tráfico',
      reportedAt: '30 minutes ago',
      status: 'urgent'
    },
    {
      id: 5,
      position: [31.8720, -116.5890],
      category: 'water',
      emoji: '💧',
      priority: 'high',
      title: ingles ? 'Water Services' : 'Servicios de Agua',
      description: ingles ? 'Water leak affecting main avenue' : 'Fuga de agua afectando avenida principal',
      department: ingles ? 'Water Department' : 'Departamento de Agua',
      reportedAt: '1 hour ago',
      status: 'in_progress'
    },
    {
      id: 6,
      position: [31.8610, -116.6050],
      category: 'parks',
      emoji: '🌳',
      priority: 'medium',
      title: ingles ? 'Parks & Recreation' : 'Parques y Recreación',
      description: ingles ? 'Damaged playground equipment' : 'Equipo de parque dañado',
      department: ingles ? 'Parks Department' : 'Departamento de Parques',
      reportedAt: '3 hours ago',
      status: 'pending'
    }
  ];

  // Filtrar reportes según categoría seleccionada
  const filteredReports = selectedCategory === 'all' 
    ? reportData 
    : reportData.filter(report => report.category === selectedCategory);

  // Función para remover elementos de atribución
  const removeAttribution = () => {
    setTimeout(() => {
      // Remover todos los elementos de atribución de Leaflet
      const attributionElements = document.querySelectorAll(
        '.leaflet-control-attribution, .leaflet-attribution-flag, [title="A JavaScript library for interactive maps"], a[href="https://leafletjs.com"]'
      );
      
      attributionElements.forEach(element => {
        if (element) {
          element.remove();
        }
      });

      // Remover específicamente elementos que contengan texto "Leaflet"
      const allElements = document.querySelectorAll('*');
      allElements.forEach(element => {
        if (element.textContent && element.textContent.includes('Leaflet')) {
          const parent = element.closest('.leaflet-control-attribution');
          if (parent) {
            parent.remove();
          }
        }
      });

      // Remover contenedor de controles de atribución
      const controlContainers = document.querySelectorAll('.leaflet-bottom.leaflet-right');
      controlContainers.forEach(container => {
        const attribution = container.querySelector('.leaflet-control-attribution');
        if (attribution) {
          attribution.remove();
        }
      });
    }, 100);
  };

  // Simular actualización de estadísticas en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveReports(prev => prev + Math.floor(Math.random() * 3) - 1);
      setUrgentReports(prev => Math.max(0, prev + Math.floor(Math.random() * 3) - 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Efecto para remover atribución después del montaje y periódicamente
  useEffect(() => {
    // Remover inmediatamente
    removeAttribution();
    
    // Remover cada segundo durante los primeros 5 segundos
    const cleanupInterval = setInterval(removeAttribution, 1000);
    
    setTimeout(() => {
      clearInterval(cleanupInterval);
    }, 5000);

    // Observer para detectar cambios en el DOM
    const observer = new MutationObserver(removeAttribution);
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    return () => {
      observer.disconnect();
      clearInterval(cleanupInterval);
    };
  }, []);

  return (
    <div className={styles.mapSection}>
      <div className={styles.mapHeader}>
        <div className={styles.headerBadge}>
          <svg className={styles.badgeIcon} viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5M12,2A7,7 0 0,1 19,9C19,14.25 12,22 12,22C12,22 5,14.25 5,9A7,7 0 0,1 12,2M12,4A5,5 0 0,0 7,9C7,10 7,12 12,18.71C17,12 17,10 17,9A5,5 0 0,0 12,4Z"/>
          </svg>
          <span>{ingles ? "Live Municipal Dashboard" : "Panel Municipal en Vivo"}</span>
        </div>

        <h3 className={styles.mapTitle}>
          {ingles ? "Real-time Incident Monitoring - Ensenada" : "Monitoreo de Incidencias en Tiempo Real - Ensenada"}
        </h3>
        <p className={styles.mapDescription}>
          {ingles 
            ? "Interactive map showing active municipal reports with real-time updates, priority levels, and department assignments across Ensenada, Baja California."
            : "Mapa interactivo mostrando reportes municipales activos con actualizaciones en tiempo real, niveles de prioridad y asignaciones departamentales en Ensenada, Baja California."
          }
        </p>
      </div>

      <div className={styles.mapContainer}>
        {/* Panel de control y estadísticas */}
        <div className={styles.controlsPanel}>
          <div className={styles.statsCards}>
            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statNumber}>{activeReports}</span>
                <span className={styles.statLabel}>{ingles ? "Active Reports" : "Reportes Activos"}</span>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"/>
                </svg>
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statNumber}>{urgentReports}</span>
                <span className={styles.statLabel}>{ingles ? "Urgent Cases" : "Casos Urgentes"}</span>
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statIcon}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"/>
                </svg>
              </div>
              <div className={styles.statInfo}>
                <span className={styles.statNumber}>3.2hrs</span>
                <span className={styles.statLabel}>{ingles ? "Avg Response" : "Respuesta Prom."}</span>
              </div>
            </div>
          </div>

          {/* Filtros de categoría */}
          <div className={styles.categoryFilters}>
            <h4 className={styles.filtersTitle}>
              {ingles ? "Filter by Category" : "Filtrar por Categoría"}
            </h4>
            <div className={styles.filterButtons}>
              <button 
                className={`${styles.filterButton} ${selectedCategory === 'all' ? styles.active : ''}`}
                onClick={() => setSelectedCategory('all')}
              >
                {ingles ? "All Reports" : "Todos los Reportes"} ({reportData.length})
              </button>
              <button 
                className={`${styles.filterButton} ${selectedCategory === 'lighting' ? styles.active : ''}`}
                onClick={() => setSelectedCategory('lighting')}
              >
                💡 {ingles ? "Lighting" : "Alumbrado"} ({reportData.filter(r => r.category === 'lighting').length})
              </button>
              <button 
                className={`${styles.filterButton} ${selectedCategory === 'roads' ? styles.active : ''}`}
                onClick={() => setSelectedCategory('roads')}
              >
                🛣️ {ingles ? "Roads" : "Vialidad"} ({reportData.filter(r => r.category === 'roads').length})
              </button>
              <button 
                className={`${styles.filterButton} ${selectedCategory === 'security' ? styles.active : ''}`}
                onClick={() => setSelectedCategory('security')}
              >
                🚨 {ingles ? "Security" : "Seguridad"} ({reportData.filter(r => r.category === 'security').length})
              </button>
              <button 
                className={`${styles.filterButton} ${selectedCategory === 'water' ? styles.active : ''}`}
                onClick={() => setSelectedCategory('water')}
              >
                💧 {ingles ? "Water" : "Agua"} ({reportData.filter(r => r.category === 'water').length})
              </button>
            </div>
          </div>
        </div>

        {/* Mapa interactivo */}
        <div className={styles.mapWrapper}>
          <MapContainer
            center={ensenadasCenter}
            zoom={13}
            className={styles.leafletMap}
            scrollWheelZoom={true}
            zoomControl={true}
            attributionControl={false}
            whenCreated={removeAttribution}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            
            {filteredReports.map((report) => (
              <Marker
                key={report.id}
                position={report.position}
                icon={createCustomIcon(report.emoji, report.priority)}
              >
                <Popup className={styles.customPopup}>
                  <div className={styles.popupContent}>
                    <div className={styles.popupHeader}>
                      <span className={styles.popupEmoji}>{report.emoji}</span>
                      <div className={styles.popupInfo}>
                        <h4 className={styles.popupTitle}>{report.title}</h4>
                        <span className={`${styles.priorityBadge} ${styles[report.priority]}`}>
                          {ingles ? report.priority.charAt(0).toUpperCase() + report.priority.slice(1) : 
                            report.priority === 'critical' ? 'Crítico' :
                            report.priority === 'high' ? 'Alto' :
                            report.priority === 'medium' ? 'Medio' : 'Bajo'
                          }
                        </span>
                      </div>
                    </div>
                    
                    <p className={styles.popupDescription}>{report.description}</p>
                    
                    <div className={styles.popupMeta}>
                      <div className={styles.metaItem}>
                        <strong>{ingles ? "Department:" : "Departamento:"}</strong>
                        <span>{report.department}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <strong>{ingles ? "Reported:" : "Reportado:"}</strong>
                        <span>{report.reportedAt}</span>
                      </div>
                      <div className={styles.metaItem}>
                        <strong>{ingles ? "Status:" : "Estado:"}</strong>
                        <span className={`${styles.statusBadge} ${styles[report.status]}`}>
                          {ingles ? 
                            report.status === 'pending' ? 'Pending' :
                            report.status === 'in_progress' ? 'In Progress' : 'Urgent'
                            :
                            report.status === 'pending' ? 'Pendiente' :
                            report.status === 'in_progress' ? 'En Progreso' : 'Urgente'
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {/* Overlay de información en tiempo real */}
          <div className={styles.liveIndicator}>
            <div className={styles.pulseIndicator}></div>
            <span>{ingles ? "Live Updates" : "Actualizaciones en Vivo"}</span>
          </div>
        </div>
      </div>

      {/* Leyenda de prioridades */}
      <div className={styles.legend}>
        <h4 className={styles.legendTitle}>
          {ingles ? "Priority Levels" : "Niveles de Prioridad"}
        </h4>
        <div className={styles.legendItems}>
          <div className={styles.legendItem}>
            <div className={`${styles.legendColor} ${styles.critical}`}></div>
            <span>{ingles ? "Critical" : "Crítico"}</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendColor} ${styles.high}`}></div>
            <span>{ingles ? "High" : "Alto"}</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendColor} ${styles.medium}`}></div>
            <span>{ingles ? "Medium" : "Medio"}</span>
          </div>
          <div className={styles.legendItem}>
            <div className={`${styles.legendColor} ${styles.low}`}></div>
            <span>{ingles ? "Low" : "Bajo"}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MunicipalMapComponent;