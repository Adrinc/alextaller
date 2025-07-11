import React from "react";
import { isEnglish } from '../../data/variables';
import { useStore } from '@nanostores/react';
import styles from "./css/footnethive.module.css";

const FootNetHive = () => {
  const ingles = useStore(isEnglish);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const content = {
    es: {
      description: "Ojo Ciudadano es la aplicación oficial del municipio de Ensenada para fortalecer la participación ciudadana y mejorar los servicios públicos a través de reportes rápidos y seguimiento en tiempo real.",
      contact: {
        title: "Contacto",
        address: "Av. Diamante 1180, Zona Centro",
        city: "Ensenada, Baja California, México",
        email: "ojociudadano@ensenada.gob.mx",
        phone: "+52 (646) 172-3000"
      },
      links: {
        app: {
          title: "Aplicación",
          items: [
            { text: "Descargar App", url: "#download" },
            { text: "Cómo Funciona", url: "#como-funciona" },
            { text: "Categorías", url: "#categorias" },
            { text: "Reportar Problema", url: "#reportar" }
          ]
        },
        ciudadano: {
          title: "Ciudadano",
          items: [
            { text: "Mis Reportes", url: "#mis-reportes" },
            { text: "Estado del Reporte", url: "#estado" },
            { text: "Mapa de Incidencias", url: "#mapa" },
            { text: "Emergencias SOS", url: "#sos" }
          ]
        },
        municipal: {
          title: "Gobierno",
          items: [
            { text: "Portal Municipal", url: "https://ensenada.gob.mx" },
            { text: "Transparencia", url: "#transparencia" },
            { text: "Estadísticas", url: "#estadisticas" },
            { text: "Panel Administrativo", url: "#admin" }
          ]
        },
        legal: {
          title: "Legal",
          items: [
            { text: "Términos de Uso", url: "#terminos" },
            { text: "Política de Privacidad", url: "#privacidad" },
            { text: "Aviso de Privacidad", url: "#aviso-privacidad" }
          ]
        }
      },
      copyright: "© 2025 Municipio de Ensenada, Baja California. Todos los derechos reservados.",
      appStores: {
        playStore: "Disponible en Google Play",
        appStore: "Disponible en App Store"
      }
    },
    en: {
      description: "Ojo Ciudadano is the official app of the Municipality of Ensenada to strengthen citizen participation and improve public services through quick reports and real-time tracking.",
      contact: {
        title: "Contact",
        address: "1180 Diamante Ave, Downtown",
        city: "Ensenada, Baja California, Mexico",
        email: "ojociudadano@ensenada.gob.mx",
        phone: "+52 (646) 172-3000"
      },
      links: {
        app: {
          title: "Application",
          items: [
            { text: "Download App", url: "#download" },
            { text: "How It Works", url: "#how-it-works" },
            { text: "Categories", url: "#categories" },
            { text: "Report Problem", url: "#report" }
          ]
        },
        ciudadano: {
          title: "Citizen",
          items: [
            { text: "My Reports", url: "#my-reports" },
            { text: "Report Status", url: "#status" },
            { text: "Incident Map", url: "#map" },
            { text: "SOS Emergency", url: "#sos" }
          ]
        },
        municipal: {
          title: "Government",
          items: [
            { text: "Municipal Portal", url: "https://ensenada.gob.mx" },
            { text: "Transparency", url: "#transparency" },
            { text: "Statistics", url: "#statistics" },
            { text: "Admin Panel", url: "#admin" }
          ]
        },
        legal: {
          title: "Legal",
          items: [
            { text: "Terms of Use", url: "#terms" },
            { text: "Privacy Policy", url: "#privacy" },
            { text: "Privacy Notice", url: "#privacy-notice" }
          ]
        }
      },
      copyright: "© 2025 Municipality of Ensenada, Baja California. All rights reserved.",
      appStores: {
        playStore: "Available on Google Play",
        appStore: "Available on App Store"
      }
    }
  };

  const textos = ingles ? content.en : content.es;

  return (
    <footer className={styles.footer}>
      <button 
        className={styles.scrollToTop} 
        onClick={handleScrollToTop}
        aria-label="Volver arriba"
        title={ingles ? "Back to top" : "Volver arriba"}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 15l-6-6-6 6"/>
        </svg>
      </button>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.logoSection}>
            <div className={styles.logoContainer}>
              <img src="/favicon.png" alt="Ojo Ciudadano" className={styles.logo} />
              <h3 className={styles.appName}>Ojo Ciudadano</h3>
              <span className={styles.appTagline}>
                {ingles ? "Your voice counts" : "Tu voz cuenta"}
              </span>
            </div>
            <p className={styles.companyDescription}>{textos.description}</p>
            
            {/* App Store Badges */}
            <div className={styles.appStores}>
              <a href="#download-android" className={styles.storeButton}>
                <svg className={styles.storeIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className={styles.storeText}>
                  <span className={styles.storeLabel}>
                    {ingles ? "Get it on" : "Descárgala en"}
                  </span>
                  <span className={styles.storeName}>Google Play</span>
                </div>
              </a>
              <a href="#download-ios" className={styles.storeButton}>
                <svg className={styles.storeIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
                <div className={styles.storeText}>
                  <span className={styles.storeLabel}>
                    {ingles ? "Download on the" : "Descargar en"}
                  </span>
                  <span className={styles.storeName}>App Store</span>
                </div>
              </a>
            </div>

            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>{textos.contact.address}<br/>{textos.contact.city}</span>
              </div>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>{textos.contact.email}</span>
              </div>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>{textos.contact.phone}</span>
              </div>
            </div>
          </div>

          <div className={styles.linkSection}>
            <h3 className={styles.linkTitle}>{textos.links.app.title}</h3>
            <ul className={styles.linkList}>
              {textos.links.app.items.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className={styles.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkSection}>
            <h3 className={styles.linkTitle}>{textos.links.ciudadano.title}</h3>
            <ul className={styles.linkList}>
              {textos.links.ciudadano.items.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className={styles.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkSection}>
            <h3 className={styles.linkTitle}>{textos.links.municipal.title}</h3>
            <ul className={styles.linkList}>
              {textos.links.municipal.items.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className={styles.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkSection}>
            <h3 className={styles.linkTitle}>{textos.links.legal.title}</h3>
            <ul className={styles.linkList}>
              {textos.links.legal.items.map((item, index) => (
                <li key={index}>
                  <a href={item.url} className={styles.link}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>{textos.copyright}</p>
          <div className={styles.socialLinks}>
            <a href="https://facebook.com/MunicipioEnsenada" target="_blank" rel="noopener noreferrer">
              <img src="/icons/facebook.svg" alt="Facebook" className={styles.socialIcon} />
            </a>
            <a href="https://twitter.com/EnsenadaAyto" target="_blank" rel="noopener noreferrer">
              <img src="/icons/twitter.svg" alt="Twitter" className={styles.socialIcon} />
            </a>
            <a href="mailto:ojociudadano@ensenada.gob.mx">
              <img src="/icons/email.svg" alt="Email" className={styles.socialIcon} />
            </a>
            <a href="https://ensenada.gob.mx" target="_blank" rel="noopener noreferrer">
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FootNetHive;