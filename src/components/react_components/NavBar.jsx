import React, { useState, useEffect, useRef } from "react";
import styles from "./navbar.module.css";

import { useStore } from "@nanostores/react";
import { isEnglish, selectedCountry } from "../../data/variables"; 
import { useLang } from "../../data/signals";
import { translations } from "../../data/translations";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const country = useStore(selectedCountry);
  const { t, changeLang, lang } = useLang();
  const ingles = useStore(isEnglish);

  // Configuración de las secciones de navegación para Alex Taller Mecánico
  const navSections = {
    es: [
      { id: "inicio", name: "Inicio", href: "#hero" },
      { id: "servicios", name: "Servicios", href: "#servicios" },
      { id: "beneficios", name: "Beneficios", href: "#beneficios" },
      { id: "testimonios", name: "Testimonios", href: "#testimonios" },
      { id: "ubicacion", name: "Ubicación", href: "#ubicacion" },
      { id: "contacto", name: "Contacto", href: "#contacto" }
    ],
    en: [
      { id: "inicio", name: "Home", href: "#hero" },
      { id: "servicios", name: "Services", href: "#servicios" },
      { id: "beneficios", name: "Benefits", href: "#beneficios" },
      { id: "testimonios", name: "Testimonials", href: "#testimonios" },
      { id: "ubicacion", name: "Location", href: "#ubicacion" },
      { id: "contacto", name: "Contact", href: "#contacto" }
    ]
  };

  const currentSections = ingles ? navSections.en : navSections.es;

  useEffect(() => {
    // Detectar scroll para efectos de navbar
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
      
      // Detectar sección activa basada en scroll
      detectActiveSection();
      
      if (isOpen) {
        setIsOpen(false);
      }
    };

    // Detectar sección activa - usar selectores para Alex Taller Mecánico
    const detectActiveSection = () => {
      const sections = [
        { id: "inicio", element: document.querySelector('#hero') },
        { id: "servicios", element: document.querySelector('#servicios') },
        { id: "beneficios", element: document.querySelector('#beneficios') },
        { id: "testimonios", element: document.querySelector('#testimonios') },
        { id: "ubicacion", element: document.querySelector('#ubicacion') },
        { id: "contacto", element: document.querySelector('#contacto') }
      ];

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Detectar cambios de tamaño de ventana
    const handleResize = () => {
      if (window.innerWidth > 900 && isOpen) {
        setIsOpen(false);
      }
    };

    // Event listeners
    const handleClickOutside = (event) => {
      if (
        menuRef.current && 
        !menuRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Función para alternar el menú en móviles
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Función para manejar el cambio de país en el switch
  const handleSwitch = (country) => {
    selectedCountry.set(country);
    if (country === "mex") {
      isEnglish.set(false);
      changeLang("es");
    } else if (country === "usa") {
      isEnglish.set(true);
      changeLang("en");
    }
  };

  // Función para navegar a una sección específica
  const scrollToSection = (href, sectionId) => {
    // Verificar si estamos en la página principal
    const isOnHomePage = window.location.pathname === '/' || window.location.pathname === '/index.astro';
    
    if (!isOnHomePage) {
      // Si no estamos en la página principal, navegar primero a index
      // y luego hacer scroll a la sección
      const targetSection = href.replace('#', '');
      window.location.href = `/?section=${targetSection}`;
      return;
    }
    
    // Si ya estamos en la página principal, hacer scroll normal
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Altura del navbar
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
      setIsOpen(false);
    }
  };

  // Efecto para manejar navegación desde otras páginas
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const targetSection = urlParams.get('section');
    
    if (targetSection) {
      // Esperar a que la página se cargue completamente
      const timer = setTimeout(() => {
        const element = document.querySelector(`#${targetSection}`);
        if (element) {
          const offset = 80;
          const elementPosition = element.offsetTop - offset;
          
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          });
          
          // Encontrar el sectionId correspondiente al targetSection para Alex Taller
          const sectionMapping = {
            'hero': 'inicio',
            'servicios': 'servicios',
            'beneficios': 'beneficios',
            'testimonios': 'testimonios',
            'ubicacion': 'ubicacion',
            'contacto': 'contacto'
          };
          
          const mappedSectionId = sectionMapping[targetSection] || 'inicio';
          setActiveSection(mappedSectionId);
          
          // Limpiar el parámetro de la URL sin recargar la página
          const newUrl = window.location.pathname;
          window.history.replaceState({}, document.title, newUrl);
        }
      }, 500); // Dar tiempo para que se renderice la página
      
      return () => clearTimeout(timer);
    }
  }, []);

  // Función para verificar si el enlace está activo
  const isActiveLink = (sectionId) => {
    return activeSection === sectionId;
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
      {/* Overlay para móvil */}
      {isOpen && <div className={styles.overlay} onClick={toggleMenu} />}
      
      {/* Logo con nombre de Alex Taller Mecánico */}
      <div className={styles.logopic} onClick={() => scrollToSection('#hero', 'inicio')}>
        <img src="/favicon.png" alt="Alex Taller Mecánico Logo" />
        <div className={styles.logoText}>
          <span className={styles.appName}>Alex Taller</span>
          <span className={styles.appTagline}>
            {ingles ? "Professional Service" : "Servicio Profesional"}
          </span>
        </div>
        <div className={styles.logoGlow}></div>
      </div>

      {/* Switch de países mejorado */}
      <div className={styles.countrySwitch}>
        <div
          className={`${styles.switchIconContainer} ${country === "mex" ? styles.active : styles.inactive}`}
          onClick={() => handleSwitch("mex")}
        >
          <img src="/icons/icon_mex.webp" alt="Mexico" className={styles.switchIcon} />
        </div>
        <div
          className={`${styles.switchIconContainer} ${country === "usa" ? styles.active : styles.inactive}`}
          onClick={() => handleSwitch("usa")}
        >
          <img src="/icons/icon_usa.webp" alt="USA" className={styles.switchIcon} />
        </div>
        <div className={styles.switchIndicator}></div>
      </div>

      {/* Ícono de menú hamburguesa animado */}
      <div 
        className={`${styles.hamburger} ${isOpen ? styles.active : ""}`} 
        onClick={toggleMenu} 
        ref={buttonRef}
        aria-label="Toggle menu"
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>

      {/* Menú de navegación con indicadores activos */}
      <ul className={`${styles.navMenu} ${isOpen ? styles.active : ""}`} ref={menuRef}>
        {currentSections.map((section, index) => (
          <li key={section.id} className={styles.navItem}>
            <button 
              onClick={() => scrollToSection(section.href, section.id)}
              className={`${styles.navLink} ${isActiveLink(section.id) ? styles.activeLink : ""}`}
            >
              {section.name}
            </button>
          </li>
        ))}
        
        {/* Botón de contacto para móvil */}
        <li className={`${styles.navItem} ${styles.mobileContactItem} ${styles.mobileOnly}`}>
          <a className={`${styles.contactButton} ${styles.mobileContactButton}`} href="tel:+526641234567">
            <span className={styles.buttonText}>
              {ingles ? "Call Now" : "Llamar Ahora"}
            </span>
            <div className={styles.buttonShine}></div>
          </a>
        </li>
      </ul>

      {/* Grupo de íconos sociales del taller */}
      <div className={styles.socialIconsGroup}>
        <a href="https://www.facebook.com/AlexTallerMecanico" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <img src="/icons/facebook.svg" alt="Facebook Alex Taller" className={styles.icon} />
          <div className={styles.iconRipple}></div>
        </a>
        <a href="https://www.instagram.com/alextaller" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <img src="/icons/insta.svg" alt="Instagram Alex Taller" className={styles.icon} />
          <div className={styles.iconRipple}></div>
        </a>
        <a href="tel:+526641234567" className={styles.socialLink}>
          <img src="/icons/phone.svg" alt="Teléfono" className={styles.icon} />
          <div className={styles.iconRipple}></div>
        </a>
      </div>

      {/* Botón de contacto/cita con efectos premium */}
      <div className={styles.desktopOnly}>
        <a className={styles.contactButton} href="tel:+526641234567">
          <span className={styles.buttonText}>
            {ingles ? "Call Now" : "Llamar Ahora"}
          </span>
          <span className={styles.buttonIcon}>📞</span>
          <div className={styles.buttonShine}></div>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
