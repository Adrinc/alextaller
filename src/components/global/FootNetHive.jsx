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
      description: "Especialistas en mantenimiento, prevención y mecánica automotriz. Somos de los mejores talleres en Tijuana ven y visítanos ¨Te esperamos¨.",
      contact: {
        title: "Contacto",
        address: "Calle Salvador Alvarado 4645EL",
        city: "Tijuana, México",
        email: "talleralex@gmail.com",
        phone: "+52 (664) 630-4093"
      },
      links: {
        app: {
          title: "Servicios",
          items: [
            { text: "Mantenimiento Preventivo", url: "#mantenimiento" },
            { text: "Mecánica General", url: "#mecanica" },
            { text: "Diagnóstico", url: "#diagnostico" },
            { text: "Reparaciones", url: "#reparaciones" }
          ]
        },
        ciudadano: {
          title: "Especialidades",
          items: [
            { text: "Motor", url: "#motor" },
            { text: "Transmisión", url: "#transmision" },
            { text: "Frenos", url: "#frenos" },
            { text: "Suspensión", url: "#suspension" }
          ]
        },
        municipal: {
          title: "Taller",
          items: [
            { text: "Sobre Nosotros", url: "#about" },
            { text: "Ubicación", url: "#ubicacion" },
            { text: "Horarios", url: "#horarios" },
            { text: "Garantía", url: "#garantia" }
          ]
        },
        legal: {
          title: "Legal",
          items: [
            { text: "Términos de Servicio", url: "#terminos" },
            { text: "Política de Privacidad", url: "#privacidad" },
            { text: "Garantías", url: "#garantias" }
          ]
        }
      },
      copyright: "© 2025 Alex Taller Mecánico, Tijuana. Todos los derechos reservados.",
      appStores: {
        playStore: "¡Agenda tu cita!",
        appStore: "¡Llámanos ahora!"
      }
    },
    en: {
      description: "Specialists in automotive maintenance, prevention and mechanics. We are one of the best workshops in Tijuana come and visit us ¨We are waiting for you¨.",
      contact: {
        title: "Contact",
        address: "Salvador Alvarado 4645EL Street",
        city: "Tijuana, Mexico",
        email: "talleralex@gmail.com",
        phone: "+52 (664) 630-4093"
      },
      links: {
        app: {
          title: "Services",
          items: [
            { text: "Preventive Maintenance", url: "#maintenance" },
            { text: "General Mechanics", url: "#mechanics" },
            { text: "Diagnosis", url: "#diagnosis" },
            { text: "Repairs", url: "#repairs" }
          ]
        },
        ciudadano: {
          title: "Specialties",
          items: [
            { text: "Engine", url: "#engine" },
            { text: "Transmission", url: "#transmission" },
            { text: "Brakes", url: "#brakes" },
            { text: "Suspension", url: "#suspension" }
          ]
        },
        municipal: {
          title: "Workshop",
          items: [
            { text: "About Us", url: "#about" },
            { text: "Location", url: "#location" },
            { text: "Hours", url: "#hours" },
            { text: "Warranty", url: "#warranty" }
          ]
        },
        legal: {
          title: "Legal",
          items: [
            { text: "Terms of Service", url: "#terms" },
            { text: "Privacy Policy", url: "#privacy" },
            { text: "Warranties", url: "#warranties" }
          ]
        }
      },
      copyright: "© 2025 Alex Taller Mecánico, Tijuana. All rights reserved.",
      appStores: {
        playStore: "Schedule your appointment!",
        appStore: "Call us now!"
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
              <img src="/favicon.png" alt="Alex Taller Mecánico" className={styles.logo} />
              <h3 className={styles.appName}>Alex Taller Mecánico</h3>
              <span className={styles.appTagline}>
                {ingles ? "Professional Auto Service" : "Servicio Automotriz Profesional"}
              </span>
            </div>
            <p className={styles.companyDescription}>{textos.description}</p>
            
            {/* Action Buttons */}
            <div className={styles.appStores}>
              <a href="tel:+526646304093" className={styles.storeButton}>
                <svg className={styles.storeIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <div className={styles.storeText}>
                  <span className={styles.storeLabel}>
                    {ingles ? "Call us" : "Llámanos"}
                  </span>
                  <span className={styles.storeName}>{ingles ? "Call now!" : "¡Llama ahora!"}</span>
                </div>
              </a>
              <a href="#contacto" className={styles.storeButton}>
                <svg className={styles.storeIcon} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                </svg>
                <div className={styles.storeText}>
                  <span className={styles.storeLabel}>
                    {ingles ? "Schedule" : "Agenda"}
                  </span>
                  <span className={styles.storeName}>{ingles ? "Appointment" : "tu cita"}</span>
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
            <a href="https://www.facebook.com/tallermecanicoalex/" target="_blank" rel="noopener noreferrer">
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="tel:+526646304093">
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </a>
            <a href="mailto:talleralex@gmail.com">
              <img src="/icons/email.svg" alt="Email" className={styles.socialIcon} />
            </a>
            <a href="#ubicacion">
              <svg className={styles.socialIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FootNetHive;