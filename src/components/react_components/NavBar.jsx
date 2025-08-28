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

  // Configuración de las secciones de navegación
  const navSections = {
    es: [
      { id: "inicio", name: "Inicio", href: "#hero" },
      { id: "servicios", name: "Servicios", href: "#servicios" },
      { id: "promociones", name: "Promociones", href: "#promociones" },
      { id: "citas", name: "Citas", href: "/citas" },
      { id: "sucursales", name: "Sucursales", href: "/sucursales" },
      { id: "nosotros", name: "Nosotros", href: "/nosotros" }
    ],
    en: [
      { id: "inicio", name: "Home", href: "#hero" },
      { id: "servicios", name: "Services", href: "#servicios" },
      { id: "promociones", name: "Promotions", href: "#promociones" },
      { id: "citas", name: "Appointments", href: "/citas" },
      { id: "sucursales", name: "Branches", href: "/sucursales" },
      { id: "nosotros", name: "About Us", href: "/nosotros" }
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

    // Detectar sección activa - usar siempre los mismos selectores
    const detectActiveSection = () => {
      const sections = [
        { id: "inicio", element: document.querySelector('#hero') },
        { id: "app", element: document.querySelector('#que-es') },
        { id: "funciones", element: document.querySelector('#caracteristicas') },
        { id: "reportar", element: document.querySelector('#categorias') },
        { id: "gobierno", element: document.querySelector('#soporte-institucional') },
        { id: "ia", element: document.querySelector('#ia-analisis') },
        { id: "faq", element: document.querySelector('#preguntas') }
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

  // Función para navegar a la sección de IA
  const scrollToIASection = () => {
    // Verificar si estamos en la página principal
    const isOnHomePage = window.location.pathname === '/' || window.location.pathname === '/index.astro';
    
    if (!isOnHomePage) {
      // Si no estamos en la página principal, navegar primero a index
      window.location.href = '/?section=ia-analisis';
      return;
    }
    
    // Si ya estamos en la página principal, hacer scroll normal
    const element = document.querySelector('#ia-analisis');
    if (element) {
      const offset = 80; // Altura del navbar
      const elementPosition = element.offsetTop - offset;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setActiveSection('ia');
      setIsOpen(false);
    }
  };

  // Función para navegación suave a secciones
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
          
          // Encontrar el sectionId correspondiente al targetSection
          const sectionMapping = {
            'hero': 'inicio',
            'que-es': 'app',
            'caracteristicas': 'funciones',
            'categorias': 'reportar',
            'soporte-institucional': 'gobierno',
            'ia-analisis': 'ia',
            'preguntas': 'faq'
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
      
      {/* Logo con nombre de la app */}
      <div className={styles.logopic} onClick={() => scrollToSection('#hero', 'inicio')}>
        <img src="/favicon.png" alt="Ojo Ciudadano Logo" />
        <div className={styles.logoText}>
          <span className={styles.appName}>Ojo Ciudadano</span>
          <span className={styles.appTagline}>
            {ingles ? "Your voice counts" : "Tu voz cuenta"}
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

      {/* Botón de IA */}
      <div className={styles.desktopOnly}>
        <button 
          className={`${styles.aiButton} ${isActiveLink('ia') ? styles.activeAI : ""}`}
          onClick={scrollToIASection}
          aria-label="Navegar a sección de Inteligencia Artificial"
        >
          <div className={styles.aiIcon}>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
            </svg>
          </div>
          <span className={styles.aiText}>IA</span>
          <div className={styles.aiGlow}></div>
          <div className={styles.aiPulse}></div>
        </button>
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
        
        {/* Botón de IA para móvil */}
        <li className={`${styles.navItem} ${styles.mobileOnly}`}>
          <button 
            onClick={scrollToIASection}
            className={`${styles.navLink} ${styles.aiNavLink} ${isActiveLink('ia') ? styles.activeLink : ""}`}
          >
            <div className={styles.aiIconMobile}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M7.5,13A2.5,2.5 0 0,0 5,15.5A2.5,2.5 0 0,0 7.5,18A2.5,2.5 0 0,0 10,15.5A2.5,2.5 0 0,0 7.5,13M16.5,13A2.5,2.5 0 0,0 14,15.5A2.5,2.5 0 0,0 16.5,18A2.5,2.5 0 0,0 19,15.5A2.5,2.5 0 0,0 16.5,13Z"/>
              </svg>
            </div>
            IA
          </button>
        </li>
        
        {/* Botón de contacto para móvil */}
        <li className={`${styles.navItem} ${styles.mobileContactItem} ${styles.mobileOnly}`}>
          <a className={`${styles.contactButton} ${styles.mobileContactButton}`} href="/contacto">
            <span className={styles.buttonText}>
              {ingles ? "Contact" : "Contacto"}
            </span>
            <div className={styles.buttonShine}></div>
          </a>
        </li>
      </ul>

      {/* Grupo de íconos sociales gubernamentales */}
      <div className={styles.socialIconsGroup}>
        <a href="https://www.facebook.com/MunicipioEnsenada" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <img src="/icons/facebook.svg" alt="Facebook Municipal" className={styles.icon} />
          <div className={styles.iconRipple}></div>
        </a>
        <a href="https://twitter.com/EnsenadaAyto" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
          <img src="/icons/twitter.svg" alt="Twitter Municipal" className={styles.icon} />
          <div className={styles.iconRipple}></div>
        </a>
        <a href="mailto:ojociudadano@ensenada.gob.mx" className={styles.socialLink}>
          <img src="/icons/email.svg" alt="Email" className={styles.icon} />
          <div className={styles.iconRipple}></div>
        </a>
      </div>

      {/* Botón de contacto con efectos premium */}
      <div className={styles.desktopOnly}>
        <a className={styles.contactButton} href="/contacto">
          <span className={styles.buttonText}>
            {ingles ? "Contact" : "Contacto"}
          </span>
          <div className={styles.buttonShine}></div>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
